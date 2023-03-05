<template>
  <div class="row">
    <div class="flex justify-center bg-blue-400 items-center w-full h-14">
      <h1 class="font-bold text-2xl text-white text-center">Other Tools</h1>
    </div>
    <div class="container flex flex-col px-2 gap-4">
      <!--  -->
      <div class="flex py-2 border-b border-gray-100 pb-1 mt-4">
        <div class="w-6 h-auto">
          <img
            :src="require('@/assets/images/clothes.png')"
            alt="Spending Logo"
          />
        </div>
        <span class="font-bold text-base px-4">Clothes</span>
      </div>
      <!--  -->
      <div class="flex py-2 border-b border-gray-100 pb-1">
        <div class="w-6 h-auto">
          <img :src="require('@/assets/images/fuel.png')" alt="Spending Logo" />
        </div>
        <span class="font-bold text-base px-4">Fuel</span>
      </div>
      <!--  -->
      <div class="flex py-2 border-b border-gray-100 pb-1">
        <div class="w-6 h-auto">
          <img
            :src="require('@/assets/images/gifts.png')"
            alt="Spending Logo"
          />
        </div>
        <span class="font-bold text-base px-4">Gifts</span>
      </div>
      <!--  -->
      <div class="flex py-2 border-b border-gray-100 pb-1">
        <div class="w-6 h-auto">
          <img
            :src="require('@/assets/images/holiday.png')"
            alt="Spending Logo"
          />
        </div>
        <span class="font-bold text-base px-4">Holidays</span>
      </div>
      <!--  -->
      <div class="flex py-2 border-b border-gray-100 pb-1">
        <div class="w-6 h-auto">
          <img :src="require('@/assets/images/kids.png')" alt="Spending Logo" />
        </div>
        <span class="font-bold text-base px-4">Kids</span>
      </div>
      <!--  -->
      <div class="flex py-2 border-b border-gray-100 pb-1">
        <div class="w-6 h-auto">
          <img
            :src="require('@/assets/images/shopping.png')"
            alt="Spending Logo"
          />
        </div>
        <span class="font-bold text-base px-4">Shoppings</span>
      </div>
      <!--  -->
      <div class="flex py-2 border-b border-gray-100 pb-1">
        <div class="w-6 h-auto">
          <img
            :src="require('@/assets/images/running.png')"
            alt="Spending Logo"
          />
        </div>
        <span class="font-bold text-base px-4">Sports</span>
      </div>
      <!--  -->
      <div class="flex py-2 border-b border-gray-100 pb-1">
        <div class="w-6 h-auto">
          <img
            :src="require('@/assets/images/travel01.png')"
            alt="Spending Logo"
          />
        </div>
        <span class="font-bold text-base px-4">Travel</span>
      </div>
      <div class="flex py-2 border-b border-gray-100 pb-1">
        <div class="w-6 h-auto">
          <img
            :src="require('@/assets/images/knife-and-fork.png')"
            alt="Spending Logo"
          />
        </div>
        <span class="font-bold text-base px-4">Eeating Out</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tool-01",
};
</script>
<style></style>
