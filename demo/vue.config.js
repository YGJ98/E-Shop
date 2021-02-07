module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:3000",
        ws: true,
        changeOrigin: true
      },
      "/api": {
        target: "http://localhost:3000",
        ws: true,
        changeOrigin: true
      }
    }
  }

  // postcss-px2 =》 px转rem
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require("postcss-px2rem")({
  //           remUnit: 50 // 换算的基数
  //         })
  //       ]
  //     }
  //   }
  // }
};
