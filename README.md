# 04-PureComponent

Using Sass + vanilla js + Webpack

## Requirements

```
npm i -g npx
```

## Usage

```
import { createElement } from './js/utils'
const objAttr = {
  id: 'container',
  class: 'container'
}

const el = createElement('div', objAttr)
console.log(el) // '<div id='container' class='container'></div>'
```

## Run

```
npm i
npx webpack-dev-server
```