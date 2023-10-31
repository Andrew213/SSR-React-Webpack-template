import mergeOptions from "merge-options";
import path from "path";
import { packageDirectorySync } from "pkg-dir";

const CONFIG_DIR = process.env.CFG_DIR || path.join(packageDirectorySync() || "", "configs");
const ENV = process.env.CONFIG_ENV || process.env.NODE_ENV;

let defaultConfig;
try {
    defaultConfig = require(path.join(CONFIG_DIR, "defaults"));
} catch (error: any) {
    if (error.code !== "MODULE_NOT_FOUND") {
        throw error;
    }

    console.warn("[cfg] Warning: could not load default config", error);
}

let environmentConfig;
try {
    if (ENV) {
        environmentConfig = require(path.join(CONFIG_DIR, ENV));
    }
} catch (error: any) {
    if (error.code !== "MODULE_NOT_FOUND") {
        throw error;
    }

    console.warn(`[cfg] Warning: could not load ${ENV} config`, error);
}

export default mergeOptions({ environment: ENV }, defaultConfig, environmentConfig);
