<template>
  <KaElement
    v-bind="props"
    :value="(slots?.default?.()[0]?.children as string)?.trim()"
  >
    <template #label>
      <slot name="label" />
    </template>
    <template #default="{ value, options }">
      <KapixButton v-bind="{ value, options }" />
    </template>
  </KaElement>
</template>

<script setup lang="ts">
import { KapixButton, kaProps } from 'kapix-components-vue3'

const props = defineProps(kaProps)
const slots = useSlots()
</script>
