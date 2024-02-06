# vue-fold-box

A Vue.js component of folding container.

From v2.0.0, it works for Vue 3.

## Demo

[Demo](https://sandbox.serendip.ws/vue-fold-box.html)


## Install

### Browser

```html
<script src="vue.global.prod.js"></script>
<script src="vue-fold-box.umd.js"></script>
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
    <template #handle>
      Handle
    </template>
    <template #content>
      Content
    </template>
  </fold-box>
</div>

<script src="vue.global.prod.js"></script>
<script src="vue-fold-box.umd.js"></script>
<script>
const { createApp } = Vue;
const { FoldBox } = SwsVueFoldBox;

createApp({
  components: {
    FoldBox,
  },
}).mount('#app');
</script>
```


### SFC (TypeScript)

```vue
<template>
  <fold-box>
    <template #handle>
      Handle
    </template>
    <template #content>
      Content
    </template>
  </fold-box>
</template>

<script setup lang="ts">
import { FoldBox } from '@inotom/vue-fold-box';
</script>
```


## Props

| Props                | Type      | Default         | Description                            |
|----------------------|-----------|-----------------|----------------------------------------|
| `is-initial-open`    | `Boolean` | `false`         | Initial folding state                  |
| `block-name`         | `String`  | `"fold-box"`    | Custom class name (Block of BEM)       |
| `animation-duration` | `Number`  | `300`           | Folding animation duration (ms)        |
| `animation-easing`   | `String`  | `"ease-in-out"` | Folding animation easing function name |


## License

MIT


## Author

inotom
