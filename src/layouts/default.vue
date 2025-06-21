<template>
  <div>
    <HeaderComponent />
    <slot />
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "~/components/ui/headers/HeaderComponent.vue";
</script>

<style scoped></style>
