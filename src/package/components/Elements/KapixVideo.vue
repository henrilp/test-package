<template>
  <KapixVideoPlayer
    :src="value"
    :alt="options.alt"
    :deactivated="deactivated"
    :poster="options.poster"
    :autoplay="options.autoplay"
    :controls="options.controls"
    :loop="options.loop"
    :volume="options.volume"
    :fit="options.fit" />
</template>

<script setup lang="ts">
import KapixVideoPlayer from '../KapixVideoPlayer.vue'
import { kapixProps } from '~/helpers'

defineProps(kapixProps(String))
</script>
