const gulp = require("gulp");
const run = require("gulp-run");
const moduleName = "uxl-utilities";
const path = require("path");
const nodeModules = "node_modules";

gulp.task("generate-d-ts", () => {
    require("dts-generator").default({
        name: moduleName,
        out: "./index.d.ts",
        project: "./gulp/tsconfig-dist.json",
        baseDir: "./src",
        resolveModuleId: params => {
            console.log(params.currentModuleId);
            return params.currentModuleId === "index" ? moduleName : `${moduleName}/${params.currentModuleId}`;
        }
    });
});
gulp.task("dist", () => {
    const dir = path.basename(path.join(__dirname, "../../../"));
    if (String(dir) == nodeModules) {
        return run("npm run dist").exec();
    }
    console.log("skipped");
});
