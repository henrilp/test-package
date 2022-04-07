<template>
  <span
    class="kapix-button"
    v-html="value" />
</template>

<script setup lang="ts">
import { kapixProps } from '~/helpers'

defineProps(kapixProps(String))
</script>

<style lang="scss">
  .kapix-button {
    white-space: nowrap;
    text-align: center;
    &::before {
      background-color: currentColor;
      border-radius: inherit;
      bottom: 0;
      color: inherit;
      content: "";
      left: 0;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      right: 0;
      top: 0;
      transition: opacity .2s cubic-bezier(.4,0,.6,1);
    }
    &:hover {
      &::before {
        opacity: .08;
      }
    }
  }
</style>
