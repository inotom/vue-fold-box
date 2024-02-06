<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';

interface Props {
  isInitialOpen?: boolean;
  blockName?: string;
  animationDuration?: number;
  animationEasing?: string;
}

const props = withDefaults(defineProps<Props>(), {
  isInitialOpen: false,
  blockName: 'fold-box',
  animationDuration: 300,
  animationEasing: 'ease-in-out',
});

const elContent = ref(null);
const isActive = ref(props.isInitialOpen);
const isOpen = ref(props.isInitialOpen);
const isAnimating = ref(false);

const rootClasses = computed(() => {
  return [
    props.blockName,
    {
      'mod--is-open': isActive.value,
    }
  ];
});

const handleClasses = computed(() => {
  return [
    `${props.blockName}__handle`,
    {
      'mod--is-open': isActive.value,
    }
  ];
});

const contentClasses = computed(() => {
  return [
    `${props.blockName}__content`,
    {
      'mod--is-open': isActive.value,
    }
  ];
});

const contentStyles = computed(() => {
  return {
    'overflow': 'hidden',
  };
});

const animationTiming = computed(() => {
  return {
    duration: props.animationDuration,
    easing: props.animationEasing,
  };
});

const closingAnimation = (el: HTMLDivElement) => [
  {
    height: `${el.offsetHeight}px`,
  },
  {
    height: 0,
  },
];

const openingAnimation = (el: HTMLDivElement) => [
  {
    height: 0,
  },
  {
    height: `${el.offsetHeight}px`,
  },
];

const toggle = async () => {
  // Disable toggle action on animating.
  if (isAnimating.value) {
    return;
  }
  isAnimating.value = true;

  isActive.value = !isActive.value;

  const el = elContent.value as HTMLDivElement | null;

  if (el) {
    if (isActive.value) {
      isOpen.value = true;
      await nextTick(); // Waiting open attribute is appended.
      const anim = el.animate(openingAnimation(el), animationTiming.value);
      anim.addEventListener('finish', () => {
        isAnimating.value = false;
      });
    } else {
      const anim = el.animate(closingAnimation(el), animationTiming.value);
      anim.addEventListener('finish', () => {
        isOpen.value = false;
        isAnimating.value = false;
      });
    }
  }
};
</script>

<template>
  <details
    :class="rootClasses"
    :open="isOpen || undefined"
  >
    <summary
      :class="handleClasses"
      @click.prevent="toggle"
    >
      <slot name="handle">
        <span class="fold-box-error">
          HANDLE IS EMPTY!
        </span>
      </slot>
    </summary>
    <div
      ref="elContent"
      :class="contentClasses"
      :style="contentStyles"
    >
      <slot name="content">
        <span class="fold-box-error">
          CONTENT IS EMPTY!
        </span>
      </slot>
    </div>
  </details>
</template>

<style lang="scss" scoped>
.fold-box-error {
  color: #f00;
  background-color: #fff;
  font-weight: bold;
}
</style>
