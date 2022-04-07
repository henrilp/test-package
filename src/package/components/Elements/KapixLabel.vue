<template>
  <span v-html="value" />
</template>

<script setup lang="ts">
import { kapixProps } from '~/helpers'

defineProps(kapixProps(String))
</script>
