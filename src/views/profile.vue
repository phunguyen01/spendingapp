<template>
  <!-- info thông tin frofile -->
  <div class="row" v-if="user">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            class="w-full h-auto"
            src="https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian
            -boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=2000"
            size="xs"
            alt="user profile avatar"
          />
        </div>
        <div class="font-bold text-2xl text-primary mt-3">
          {{ user.displayName }}
        </div>
        <p class="font-semibold text-gray-400 mt-1">{{ user.email }}</p>
      </div>
    </div>
  </div>

  <!-- menu frofile -->
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-2">General</h3>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <ul class="">
            <li
              v-for="(profileOption, index) in profileOptions"
              :key="profileOption.name"
            >
              <router-link
                :to="profileOption.route"
                class="flex justify-between items-center py-3"
              >
                <div
                  class="flex items-center text-left"
                  :class="{ 'text-red': index === profileOptions.length - 1 }"
                >
                  <i class="t2ico text-2xl" :class="profileOption.icon"></i>
                  <h5 class="font-semibold ml-3">{{ profileOption.name }}</h5>
                </div>
                <div class="text">
                  <i class="right t2ico t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";

import { PROFILE_OPTIONS } from "@/constants";

import { useUser } from "@/composables/useUser";
export default {
  name: "profile-01",
  setup() {
    const profileOptions = reactive(PROFILE_OPTIONS);

    const { getUser } = useUser();
    const { user } = getUser();

    return { profileOptions, user };
  },
};
</script>
