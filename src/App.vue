<script setup lang="ts">
import FoldBox from './components/FoldBox.vue';
</script>

<template>
  <div>
    <fold-box>
      <template #handle>
        Lorem ipsum
      </template>
      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </template>
    </fold-box>

    <hr>

    <fold-box block-name="my-box">
      <template #handle>
        Lorem ipsum
      </template>
      <template #content>
        <div class="my-box__inner">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </template>
    </fold-box>

    <hr>

    <fold-box
      :is-initial-open="true"
      block-name="my-box"
      :animation-duration="1000"
      animation-easing="linear"
    >
      <template #handle>
        Lorem ipsum
      </template>
      <template #content>
        <div class="my-box__inner">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </template>
    </fold-box>

    <hr>

    <fold-box>
      empty
    </fold-box>

  </div>
</template>

<style>
fold-box {
  display: none;
}
.my-box {
  border: 2px solid #131;
}
.my-box__handle {
  display: block;
  padding: .5em 1em;
  color: #fff;
  background-color: #464;
  cursor: pointer;
  transition: background-color .3s ease-in-out;
}
.my-box__handle:hover {
  background-color: #575;
}
.my-box__handle::-webkit-details-marker {
  display: none;
}
.my-box__inner {
  padding: .5em 1em;
  line-height: 1.8;
}
</style>
