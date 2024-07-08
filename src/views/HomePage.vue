<script>
import NavbarComponent from "../components/NavBarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import CartComponent from "../components/CartComponent.vue";
import {useProductStore} from "../stores/ProductStore";
import {mapState} from "pinia";
import {RouterLink} from "vue-router";

export default {
  components: {NavbarComponent, FooterComponent, CartComponent, RouterLink},
  computed: {
    ...mapState(useProductStore, ["CartComponent"]),
    slicedCart() {
      return this.CartComponent.slice(0, 4);
    },
    slicedCart2() {
      return this.CartComponent.slice(6, 10);
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
<template>
  <!--================>>Navbar -->
  <NavbarComponent />
  <!--================>>Cover -->
  <div
    class="object-cover w-full cover h-[608px] flex items-center justify-center flex-row bg-[#F1E1E5]">
    <div class="content">
      <div class="text-[48px] font-bold tittle text-[#383838]">
        ស្វែងយល់ពីភាពស្រស់ស្អាតខាង<br />ក្នុងរបស់អ្នកជាមួយនឹង <br /><span
          class="text-[#F5A3B7] font-bold"
          >KRAOOP</span
        >
      </div>
      <div class="text-[24px]">Great gift for yourself and loved ones</div>
      <div class="button">
        <router-link
          class="inline-flex items-center mt-10 px-24 py-3 text-center text-sm font-semibold text-white bg-[#F5A3B7] border border-transparent rounded-lg gap-x-2 hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:bg-[#F5A3B7] dark:text-white"
          to="/product">
          Shop now
        </router-link>
      </div>
    </div>
    <div class="img">
      <img src="../assets/images/jennie.png" alt="jennie" />
    </div>
  </div>
  <!--================>>New Arrivals-->
  <div>
    <p class="text-[24px] font-bold text-[#383838] mt-24 justify-center flex">
      NEW ARRIVALS
    </p>
    <p class="text-[14px] text-[#697586] justify-center flex cursor-pointer">
      see all
    </p>
  </div>
  <!--================>>Cart -->
  <div class="flex cart w-[1256px] flex-row mx-auto my-auto">
    <div class="flex gap-10">
      <CartComponent
        v-for="i in slicedCart"
        :key="i.CartComponent"
        :promotion="i.promotion"
        :image="i.image"
        :title="i.title"
        :product="i.product"
        :rating="i.rating"
        :price="i.price" />
    </div>
  </div>
  <!--================>>Best Sellers-->
  <div>
    <p class="text-[24px] font-bold text-[#383838] mt-24 justify-center flex">
      BEST SELLERS
    </p>
    <p class="text-[14px] text-[#697586] justify-center flex cursor-pointer">
      see all
    </p>
  </div>
  <div class="flex cart w-[1256px] flex-row mx-auto my-auto mb-20">
    <div class="flex gap-10">
      <CartComponent
        v-for="i in slicedCart2"
        :key="i.CartComponent"
        :promotion="i.promotion"
        :image="i.image"
        :title="i.title"
        :product="i.product"
        :rating="i.rating"
        :price="i.price" />
    </div>
  </div>
  <!--================>>Show Product-->
  <div
    class="flex justify-center show w-[1256px] h-[500px] mx-auto mt-32 mb-28">
    <div class="flex flex-row items-center justify-between h-auto show-contain">
      <div class="flex flex-col mx-4 content">
        <div class="mb-10 text-4xl font-medium title">
          Floral Essence Masks Sets
        </div>
        <div class="des w-[598px] text-[#697586]">
          Indulge in the beauty of nature with our Floral Essence Masks set.
          Each mask features a unique blend of flower extracts to hydrate and
          nourish your skin. Experience the essence of flowers in your skincare
          routine.
        </div>
        <div class="mt-8 hashtag">
          <div class="tag">
            <div class="flex flex-row items-center gap-3 tag">
              <div
                class="text-[#383838] bg-[#B0A6BD] px-4 text-sm py-1 bg-opacity-30 rounded-full">
                # Vegan
              </div>
              <div
                class="text-[#383838] bg-[#B0A6BD] px-4 text-sm py-1 bg-opacity-30 rounded-full">
                # Cruelty-free
              </div>
              <div
                class="text-[#383838] bg-[#B0A6BD] px-4 text-sm py-1 bg-opacity-30 rounded-full">
                # Eco-friendly
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-5 mt-10 btn">
          <div class="shopNow">
            <router-link
              class="inline-flex items-center px-24 py-3 text-center text-sm font-semibold text-white bg-[#F5A3B7] border border-transparent rounded-lg gap-x-2 hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:bg-[#F5A3B7] dark:text-white"
              to="/product">
              Shop now
            </router-link>
          </div>
          <div class="ExplorMore">
            <button
              type="button"
              class="inline-flex items-center text-sm font-medium text-[#383838]">
              Explor more
              <svg
                class="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="image w-[580px] h-[500px] object-cover items-center flex">
        <img
          class="rounded-2xl"
          src="../assets/images/innisfree.jpg"
          alt="innisfree" />
      </div>
    </div>
  </div>
  <!-- ================>>Show Product -->
  <div
    class="flex justify-center show w-[1256px] h-[500px] mx-auto mt-32 mb-28">
    <div class="flex flex-row items-center justify-center show-contain">
      <div
        class="image w-[580px] h-[500px] object-cover items-center flex mr-10">
        <img
          class="rounded-2xl"
          src="../assets/images/sunscreen.jpg"
          alt="innisfree" />
      </div>
      <div class="flex flex-col content">
        <div class="mb-10 text-4xl font-medium title">Blossom Glow Kit</div>
        <div class="des w-[598px] text-[#697586]">
          Reveal your skin's natural glow with our Lotus Glow Kit. Nourishing
          body and face creams with lotus extract provide deep hydration and
          rejuvenation. Suitable for all skin types. Vegan, cruelty-free,
          eco-friendly.
        </div>
        <div class="mt-8 hashtag">
          <div class="tag">
            <div class="flex flex-row items-center gap-3 tag">
              <div
                class="text-[#383838] bg-[#B0A6BD] px-4 text-sm py-1 bg-opacity-30 rounded-full">
                # Vegan
              </div>
              <div
                class="text-[#383838] bg-[#B0A6BD] px-4 text-sm py-1 bg-opacity-30 rounded-full">
                # Cruelty-free
              </div>
              <div
                class="text-[#383838] bg-[#B0A6BD] px-4 text-sm py-1 bg-opacity-30 rounded-full">
                # Eco-friendly
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-5 mt-10 btn">
          <div class="shopNow">
            <div class="button">
              <router-link
                class="inline-flex items-center px-24 py-3 text-center text-sm font-semibold text-white bg-[#F5A3B7] border border-transparent rounded-lg gap-x-2 hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:bg-[#F5A3B7] dark:text-white"
                to="/product">
                Shop now
              </router-link>
            </div>
          </div>
          <div class="ExplorMore">
            <button
              type="button"
              class="inline-flex items-center text-sm font-medium text-[#383838]">
              Explor more
              <svg
                class="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--================>>Footer -->
  <FooterComponent />
</template>
