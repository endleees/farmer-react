module.exports = {
    module: {
      rules: [
        {
            test: /(.png|((?<!.cmp).svg)|.jpg|.gif|.woff|.woff2|.eot|.ttf|.otf)$/,
            use: ['file-loader'],
        },
      ],
    },
  }