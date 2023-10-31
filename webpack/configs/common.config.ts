import { Configuration } from "webpack";

const isDev = process.env.NODE_ENV === "development";

export default {
    mode: isDev ? "development" : "production",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    devServer: {
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-typescript",
                            "@babel/preset-react",
                        ],
                    },
                },
            },
        ],
    },
} as Configuration;
