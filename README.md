# eslint-plugin-suitcss-classnames

eslint-plugin that provide rules for [suitcss-classnames](https://github.com/dwango-js/suitcss-classnames "suitcss-classnames").

- Check `object` shape of `suitClassNames(object)`.
    - `states`'s key should start with `is-*`

## Install

Install with [npm](https://www.npmjs.com/):

    npm install eslint-plugin-suitcss-classnames

## Usage

```js
{
  "plugins": [
    "suitcss-classnames"
  ],
  "rules": {
    "suitcss-classnames/states": 2
  }
}
```

## Changelog

See [Releases page](https://github.com/azu/eslint-plugin-suitcss-classnames/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/eslint-plugin-suitcss-classnames/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
