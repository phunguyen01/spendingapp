<template>
  <div class="text-center font-bold text-red" v-if="user">
    {{ user.displayName }}
  </div>
  <div
    class="container pt-4 items-center w-full h-72 bg-blue-500 flex flex-col"
  >
    <h1 class="text-center font-extrabold text-3xl text-white h-auto">
      Spending App
    </h1>
    <button class="w-44 h-11 bg-white rounded-3xl px-8 py-2 my-4">
      <h1 class="font-semibold text-xl text-blue-500 h-auto w-full">
        2.5tr + User
      </h1>
    </button>
    <h1 class="font-semibold text-white text-xl text-center px-4 mx-auto">
      Your personal financial management solution
    </h1>
    <div class="flex gap-10 items-center justify-between mx-auto">
      <button
        class="flex items-center w-36 h-12 bg-white rounded-3xl px-3 my-4"
      >
        <div class="flex w-6 h-6">
          <img
            :src="require('@/assets/images/apple.png')"
            alt="Spending Logo"
            class="w-full h-auto"
          />
        </div>
        <div class="flex flex-col">
          <span class="font-semibold text-xs w-24">Download</span>
          <span class="font-bold text-base">App store</span>
        </div>
      </button>
      <button
        class="flex items-center w-36 h-12 bg-white rounded-3xl px-3 my-4"
      >
        <div class="flex w-6 h-6">
          <img
            :src="require('@/assets/images/chplay.png')"
            alt="Spending Logo"
            class="w-full h-auto"
          />
        </div>
        <div class="flex flex-col">
          <span class="font-semibold text-xs w-24">Get it on</span>
          <span class="font-bold text-base">Google Play</span>
        </div>
      </button>
    </div>
  </div>
  <!-- text + icons  -->
  <div class="row">
    <div class="container flex flex-col p-4 text-center">
      <span class="font-extrabold text-xl text-blue-500"
        >MANAGEMENT SOLUTIONS
      </span>
      <span class="font-extrabold text-xl text-blue-500"
        >PERSONAL FINANCE
      </span>
    </div>
    <!-- Dòng gồm 2 icon -->
    <div class="flex px-28 pb-4 justify-between">
      <div
        class="w-16 h-16 p-2 bg-indigo-400 rounded-lg flex flex-col items-center"
      >
        <div class="w-full h-full">
          <img
            :src="require('@/assets/images/money.png')"
            alt="Spending Logo"
          />
        </div>
        <div class="mt-2 text-center">
          <span class="font-bold text-base">Money</span>
        </div>
      </div>
      <!--  -->
      <div class="w-16 h-16 p-2 bg-yellow-400 rounded-lg">
        <div class="w-full h-full">
          <img
            :src="require('@/assets/images/wallet.png')"
            alt="Spending Logo"
          />
        </div>
        <div class="mt-2 text-center">
          <span class="font-bold text-base">Wallet</span>
        </div>
      </div>
    </div>
    <!-- Dòng gồm 3 iocn -->
    <div class="flex px-12 py-4 justify-between">
      <div class="w-16 h-16 p-2 bg-green rounded-lg flex flex-col items-center">
        <div class="w-full h-full">
          <img
            :src="require('@/assets/images/piggy.png')"
            alt="Spending Logo"
          />
        </div>
        <div class="mt-2">
          <span class="font-bold text-base mx-auto">Save</span>
        </div>
      </div>
      <!--  -->
      <div
        class="w-16 h-16 p-2 bg-blue-300 rounded-lg items-center flex flex-col"
      >
        <div class="w-full h-full">
          <img
            :src="require('@/assets/images/travel.png')"
            alt="Spending Logo"
          />
        </div>
        <div class="mt-2">
          <span class="font-bold text-base mx-auto">Tourism</span>
        </div>
      </div>
      <!--  -->
      <div
        class="w-16 h-16 p-2 bg-blue-400 rounded-lg items-center flex flex-col"
      >
        <div class="w-full h-full">
          <img :src="require('@/assets/images/loan.png')" alt="Spending Logo" />
        </div>
        <div class="mt-2">
          <span class="font-bold text-base mx-auto">Loan</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useUser } from "@/composables/useUser";
export default {
  name: "index-01",
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();

    return { user };
  },
};
</script>
