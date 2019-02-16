# webpack-loader-append-prepend
Loader for Webpack 4 to append and prepend text to files

## Install
```sh
$ npm install --save-dev webpack-loader-append-prepend
```

```sh
$ yarn add -D webpack-loader-append-prepend
```

## Usage
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/, // Use any filename you need
        use: [
          {
            loader: "webpack-loader-append-prepend",
            options: {
              prepend: "This goes at the beginning of the file",
              append: "This goes at the end of the file",
            }
          },
        ]
      }
    ]
  }
};
```

### Warning
* This loader add a new line after the `prepend` text, and new line before the `append` text.
* Input text is not sanitized so be careful not the break the output. E.g. if you prepend text to a `.js` file, add your own semicolons to prevent [automatic semicolon insertion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion).

## License
MIT
