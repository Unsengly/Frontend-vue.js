<script>
export default {};
</script>
<template>
  <div class="flex flex-col justify-center container-footer">
    <div w-full class="bg-[#252525] flex justify-center">
      <div
        class="footer w-[1256px] h-[390px] flex flex-row justify-between text-white pt-20">
        <div class="kraoop">
          <div class="text-3xl font-semibold logo">
            <router-link to="/">
              <p>
                <span class="text-[pink]">Kraoop</span>
                <span class="text-white"> Beauty</span>
              </p>
            </router-link>
          </div>
          <div class="pt-10 text-white">
            <p>
              Discover nature's beauty with <br />our natural care products.
            </p>
          </div>
          <div class="flex flex-row items-center gap-2 pt-4 phone">
            <div class="icon">
              <img src="../assets/icons/Call.svg" alt="" />
            </div>
            <div class="number">+855 7707070</div>
          </div>
          <div class="flex flex-row items-center gap-2 pt-4 email">
            <div class="icon">
              <img src="../assets/icons/Message.svg" alt="" />
            </div>
            <div class="email">kraoop@beauty.com</div>
          </div>
          <div class="flex flex-row items-center gap-2 pt-4 address">
            <div class="icon">
              <img src="../assets/icons/Location.svg" alt="" />
            </div>
            <div class="address">Phnom Penh, Cambodia</div>
          </div>
        </div>
        <div class="flex flex-col gap-4 help">
          <div class="help text-[#B0A6BD]">Help</div>
          <div class="contactUs">Contact Us</div>
          <div class="faq">FAQ</div>
          <div class="shipping">Shipping and Returns</div>
        </div>
        <div class="flex flex-col gap-4 account">
          <div class="myAcc text-[#B0A6BD]">Address</div>
          <div class="myOrder">Order Status</div>
          <div class="myWishlist">Wishlist</div>
        </div>
        <div class="flex flex-col gap-4 customer">
          <div class="care text-[#B0A6BD]">Customer Care</div>
          <div class="aboutUs">About Us</div>
          <div class="contactUS">Contact Us</div>
        </div>
        <div class="signUp">
          <div class="signUp">SIGN UP FOR EMAILS</div>
          <div class="text-gray-400 text-[14px] pt-4">
            Stay informed, subscribe to our newsletter now!
          </div>
          <div class="form">
            <div class="mb-4">
              <label
                for="hs-hero-email-2"
                class="block text-sm font-medium dark:text-white"
                ><span class="sr-only">Email address</span></label
              >
              <input
                type="email"
                id="hs-hero-email-2"
                class="block w-full px-4 py-3 my-6 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none d dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Email address" />
            </div>
            <button
              type="button"
              class="inline-flex items-center text-sm font-medium text-white">
              Subcribe
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
          <div class="subcribe"></div>
        </div>
      </div>
    </div>
    <div class="bg-[#252525]">
      <!--============================================================>> Footer Divider Line -->
      <hr class="h-px my-8 bg-pink-100 border-0" />
      <!--============================================================>> Footer Bottom -->
      <div class="justify-center flex text-[#B0A6BD] term w-full">
        <div
          class="footer w-[1256px] h-[50px] flex flex-row justify-between text-white]">
          <div class="kraoop">© 2024 Kraoop Beauty</div>
          <div class="flex flex-row gap-4 term">
            <div class="privacy">Privacy Policy</div>
            <div class="term">Term And Condition</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
