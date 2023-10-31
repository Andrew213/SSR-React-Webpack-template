import common from "./common.config";
import flow from "lodash.flow";
import { join } from "path";
import { config } from "dotenv";
import webpack from "webpack";
import nodeExternals from "webpack-node-externals";

import { ROOT_DIR_FROM_WEBPACK } from "../assets/dir";

config();

const cfg = require("../../lib/cfg");

function getConfig(lang: string): webpack.Configuration {
    return flow([initServerConfig()]);
}

// export default {
//     ...common,
//     entry: join(__dirname, "../../client/ssr.tsx"),
//     target: "node",
//     output: {
//         path: join(__dirname, "../../bundle"),
//         filename: "ssr.client.js",
//         publicPath: "/",
//         libraryTarget: "commonjs2",
//     },
//     externals: [nodeExternals()],
// } as webpack.Configuration;
