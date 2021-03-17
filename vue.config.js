module.exports = {
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].title= 'QRcode Creater'
          return args
        })
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/qrcode_creater' : '/'
  }