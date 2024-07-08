import {defineStore} from "pinia";

export const useProductStore = defineStore("ProductStore", {
  state: () => ({
    CartComponent: [
      {
        id: 1,
        promotion: "-75%",
        image:
          "https://wmg.stylekorean.com/BR000189/cosSM13-SC_3_thumb.jpg?v20240210",
        title: "All-Around Safe Block Essence Sun SPF45+",
        product: "All Around Safe Block Sun Milk SPF50+/PA+++",
        rating: "(0)",
        price: "$99.00",
      },
      {
        id: 2,
        promotion: "-25%",
        image:
          "https://wmg.stylekorean.com/BR000189/cosS21-AL_thumb.jpg?v20240210",
        title: "All-Around Safe Block Essence Sun SPF45+",
        product: "All Around Safe Block Sun Milk SPF50+/PA+++",
        rating: "(7)",
        price: "$32.00",
      },
      {
        id: 3,
        promotion: "-25%",
        image:
          "https://wmg.stylekorean.com/BR000208/7KCc66qp7JeG7J2M2_thumb.jpg?v20240210",
        title: "All-Around Safe Block Essence Sun SPF45+",
        product: "All Around Safe Block Sun Milk SPF50+/PA+++",
        rating: "(9)",
        price: "$32.00",
      },
      {
        id: 4,
        promotion: "-10%",
        image:
          "https://wmg.stylekorean.com/BR000456/HRS04-I_1_thumb.jpg?v20240210",
        title: "All-Around Safe Block Essence Sun SPF45+",
        product: "All Around Safe Block Sun Milk SPF50+/PA+++",
        rating: "(10)",
        price: "$32.00",
      },
      {
        id: 5,
        promotion: "-50%",
        image: "https://wmg.stylekorean.com/HMC01-NewBalmR_thumb.jpg?v20240210",
        title: "All-Around Safe Block Essence Sun SPF45+",
        product: "All Around Safe Block Sun Milk SPF50+/PA+++",
        rating: "(10)",
        price: "$32.00",
      },
      {
        id: 6,
        promotion: "-10%",
        image:
          "https://wmg.stylekorean.com/BR000389/7IKs7J207KaI33_thumb.jpg?v20240210",
        title: "All-Around Safe Block Essence Sun SPF45+",
        product: "All Around Safe Block Sun Milk SPF50+/PA+++",
        rating: "(10)",
        price: "$32.00",
      },
      {
        id: 7,
        promotion: "-75%",
        image:
          "https://wmg.stylekorean.com/BR000537/AXS04-SD_thumb_1.jpg?v20240210",
        title: "All-Around Safe Block Essence Sun SPF45+",
        product: "All Around Safe Block Sun Milk SPF50+/PA+++",
        rating: "(10)",
        price: "$32.00",
      },
      {
        id: 8,
        promotion: "-25%",
        image: "https://wmg.stylekorean.com/JSMP05-PK_thumb.jpg?v20240210",
        title: "All-Around Safe Block Essence Sun SPF45+",
        product: "All Around Safe Block Sun Milk SPF50+/PA+++",
        rating: "(10)",
        price: "$32.00",
      },
      {
        id: 9,
        promotion: "",
        image:
          "https://wmg.stylekorean.com/BR000296/HLSS01-SR_thumb_1.jpg?v20240210",
        title: "All-Around Safe Block Essence Sun SPF45+",
        product: "All Around Safe Block Sun Milk SPF50+/PA+++",
        rating: "(10)",
        price: "$32.00",
      },
      {
        id: 10,
        promotion: "-25%",
        image: "https://wmg.stylekorean.com/RNCM17-LM06_thumb.jpg?v20240210",
        title: "All-Around Safe Block Essence Sun SPF45+",
        product: "All Around Safe Block Sun Milk SPF50+/PA+++",
        rating: "(10)",
        price: "$32.00",
      },
      {
        id: 11,
        promotion: "-10%",
        image:
          "https://wmg.stylekorean.com/BR000389/JSMS01-4SET_thumb.jpg?v20240210",
        title: "All-Around Safe Block Essence Sun SPF45+",
        product: "All Around Safe Block Sun Milk SPF50+/PA+++",
        rating: "(10)",
        price: "$32.00",
      },
      {
        id: 12,
        promotion: "-75%",
        image:
          "https://wmg.stylekorean.com/BR000627/7Yag7L2U67O07JWE7J207KCk7YGs66a8_thumb.jpg?v20240210",
        title: "All-Around Safe Block Essence Sun SPF45+",
        product: "All Around Safe Block Sun Milk SPF50+/PA+++",
        rating: "(10)",
        price: "$32.00",
      },
    ],
  }),
  getters: {
    allProducts: (state) => state.products,
    productCount: (state) => state.products.length,
  },
});
