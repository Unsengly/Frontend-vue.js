<template>
  <div>
    <NavBarComponentVue />
    <div class="flex justify-center gap-2 m-10">
      <div class="flex flex-row justify-between div">
        <div class="info w-[804px] mr-14">
          <div
            class="inline-flex flex-col items-start justify-start w-full h-full gap-10 pt-5 pb-10 bg-white rounded-md shadow px-7">
            <div class="flex flex-col items-start justify-start w-full gap-7">
              <div
                class="flex-col justify-between items-start gap-2.5 flex w-full">
                <div
                  class="Input w-full p-2.5 bg-white rounded justify-start items-center gap-2.5 inline-flex">
                  <div class="w-20 text-base font-normal text-gray-400 Contact">
                    Contact
                  </div>
                  <div class="w-full">
                    <span style="text-neutral-700 text-base font-normal "
                      >daraa.veasna</span
                    ><span style="text-neutral-700 text-base font-normal "
                      >@gmail.com</span
                    >
                  </div>
                  <div class="TxtBtn justify-start items-start gap-2.5 flex">
                    <div class="text-base font-normal text-gray-500 Change">
                      Change
                    </div>
                  </div>
                </div>
                <div
                  class="Input w-full p-2.5 bg-white rounded justify-start items-center gap-2.5 inline-flex">
                  <div class="w-20 text-base font-normal text-gray-400 Contact">
                    Ship to
                  </div>
                  <div class="w-full">
                    <span style="text-neutral-700 text-base font-normal "
                      >Khan Toul Kouk, Phnom Penh</span
                    ><span style="text-neutral-700 text-base font-normal "
                      >, Cambodia
                    </span>
                  </div>
                  <div class="TxtBtn justify-start items-start gap-2.5 flex">
                    <div class="text-base font-normal text-gray-500 Change">
                      Change
                    </div>
                  </div>
                </div>
                <div
                  class="Input w-full p-2.5 bg-white rounded justify-start items-center gap-2.5 inline-flex">
                  <div class="w-20 text-base font-normal text-gray-400 Contact">
                    Method
                  </div>
                  <div class="w-full text-base font-normal text-neutral-700">
                    Fast Shipping, $5.00
                  </div>
                  <div class="justify-start items-start gap-2.5 flex">
                    <div class="text-base font-normal text-gray-500 Change">
                      Change
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-start justify-between w-full gap-7">
              <div
                class="text-xl font-medium capitalize Payment text-neutral-700">
                payment
              </div>
              <div class="flex flex-col items-start justify-start gap-5">
                <div class="justify-start items-center gap-2.5 inline-flex">
                  <div
                    class="Checkbox justify-start items-baseline gap-2.5 flex">
                    <input
                      type="checkbox"
                      class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      id="hs-checkbox-group-3" />
                  </div>
                  <div
                    class="text-base font-normal capitalize Bitcoin text-neutral-700">
                    Bitcoin
                  </div>
                  <div
                    class="relative w-8 h-6 bg-white border rounded MediaPayments border-neutral-100">
                    <img
                      class="w-full h-full Bitcoin"
                      src="../assets/icons/btc.svg" />
                  </div>
                </div>
                <div class="justify-start items-center gap-2.5 inline-flex">
                  <div
                    class="Checkbox justify-start items-baseline gap-2.5 flex">
                    <div class="relative w-4 h-4">
                      <div class="w-4 h-4">
                        <input
                          type="checkbox"
                          class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          id="hs-checkbox-group-3" />
                      </div>
                    </div>
                  </div>
                  <div
                    class="text-base font-normal capitalize CreditCard text-neutral-700">
                    Credit card
                  </div>
                  <div class="Group">
                    <div class="w-full h-full Group">
                      <img src="../assets/icons/master.svg" alt="" />
                    </div>
                  </div>
                  <div class="h-3 Group w-9">
                    <img src="../assets/icons/visa.svg" alt="" />
                  </div>
                </div>
                <div class="justify-start items-center gap-2.5 inline-flex">
                  <div
                    class="Checkbox justify-start items-baseline gap-2.5 flex">
                    <input
                      type="checkbox"
                      class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      id="hs-checkbox-group-1" />
                  </div>
                  <div
                    class="flex gap-2.5 items-center justify-center w-24 h-5 Paypal">
                    <div
                      class="inline-flex items-center w-24 h-4 Group gap-2.5">
                      <div class="Group">PalPal</div>
                      <img
                        class="w-24 h-4"
                        src="../assets/icons/PayPal.svg"
                        alt="paypal" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-start justify-start w-full gap-5">
                <div
                  class="Input w-full p-2.5 bg-white rounded border border-zinc-200 justify-start items-start gap-2.5 inline-flex">
                  <input
                    class="text-base font-normal text-gray-400 capitalize outline-none FirstName grow shrink basis-0"
                    placeholder="Card number" />
                </div>
                <div
                  class="Input w-full p-2.5 bg-white rounded border border-zinc-200 justify-start items-start gap-2.5 inline-flex">
                  <input
                    class="text-base font-normal text-gray-400 capitalize outline-none FirstName grow shrink basis-0"
                    placeholder="card name" />
                </div>
                <div class="inline-flex items-start justify-between gap-5">
                  <input
                    class="h-11 p-2.5 bg-white rounded border border-zinc-200 items-start gap-2.5 flex"
                    type="date"
                    placeholder="Date" />
                  <div
                    class="Input h-11 p-2.5 bg-white rounded border border-zinc-200 justify-start items-start gap-2.5 flex">
                    <input
                      class="text-base font-normal text-gray-400 capitalize outline-none"
                      placeholder="Security code" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-center gap-10">
              <div class="to">
                <router-link to="/">
                  <div
                    class="inline-flex items-center px-32 py-3 text-center text-sm font-semibold cursor-pointer text-white bg-[#F5A3B7] border border-transparent rounded-lg gap-x-2 hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:bg-[#F5A3B7] dark:text-white">
                    Pay now
                  </div>
                </router-link>
              </div>
              <div class="ExplorMore">
                <button
                  type="button"
                  class="inline-flex items-center text-sm font-medium text-[#B0A6BD]">
                  Return to Shipping
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
        <div class="product">
          <div
            class="flex-col items-start justify-start w-full h-full p-5 bg-white rounded-md shadow YouOrder gap-7">
            <div class="text-xl font-medium YouOrder text-neutral-700">
              You order
            </div>
            <div
              class="flex flex-col items-start justify-start gap-5 Frame3398">
              <div
                class="flex flex-col items-start justify-start gap-5 Frame3399">
                <div
                  class="ItemInCart justify-start items-start gap-2.5 inline-flex mt-4">
                  <div
                    class="ItemInCart justify-start items-start gap-2.5 flex">
                    <img
                      class="object-cover w-24 h-24 Img"
                      src="https://wmg.stylekorean.com/HMC01-NewBalmR_thumb.jpg?v20240210" />
                    <div class="relative w-48 h-24 Group3313">
                      <div
                        class="TxtBtn w-48 h-6 left-0 top-0 absolute justify-start items-start gap-2.5 inline-flex">
                        <div
                          class="text-base font-medium capitalize text-neutral-700">
                          Dewy Glow Jelly Cream
                        </div>
                      </div>
                      <div
                        class="Price w-20 left-0 top-[34px] absolute text-neutral-700 text-sm font-normal capitalize">
                        $19.60
                      </div>
                      <div
                        class="Quantity w-20 h-6 px-2 left-0 top-[76px] absolute rounded border border-zinc-200 justify-start items-center gap-2 inline-flex">
                        <div
                          class="text-sm font-normal capitalize text-neutral-700">
                          -
                        </div>
                        <div
                          class="text-sm font-normal text-center capitalize w-9 text-neutral-700">
                          1
                        </div>
                        <div
                          class="text-sm font-normal capitalize text-neutral-700">
                          +
                        </div>
                      </div>
                      <div
                        class="CloseIcon w-2 h-2 left-[105px] top-[84px] absolute"></div>
                    </div>
                  </div>
                </div>
                <div class="h-px border Line53 w-80 border-zinc-200"></div>
                <div
                  class="Frame3396 justify-start items-start gap-2.5 inline-flex">
                  <div
                    class="ItemInCart justify-start items-start gap-2.5 flex">
                    <img
                      class="object-cover w-24 h-24 Img"
                      src="https://wmg.stylekorean.com/BR000189/cosSM13-SC_3_thumb.jpg?v20240210" />
                    <div class="relative h-24 Group3313 w-28">
                      <div
                        class="TxtBtn w-full h-6 left-0 top-0 absolute justify-start items-start gap-2.5 inline-flex">
                        <div
                          class="w-full text-base font-medium capitalize BackToLogin text-neutral-700">
                          Soft Finish
                        </div>
                      </div>
                      <div
                        class="Price w-20 left-0 top-[34px] absolute text-neutral-700 text-sm font-normal capitalize">
                        $19.60
                      </div>
                      <div
                        class="Quantity w-20 h-6 px-2 left-0 top-[76px] absolute rounded border border-zinc-200 justify-start items-center gap-2 inline-flex">
                        <div
                          class="text-sm font-normal capitalize text-neutral-700">
                          -
                        </div>
                        <div
                          class="text-sm font-normal text-center capitalize w-9 text-neutral-700">
                          1
                        </div>
                        <div
                          class="text-sm font-normal capitalize text-neutral-700">
                          +
                        </div>
                      </div>
                      <div
                        class="CloseIcon w-2 h-2 left-[105px] top-[84px] absolute"></div>
                    </div>
                  </div>
                </div>
                <div class="h-px border Line53 w-80 border-zinc-200"></div>
                <div
                  class="Frame3395 justify-start items-start gap-2.5 inline-flex">
                  <div
                    class="ItemInCart justify-start items-start gap-2.5 flex">
                    <img
                      class="w-24 h-24 Img"
                      src="https://wmg.stylekorean.com/BR000208/7KCc66qp7JeG7J2M2_thumb.jpg?v20240210" />
                    <div class="relative h-24 Group3313 w-28">
                      <div
                        class="TxtBtn w-full h-6 left-0 top-0 absolute justify-start items-start gap-2.5 inline-flex">
                        <div
                          class="text-base font-medium capitalize BackToLogin text-neutral-700">
                          Soft Finish
                        </div>
                      </div>
                      <div
                        class="Price w-20 left-0 top-[34px] absolute text-neutral-700 text-sm font-normal capitalize">
                        $19.60
                      </div>
                      <div
                        class="Quantity w-20 h-6 px-2 left-0 top-[76px] absolute rounded border border-zinc-200 justify-start items-center gap-2 inline-flex">
                        <div
                          class="text-sm font-normal capitalize text-neutral-700">
                          -
                        </div>
                        <div
                          class="text-sm font-normal text-center capitalize w-9 text-neutral-700">
                          1
                        </div>
                        <div
                          class="text-sm font-normal capitalize text-neutral-700">
                          +
                        </div>
                      </div>
                      <div
                        class="CloseIcon w-2 h-2 left-[105px] top-[84px] absolute"></div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex flex-col items-start justify-start gap-5 TotalPrice">
                  <div class="h-px border Line53 w-80 border-zinc-200"></div>
                  <div
                    class="inline-flex items-start justify-between Frame3316 w-80">
                    <div
                      class="text-base font-normal leading-none text-gray-400 uppercase Subtotal w-44">
                      Subtotal
                    </div>
                    <div
                      class="text-base font-normal leading-none text-right text-gray-400 uppercase 8400 w-28">
                      $84.00
                    </div>
                  </div>
                  <div
                    class="inline-flex items-start justify-between Frame3318 w-80">
                    <div
                      class="text-base font-normal leading-none text-gray-400 uppercase Shipping w-44">
                      Shipping
                    </div>
                    <div
                      class="text-base font-normal leading-none text-right text-gray-400 uppercase 500 w-28">
                      $5.00
                    </div>
                  </div>
                  <div
                    class="inline-flex items-start justify-between Frame3317 w-80">
                    <div
                      class="text-base font-medium leading-none uppercase EstimatedTotal w-44 text-neutral-700">
                      Estimated total
                    </div>
                    <div
                      class="text-base font-medium leading-none text-right uppercase 8900 w-28 text-neutral-700">
                      $89.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
