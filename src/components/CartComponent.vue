<script>
export default {
  name: "CartComponent",
  props: ["id", "promotion", "image", "title", "product", "rating", "price"],
};
</script>
<template>
  <div class="card">
    <div
      :class="{
        'bg-[#A6CAF0]': promotion === '-10%',
        'bg-[#B2D8B7]': promotion === '-25%',
        'bg-[#B76E79]': promotion === '-50%',
        'bg-[#F5A3B7]': promotion === '-75%',
      }"
      class="relative flex items-center justify-center w-24 h-10 font-medium text-white promotion rounded-e-3xl top-16 text-md">
      {{ promotion }}
    </div>
    <div
      class="Item w-72 pb-5 bg-white rounded-md flex-col justify-center items-center gap-2.5 inline-flex">
      <img class="object-cover rounded-t-md Img w-72 h-72" :src="image" />
      <div class="flex flex-col items-start justify-start gap-5 Info">
        <router-link to="/detail">
          <div class="flex flex-col items-start justify-start w-64 gap-2.5">
            <div class="w-64 text-base font-medium capitalize text-neutral-700">
              <!-- All-Around Safe Block Essence Sun SPF45+ -->
              {{ title }}
            </div>
            <div class="Reviews justify-start items-center gap-1.5 inline-flex">
              <div class="Component w-3.5 h-3.5 relative">
                <img src="../assets/icons/star.svg" />
              </div>
              <div class="Component13 w-3.5 h-3.5 relative">
                <img src="../assets/icons/star.svg" />
              </div>
              <div class="Component14 w-3.5 h-3.5 relative">
                <img src="../assets/icons/star.svg" />
              </div>
              <div class="Component15 w-3.5 h-3.5 relative">
                <img src="../assets/icons/star.svg" />
              </div>
              <div class="Component16 w-3.5 h-3.5 relative">
                <img src="../assets/icons/star.svg" />
              </div>
              <div class="text-sm font-normal leading-tight text-gray-500 0">
                <!-- (0) -->
                {{ rating }}
              </div>
            </div>
            <div class="w-64 text-sm font-normal leading-snug text-gray-500">
              <!-- All Around Safe Block Sun Milk SPF50+/PA+++ -->
              {{ product }}
            </div>
            <div class="text-base font-normal capitalize text-neutral-700">
              <!-- $32.00 -->
              {{ price }}
            </div>
          </div>
        </router-link>
        <div
          class="addToBag w-64 p-2.5 bg-white rounded border border-neutral-800 justify-center items-center inline-flex cursor-pointer hover:bg-neutral-800 hover:text-white">
          <div class="text-sm font-medium capitalize text">Add to bag</div>
        </div>
      </div>
    </div>
  </div>
</template>
