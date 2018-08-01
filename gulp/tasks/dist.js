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
gulp.task("dist", () => run("npm run dist").exec());
