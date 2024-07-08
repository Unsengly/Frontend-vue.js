import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProductPage from "../views/ProductPage.vue";
import ProductCategory from "../views/ProductCategory.vue";
import ProductDetail from "../views/ProductDetail.vue";
import BesSelling from "../views/BestSelling.vue";
import Collection from "../views/Collection.vue";
import Payment from "../views/Payment.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", name: "home", component: HomePage},
    {path: "/product", name: "product", component: ProductPage},
    {path: "/category", name: "category", component: ProductCategory},
    {path: "/detail", name: "detail", component: ProductDetail},
    {path: "/best-selling", name: "best-selling", component: BesSelling},
    {path: "/collection", name: "collection", component: Collection},
    {path: "/payment", name: "payment", component: Payment},
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return {top: 0, behavior: "smooth"};
    }
  },
});

export default router;
