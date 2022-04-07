<template>
  <KapixLottiePlayer
    :src="value"
    :deactivated="deactivated"
    :loop="options.loop"
    :autoplay="options.autoplay"
    :speed="options.speed"
    :direction="options.direction"
    :preserveAspectRatio="options.preserveAspectRatio"
    :interactivityOptions="options.interactivityOptions"
    :frames="options.frames" />
</template>

<script setup>

import KapixLottiePlayer from '../KapixLottiePlayer.vue'
import { kapixProps } from '~/helpers'

defineProps(kapixProps(String))
</script>
