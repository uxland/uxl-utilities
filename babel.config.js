module.exports = api =>{
    api.cache(true);
    const presets= [
        "@babel/preset-env",
        "@babel/preset-typescript"
    ];
    const plugins = [
       /* "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread"*/
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
      },
      presets,
      plugins
  }
};