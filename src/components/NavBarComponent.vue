<script>
export default {};
</script>
<!-- ================>>Navbar -->
<template>
  <div class="w-full h-[80px] text-black bg-white navbar flex-row flex">
    <div
      class="navbar w-[1256px] h-[80px] flex justify-between items-center mx-auto flex-row">
      <div class="text-2xl font-semibold logo">
        <router-link to="/"
          ><p>
            <span class="text-[#F5A3B7]">Kraoop</span>
            <span class="text-[#383838]"> Beauty</span>
          </p></router-link
        >
      </div>
      <div
        class="flex flex-row items-center justify-between category text-[16px] w-[500px]">
        <router-link to="/product">
          <div
            class="cursor-pointer shopAll"
            onclick="../views/ProductPage.vue">
            SHOP ALL
          </div>
        </router-link>
        <router-link to="/best-selling">
          <div class="bestSelling">BEST SELLING</div>
        </router-link>
        <router-link to="/collection">
          <div class="collection">COLLECTION</div>
        </router-link>
        <div class="aboutUs">ABOUT US</div>
      </div>
      <div
        class="menu w-[180px] flex justify-between items-center flex-row text-[12px]">
        <div class="flex flex-col items-center justify-between gap-1 search">
          <div class="icon">
            <img src="../assets/icons/Search.svg" alt="search" />
          </div>
          <div class="text">SEARCH</div>
        </div>
        <div class="flex flex-col items-center justify-between gap-1 account">
          <div class="icon">
            <img src="../assets/icons/account.svg" alt="account" />
          </div>
          <div class="text">ACCOUNT</div>
        </div>
        <router-link to="/payment" ><div class="flex flex-col items-center justify-between gap-1 card">
          <div class="icon">
            <img src="../assets/icons/cart.svg" alt="card" />
          </div>
          <div class="text">CARD</div>
        </div></router-link>
      </div>
    </div>
  </div>
</template>
