<template>
  <VueTyper
    class="kapix-type-writer"
    :class="!options.caretAnimation && 'no-caret'"
    :text="text"
    :repeat="options.repeat"
    :shuffle="options.shuffle"
    :initial-action="options.initialAction"
    :pre-type-delay="options.preTypeDelay"
    :type-delay="options.typeDelay"
    :pre-erase-delay="options.preEraseDelay"
    :erase-delay="options.eraseDelay"
    :erase-style="options.eraseStyle"
    :erase-on-complete="options.eraseOnComplete"
    :caret-animation="options.caretAnimation || 'blink'" />
</template>

<script lang="ts" setup>
import { isArray } from 'lodash'
import { VueTyper } from '~/plugins/vueTyper'
import { kapixProps } from '~/helpers'

const props = defineProps(kapixProps([String, Object]))
function arrayToString (value: string | string[]): string {
  return isArray(value) ? value.filter(v => v).map(arrayToString).join('') : value
}
const text = computed(() => isArray(props.value) ? (props.value as Array<any>).map(arrayToString).filter(v => v) : props.value)
</script>

<style lang="scss">
  .kapix-type-writer {
    span.right {
      float: none !important;
    }
    span.left {
      float: none !important;
    }
    &.vue-typer {
      &.no-caret {
        .custom {
          &.vue-typer-caret-blink {
              background-color: transparent;
          }
        }
      }

      .custom.char {
        color: inherit;
      }
    }
  }
</style>
