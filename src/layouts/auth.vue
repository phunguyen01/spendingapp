<template>
  <cloud />
  <slot />
</template>

<script>
import cloud from "@/views/cloud.vue";
export default {
  components: { cloud },
  name: "auth-01",
  component: {
    cloud,
  },
};
</script>

<style></style>
