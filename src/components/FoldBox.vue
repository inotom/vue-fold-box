<script>
export default {
  props: {
    isInitialOpen: {
      type: Boolean,
      default: false
    },
    blockName: {
      type: String,
      default: ''
    },
    handleTag: {
      type: String,
      default: 'div'
    }
  },

  data() {
    return {
      isOpen: true,
      height: 'auto'
    };
  },

  computed: {
    handleSlot() {
      return this.$slots.default.filter(
        item =>
          typeof item.componentOptions !== 'undefined' &&
          item.componentOptions.tag === 'fold-handle'
      );
    },
    contentSlot() {
      return this.$slots.default.filter(
        item =>
          typeof item.componentOptions !== 'undefined' &&
          item.componentOptions.tag === 'fold-content'
      );
    },
    contentStyle() {
      return {
        overflow: 'hidden',
        height: this.isOpen ? this.height + 'px' : 0
      };
    },
    handleDomProps() {
      const props = {};
      switch (this.handleTag) {
        case 'a':
          props['href'] = '#';
          break;
      }
      return props;
    },
    blockClassName() {
      return this.blockName === '' ? 'fold-box' : this.blockName;
    }
  },

  mounted() {
    this.height = this.$refs.content.clientHeight;
    this.isOpen = this.isInitialOpen;
  },

  methods: {
    toggle(e) {
      if (this.handleTag === 'a') {
        e.preventDefault();
      }
      this.isOpen = !this.isOpen;
    }
  },

  render(createElement) {
    return createElement(
      'div',
      {
        class: this.blockClassName,
      },
      [
        createElement(
          this.handleTag,
          {
            class: this.blockClassName + '__handle',
            on: {
              click: this.toggle
            },
            domProps: this.handleDomProps
          },
          this.handleSlot,
        ),
        createElement(
          'div',
          {
            class: this.blockClassName + '__content',
            style: this.contentStyle,
            ref: 'content'
          },
          this.contentSlot
        )
      ]
    );
  }
};
</script>
