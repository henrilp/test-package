<template>
  <i :class="value?.trim()" />
</template>

<script setup lang="ts">
import { kapixProps } from '~/helpers'

defineProps(kapixProps(String))
</script>
