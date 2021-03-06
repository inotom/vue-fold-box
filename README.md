# vue-fold-box

A Vue.js component of folding container.


## Demo

[Demo](http://sandbox.serendip.ws/vue-fold-box.html)


## Install

### Browser

```html
<script src="vue.js"></script>
<script src="vue-fold-box.min.js"></script>
```


### npm

```
npm install --save @inotom/vue-fold-box
```


## Usage

### Browser

```html
<div id="app">
  <fold-box>
    <fold-handle>
      Handle
    </fold-handle>
    <fold-content>
      Content
    </fold-content>
  </fold-box>
</div>

<script src="vue.js"></script>
<script src="vue-fold-box.min.js"></script>
<script>
Vue.use(FoldBox);
new Vue({
  el: '#app'
});
</script>
```


### SFC

```vue
<template>
  <fold-box>
    <fold-handle>
      Handle
    </fold-handle>
    <fold-content>
      Content
    </fold-content>
  </fold-box>
</template>

<script>
import { FoldBox, FoldHandle, FoldContent } from '@inotom/vue-fold-box';

export default {
  components: {
    FoldBox,
    FoldHandle,
    FoldContent
  }
}
</script>
```


## Props

| Props             | Type      | Default | Description                      |
|-------------------|-----------|---------|----------------------------------|
| `is-initial-open` | `Boolean` | `false` | Initial folding state            |
| `block-name`      | `String`  | `""`    | Custom class name (Block of BEM) |
| `handle-tag`      | `String`  | `"div"` | Handle tag name                  |


## License

MIT


## Author

inotom
