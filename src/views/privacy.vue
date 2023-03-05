<template>
  <div class="flex flex-col px-1">
    <div class="flex justify-between items-center">
      <div class="flex">
        <div class="w-6 h-auto">
          <img
            :src="require('@/assets/images/lockup.png')"
            alt="Spending Logo"
          />
        </div>
        <span class="font-bold text-base px-4">App Lock</span>
      </div>
      <label class="switch">
        <input type="checkbox" checked />
        <span class="slider round"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "privacy-01",
};
</script>
<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
