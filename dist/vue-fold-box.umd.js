/*! @inotom/vue-fold-box v1.0.0 inotom (http://www.serendip.ws/) | MIT */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("FoldBox",[],n):"object"==typeof exports?exports.FoldBox=n():t.FoldBox=n()}(window,function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(o,i,function(n){return t[n]}.bind(null,i));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=4)}([function(t,n,e){"use strict";function o(t,n,e,o,i,r,l,s){var u,c="function"==typeof t?t.options:t;if(n&&(c.render=n,c.staticRenderFns=e,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),l?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},c._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var a=c.render;c.render=function(t,n){return u.call(n),a(t,n)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:c}}e.d(n,"a",function(){return o})},function(t,n,e){"use strict";var o={},i=e(0),r=Object(i.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"fold-handle"},[this._t("default")],2)},[],!1,null,null,null);n.a=r.exports},function(t,n,e){"use strict";var o={},i=e(0),r=Object(i.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"fold-content"},[this._t("default")],2)},[],!1,null,null,null);n.a=r.exports},function(t,n,e){"use strict";var o={props:{isInitialOpen:{type:Boolean,default:!1},blockName:{type:String,default:""}},data:function(){return{isOpen:!0,height:"auto"}},computed:{handleSlot:function(){return this.$slots.default.filter(function(t){return void 0!==t.componentOptions&&"fold-handle"===t.componentOptions.tag})},contentSlot:function(){return this.$slots.default.filter(function(t){return void 0!==t.componentOptions&&"fold-content"===t.componentOptions.tag})},contentStyle:function(){return{overflow:"hidden",height:this.isOpen?this.height+"px":0}},blockClassName:function(){return""===this.blockName?"fold-box":this.blockName}},mounted:function(){this.height=this.$refs.content.clientHeight,this.isOpen=this.isInitialOpen},methods:{toggle:function(){this.isOpen=!this.isOpen}},render:function(t){return t("div",{class:this.blockClassName},[t("div",{class:this.blockClassName+"__handle",on:{click:this.toggle}},this.handleSlot),t("div",{class:this.blockClassName+"__content",style:this.contentStyle,ref:"content"},this.contentSlot)])}},i=e(0),r=Object(i.a)(o,void 0,void 0,!1,null,null,null);n.a=r.exports},function(t,n,e){"use strict";e.r(n),function(t){e.d(n,"install",function(){return l});var o=e(3);e.d(n,"FoldBox",function(){return o.a});var i=e(1);e.d(n,"FoldHandle",function(){return i.a});var r=e(2);function l(t){l.installed||(l.installed=!0,t.component("fold-box",o.a),t.component("fold-handle",i.a),t.component("fold-content",r.a))}e.d(n,"FoldContent",function(){return r.a});var s={install:l},u=null;"undefined"!=typeof window?u=window.Vue:void 0!==t&&(u=t.Vue),u&&u.use(s)}.call(this,e(5))},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e}])});
//# sourceMappingURL=vue-fold-box.umd.js.map