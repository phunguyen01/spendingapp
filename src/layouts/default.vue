<template>
  <NavigationHeader />
  <slot />
  <NavigationBottom v-if="meta.isShowFooter" />
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";

import NavigationHeader from "../components/NavigationHeader.vue";
import NavigationBottom from "@/components/NavigationBottom.vue";

export default {
  name: "default-01",
  components: { NavigationBottom, NavigationHeader },
  setup() {
    const route = useRoute();
    return {
      meta: computed(() => route.meta),
    };
  },
};
</script>
<style></style>
