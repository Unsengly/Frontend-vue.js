<template>
  <div>
    <NavBarComponentVue />

    <div class="flex justify-center gap-2 m-10">
      <!-- left component -->
      <div>
        <div class="menu-product w-[289px]">
          <h3 class="font-bold text-start text-[24px] text-[#383838]">
            Double Cleanse
          </h3>
          <div class="flex flex-col mt-10">
            <router-link to="/category">
              <select class="option-shop">
                <option value="product">Double Cleanse</option>
                <option value="product">Face Scrubs</option>
              </select>
            </router-link>
            <select class="mt-5 option-shop">
              <option value="">Cleansing Balms</option>
              <option value="">Face Scrubs</option>
            </select>
            <select class="mt-5 option-shop">
              <option value="">Oil Cleansers</option>
              <option value="">Face Scrubs</option>
            </select>
          </div>
        </div>

        <div class="menu-product w-[289px] mt-10">
          <h3 class="font-bold text-start text-[24px] text-[#383838]">
            FILTERS
          </h3>
          <div class="flex flex-col mt-10">
            <select class="option-shop">
              <option value="">Double-Cleanse</option>
              <option value="">Cleansing Balms</option>
              <option value="">Oil Cleansers</option>
              <option value="">Water Cleansers</option>
            </select>
            <select class="mt-5 option-shop">
              <option value="">Cleansing Balms</option>
              <option value="">Face Scrubs</option>
            </select>
            <select class="mt-5 option-shop">
              <option value="">Oil Cleansers</option>
              <option value="">Face Scrubs</option>
            </select>
            <select class="mt-5 option-shop">
              <option value="">Water Cleansers</option>
              <option value="">Face Scrubs</option>
            </select>
            <select class="mt-5 option-shop">
              <option value="">Toners</option>
              <option value="">Face Scrubs</option>
            </select>
            <select class="mt-5 option-shop">
              <option value="">Eye Care</option>
              <option value="">Face Scrubs</option>
            </select>
            <select class="mt-5 option-shop">
              <option value="">Exfoliators</option>
              <option value="">Face Scrubs</option>
            </select>
          </div>
        </div>
      </div>
      <!-- list prouduct -->
      <div class="ml-10">
        <div class="flex justify-between">
          <div class="text-[#B0A6BD]">46 Products</div>
          <div class="px-2">
            Sort By
            <select>
              <option value="volvo">Best Selling</option>
              <option value="saab">Price: Low to High</option>
              <option value="opel">Price: High to Low</option>
              <option value="audi">A-Z</option>
            </select>
          </div>
        </div>
        <div
          class="grid w-full max-w-screen-lg grid-cols-3 gap-10 mx-auto my-10">
          <div v-for="i in slicedCart" :key="i.CartComponent">
            <CartComponent
              :promotion="i.promotion"
              :image="i.image"
              :title="i.title"
              :product="i.product"
              :rating="i.rating"
              :price="i.price" />
          </div>
        </div>
        <!-- pagenation -->
        <div>
          <div class="flex justify-center">
            <!-- Pagination -->
            <nav class="flex items-center gap-x-1">
              <button
                type="button"
                class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-[#383838] dark:hover:bg-white/10 dark:focus:bg-white/10">
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <span class="">Previous</span>
              </button>
              <div class="flex items-center gap-x-1">
                <button
                  type="button"
                  class="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-[#383838] dark:hover:bg-white/10 dark:focus:bg-white/10"
                  aria-current="page">
                  1
                </button>
                <button
                  type="button"
                  class="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-[#383838] dark:hover:bg-white/10 dark:focus:bg-white/10">
                  2
                </button>
                <button
                  type="button"
                  class="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-[#383838] dark:hover:bg-white/10 dark:focus:bg-white/10">
                  3
                </button>
              </div>
              <button
                type="button"
                class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-[#383838] dark:hover:bg-white/10 dark:focus:bg-white/10">
                <span>Next</span>
                <svg
                  class="flex-shrink-0 w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </nav>
            <!-- End Pagination -->
          </div>
        </div>
      </div>
    </div>

    <FooterComponentVue />
  </div>
</template>

<script>
import FooterComponentVue from "../components/FooterComponent.vue";
import NavBarComponentVue from "../components/NavBarComponent.vue";
import CartComponent from "../components/CartComponent.vue";
import {useProductStore} from "../stores/ProductStore";
import {mapState} from "pinia";
import {RouterLink} from "vue-router";

export default {
  name: "ProductPage",
  components: {
    FooterComponentVue,
    NavBarComponentVue,
    CartComponent,
    RouterLink,
  },

  computed: {
    ...mapState(useProductStore, ["CartComponent"]),
    slicedCart() {
      return this.CartComponent.slice(0, 9);
    },
  },
  setup() {
    const store = useProductStore();
    return {
      store,
    };
  },
};
</script>

<style scoped>
.menu-product {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.option-shop {
  background-color: #fff;
  cursor: pointer;
}
</style>
