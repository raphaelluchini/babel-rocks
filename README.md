# babel-plugin-babel-rocks

Extended plugin sample for Babel.

## Installation

```sh
$ npm install babel-plugin-babel-rocks
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["babel-rocks"]
}
```

### Via CLI

```sh
$ babel --plugins babel-rocks script.js
```

### Via Node API

```javascript
require('babel').transform('code', {
  plugins: ['babel-rocks']
});
```
