<template>
  <div
    v-observe-visibility="lazyOptions"
    class="outer-style"
    :class="outerClass">
    <div
      class="inner-style"
      :class="innerClass">
      <component
        :is="componentKey"
        v-if="!hasLabelSlot"
        v-animation="{ isVisible, animationIn, animationOut }"
        class="property-style"
        :class="propertyClass"
        :href="href"
        @click="options.click ? onClick($event) : null">
        <slot
          :options="currentOptions"
          :value="computedValue"
          :lazy-value="lazyValue"
          :deactivated="blockValue" />
      </component>
      <div
        v-else
        class="label-container"
        :class="labelPosition">
        <span
          class="label-style"
          :class="labelClass">
          <slot name="label" />
        </span>
        <component
          :is="componentKey"
          v-animation="{ isVisible, animationIn, animationOut }"
          class="property-style"
          :class="propertyClass"
          :href="href"
          @click="options.click ? onClick($event) : null">
          <slot
            :options="currentOptions"
            :value="computedValue"
            :lazy-value="lazyValue"
            :deactivated="blockValue" />
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import { kaCommonMixin } from '../mixins'
import '~/assets/scss/_kapix.scss'

export default {
  mixins: [kaCommonMixin],
  computed: {
    componentKey ({ options }) {
      return options.click ? 'a' : 'div'
    }
  },
  mounted () {
    const { code, $el } = this

    const children = $el.querySelector('.property-style').children
    for (let i = 0; i < children.length; i++) {
      const el = children[i]
      el.classList.add('template-style')
      el.classList.add(code)
    }
  }
}
</script>
