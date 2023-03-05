<template>
  <div class="row">
    <div class="p-8 flex flex-col justify-between bg-blue-400 h-96">
      <label class="flex flex-col mb-4" for="money">
        <span class="font-medium text-lg">Amount of money:</span>
        <input
          id="money"
          class="px-2 py-1 rounded-lg mt-1"
          type="number"
          placeholder="000.$"
        />
      </label>
      <div class="flex flex-col">
        <div
          class="flex items-center justify-between border-b border-gray-100 pb-1"
        >
          <span class="font-medium text-lg">Spent:</span>
          <span class="font-medium text-lg">000.$</span>
        </div>
        <div
          class="flex items-center justify-between border-b border-gray-100 pb-1"
        >
          <span class="font-medium text-lg">Surplus:</span>
          <span class="font-medium text-lg">000.$</span>
        </div>
      </div>
      <!--  -->
      <div class="flex items-center">
        <div class="w-6 h-auto">
          <img :src="require('@/assets/images/edit.png')" alt="Spending Logo" />
        </div>
        <div class="flex flex-col p-8">
          <span class="font-medium text-base">Start day:</span>
          <span class="font-medium text-base">1</span>
        </div>
      </div>
      <div class="text-center p-2">
        <button class="items-center bg-primary text-white px-3 py-1 rounded-lg">
          Save
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "budget-01",
};
</script>
