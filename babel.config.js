module.exports = api =>{
    api.cache(true);
    const presets= [
        "@babel/preset-typescript",
        "@babel/preset-env"
    ];
    const plugins = [
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread"
    ];
  return{
      env:{
          cjs:{
              presets,
              plugins:[...plugins, ["@babel/plugin-transform-modules-commonjs", {allowTopLevelThis: true}]]
          },
          es:{
              presets,
              plugins
          }
      }
  }
};