// Конфиг для сервера

import { config } from "dotenv";
import { ENVS, GLOBAL_ARGS } from "../assets/env";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import path from "path";
import webpack from "webpack";
import webpackNodeExternals from "webpack-node-externals";
import { ROOT_DIR_FROM_WEBPACK } from "../assets/dir";
import { merge } from "lodash-es";

config();

type entryT = {
    app: string;
};

const { __DEV__ } = ENVS;

export default ({ entry, lang }: { entry: entryT; lang: string }) =>
    (webpackConfig: webpack.Configuration) => {
        Object.assign(webpackConfig, {
            name: `ssr_bundles_${lang}`,
            target: "node",
            devtool: "source-map",
            entry: entry.app,
            node: __DEV__ ? "development" : "production",
            externals: [webpackNodeExternals()],

            resolve: {
                extensions: [".js", ".ts", ".tsx", ".json"],
                // подключаю алиасы
                plugins: [new TsconfigPathsPlugin()],
            },

            output: {
                filename: `ssr.bundles.${lang}.js`,
                libraryTarget: "commonjs2",
                path: path.join(ROOT_DIR_FROM_WEBPACK, "dist"),
                // куда ебашим статику
                // в проде ебашим в облако
                publicPath: __DEV__
                    ? "/static/"
                    : `https://storage.yandexcloud.net/path/to/S3/${process.env.APP_VERSION}/client/`,
            },
            // на хуй лишнюю инфу в проде
            stats: {
                all: undefined,
                builtAt: !__DEV__,
                chunks: !__DEV__,
                assets: !__DEV__,
                errors: true,
                warnings: true,
                outputPath: true,
                timings: true,
            },
            plugins: [
                // прокидываю env vars
                //https://webpack.js.org/plugins/define-plugin/#root
                new webpack.DefinePlugin(
                    merge(GLOBAL_ARGS, {
                        "process.env": {
                            // захуяриваю переменную языка
                            LANG: JSON.stringify(lang),
                            APP_SIDE: "server",
                        },
                    })
                ),
                // заебашиваю глобалы, которых нет на серве
                new webpack.ProvidePlugin({
                    window: path.resolve(path.join(__dirname, "../mock/window.mock")),
                    localStorage: path.resolve(path.join(__dirname, "../mock/localStorage.mock")),
                    document: "global/document",
                }),
            ],
        } as webpack.Configuration);
        return webpackConfig;
    };
