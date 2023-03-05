<template>
  <canvas id="myChart" width="400" height="400"></canvas>
  <div class="row">
    <div class="container mx-auto p-8">
      <h3 class="font-bold text-xl text-primary -mb-1 -mt-5">
        Details Transction
      </h3>
    </div>
    <div class="flex mx-auto px-4 gap-8 -mt-4 items-center justify-between">
      <button class="bg-white rounded-lg p-1">
        <h1 class="text-gray-500 font-semibold">All</h1>
      </button>
      <button class="bg-white rounded-lg p-1">
        <h1 class="text-gray-500 font-semibold">Food</h1>
      </button>
      <button class="bg-white rounded-lg p-1">
        <h1 class="text-gray-500 font-semibold">Shopping</h1>
      </button>
      <button class="bg-white rounded-lg p-1">
        <h1 class="text-gray-500 font-semibold">Transport</h1>
      </button>
    </div>
  </div>
  <!-- Shoes -->
  <div class="row">
    <div class="flex container mx-auto p-3 gap-4 bg-white my-4 justify-between">
      <div class="flex">
        <div class="w-12 h-auto bg-yellow-300 rounded-lg"></div>
        <div class="flex flex-col px-2">
          <span class="text-gray-600 font-bold text-lg">Shoes</span>
          <span class="text-gray-400 font-medium text-sm">Sneaker Nike</span>
        </div>
      </div>
      <div class="flex flex-col mr-2">
        <span class="font-bold text-sm text-red">-$20.00</span>
        <span class="text-gray-400 font-medium text-sm">Aug 26</span>
      </div>
    </div>
  </div>
  <!--  -->
  <div class="row">
    <div class="flex container mx-auto p-3 bg-white my-4 justify-between">
      <div class="flex">
        <div class="w-12 h-auto bg-indigo-400 rounded-lg"></div>
        <div class="flex flex-col px-2">
          <span class="text-gray-600 font-bold text-lg">Payment</span>
          <span class="text-gray-400 font-medium text-sm">Buy Huna</span>
        </div>
      </div>
      <div class="flex flex-col mr-2">
        <span class="font-bold text-sm text-red">-$120.00</span>
        <span class="text-gray-400 font-medium text-sm">Aug 26</span>
      </div>
    </div>
  </div>
  <!--  -->
</template>
<script>
import Chart from "chart.js/auto";
export default {
  name: "report-01",
  setup() {},
  mounted() {
    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["jun", "Jul", "Aug", "sep", "Oct", "Nov"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    myChart;
  },
};
</script>
