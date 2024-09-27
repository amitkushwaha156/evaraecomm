import { createStore } from "redux";
const DBProductItem= [
  {
    id: 1,
    category: "MensWear",
    

    title: "Colorful Pattern Shirts",
    images: {
      default: "/src/theme/assetss/imgs/shop/product-2-1.jpg",
      hover: "/src/theme/assetss/imgs/shop/product-2-2.jpg",
    },
    rating: "3.5",
    price: {
      current: 238.85,
      old: 245.8,
    },
    badges: ["Hot"],
    actions: [
      {
        label: "Add To Wishlist",

        icon: "fi-rs-heart",
      },

      {
        label: "Add To Cart",

        icon: "fi-rs-shopping-bag-add",
      },
    ],
  },
  {
    id: 2,
    category: "MensWear",
    
    title: "Cartoon Astronaut T-Shirts",
    images: {
      default: "/src/theme/assetss/imgs/shop/product-3-1.jpg",
      hover: "/src/theme/assetss/imgs/shop/product-3-2.jpg",
    },
    price: {
      current: 138.85,
      old: 255.8,
    },
    rating: 5.0,
    badges: ["New"],
    actions: [
      {
        label: "Add To Wishlist",

        icon: "fi-rs-heart",
      },

      {
        label: "Add To Cart",

        icon: "fi-rs-shopping-bag-add",
      },
    ],
  },
  {
    id: 3,
    category: "MensWear",
    
    title: "Plain Striola Shirts",
    images: {
      default: "/src/theme/assetss/imgs/shop/product-8-2.jpg",
      hover: "/src/theme/assetss/imgs/shop/product-8-1.jpg",
    },
    price: {
      current: 338.85,
      old: 445.8,
    },
    rating: 3.9,
    badges: ["Best Sell"],
    actions: [
      {
        label: "Add To Wishlist",

        icon: "fi-rs-heart",
      },

      {
        label: "Add To Cart",

        icon: "fi-rs-shopping-bag-add",
      },
    ],
  },
  {
    id: 4,
    category: "MensWear",
    
    title: "Landscape Painting Shirt",
    images: {
      default: "/src/theme/assetss/imgs/shop/product-1-1.jpg",
      hover: "/src/theme/assetss/imgs/shop/product-1-2.jpg",
    },
    price: {
      current: 123.85,
      old: 235.8,
    },
    rating: 3.8,
    badges: ["Sale"],
    actions: [
      {
        label: "Add To Wishlist",

        icon: "fi-rs-heart",
      },

      {
        label: "Add To Cart",

        icon: "fi-rs-shopping-bag-add",
      },
    ],
  },
  {
    id: 5,
    category: "MensWear",
    
    title: "Letter Print T-Shirt",
    images: {
      default: "/src/theme/assetss/imgs/shop/product-4-1.jpg",
      hover: "/src/theme/assetss/imgs/shop/product-3-2.jpg",
    },
    price: {
      current: 28.85,
      old: 45.8,
    },
    rating: 4.5,
    badges: ["-30%"],
    actions: [
      {
        label: "Add To Wishlist",

        icon: "fi-rs-heart",
      },

      {
        label: "Add To Cart",

        icon: "fi-rs-shopping-bag-add",
      },
    ],
  },
  {
    id: 6,
    category: "MensWear",
    
    title: "Element Pattern Print Shirts",
    images: {
      default: "/src/theme/assetss/imgs/shop/product-5-1.jpg",
      hover: "/src/theme/assetss/imgs/shop/product-5-2.jpg",
    },
    price: {
      current: 238.85,
      old: 245.8,
    },
    rating: 4.9,
    badges: ["-22%"],
    actions: [
      {
        label: "Add To Wishlist",

        icon: "fi-rs-heart",
      },

      {
        label: "Add To Cart",

        icon: "fi-rs-shopping-bag-add",
      },
    ],
  },
  {
    id: 7,
    category: "WomenWear",
    
    title: "Element Pattern Print Shirts",
    images: {
      default: "/src/theme/assetss/imgs/shop/product-16-1.jpg",
      hover: "/src/theme/assetss/imgs/shop/product-16-2.jpg",
    },
    price: {
      current: 238.85,
      old: 245.8,
    },
    rating: 4.9,
    badges: ["-22%"],
    actions: [
      {
        label: "Add To Wishlist",

        icon: "fi-rs-heart",
      },

      {
        label: "Add To Cart",

        icon: "fi-rs-shopping-bag-add",
      },
    ],
  },
  {
    id: 8,
    category: "WomenWear",
    
    title: "Element Pattern Print Shirts",
    images: {
      default: "/src/theme/assetss/imgs/shop/product-16-4.jpg",
      hover: "/src/theme/assetss/imgs/shop/product-16-7.jpg",
    },
    price: {
      current: 238.85,
      old: 245.8,
    },
    rating: 4.9,
    badges: ["-22%"],
    actions: [
      {
        label: "Add To Wishlist",

        icon: "fi-rs-heart",
      },

      {
        label: "Add To Cart",

        icon: "fi-rs-shopping-bag-add",
      },
    ],
  },
  {
    id: 9,
    category: "WomenWear",
    
    title: "Element Pattern Print Shirts",
    images: {
      default: "/src/theme/assetss/imgs/shop/product-10-1.jpg",
      hover: "/src/theme/assetss/imgs/shop/product-10-2.jpg",
    },
    price: {
      current: 238.85,
      old: 245.8,
    },
    rating: 4.9,
    badges: ["-22%"],
    actions: [
      {
        label: "Add To Wishlist",

        icon: "fi-rs-heart",
      },

      {
        label: "Add To Cart",

        icon: "fi-rs-shopping-bag-add",
      },
    ],
  },
  {
    id: 10,
    category: "WomenWear",
    
    title: "Element Pattern Print Shirts",
    images: {
      default: "/src/theme/assetss/imgs/shop/product-11-1.jpg",
      hover: "/src/theme/assetss/imgs/shop/product-11-2.jpg",
    },
    price: {
      current: 238.85,
      old: 245.8,
    },
    rating: 4.9,
    badges: ["-22%"],
    actions: [
      {
        label: "Add To Wishlist",

        icon: "fi-rs-heart",
      },

      {
        label: "Add To Cart",

        icon: "fi-rs-shopping-bag-add",
      },
    ],
  },
  {
    id: 11,
    category: "WomenWear",
    
    title: "Element Pattern Print Shirts",
    images: {
      default: "/src/theme/assetss/imgs/shop/product-12-1.jpg",
      hover: "/src/theme/assetss/imgs/shop/product-12-2.jpg",
    },
    price: {
      current: 238.85,
      old: 245.8,
    },
    rating: 4.9,
    badges: ["-22%"],
    actions: [
      {
        label: "Add To Wishlist",

        icon: "fi-rs-heart",
      },

      {
        label: "Add To Cart",

        icon: "fi-rs-shopping-bag-add",
      },
    ],
  },
  {
    id: 12,
    category: "WomenWear",
    
    title: "Element Pattern Print Shirts",
    images: {
      default: "/src/theme/assetss/imgs/shop/product-10-1.jpg",
      hover: "/src/theme/assetss/imgs/shop/product-10-2.jpg",
    },
    price: {
      current: 238.85,
      old: 245.8,
    },
    rating: 4.9,
    badges: ["-22%"],
    actions: [
      {
        label: "Add To Wishlist",

        icon: "fi-rs-heart",
      },

      {
        label: "Add To Cart",

        icon: "fi-rs-shopping-bag-add",
      },
    ],
  },
  {
    id: 13,
    category: "WomenWear",
    
    title: "Element Pattern Print Shirts",
    images: {
      default: "/src/theme/assetss/imgs/shop/product-15-1.jpg",
      hover: "/src/theme/assetss/imgs/shop/product-15-2.jpg",
    },
    price: {
      current: 238.85,
      old: 245.8,
    },
    rating: 4.9,
    badges: ["-22%"],
    actions: [
      {
        label: "Add To Wishlist",

        icon: "fi-rs-heart",
      },

      {
        label: "Add To Cart",

        icon: "fi-rs-shopping-bag-add",
      },
    ],
  },
  {
    id: 14,
    category: "WomenWear",
    
    title: "Element Pattern Print Shirts",
    images: {
      default: "/src/theme/assetss/imgs/shop/product-13-1.jpg",
      hover: "/src/theme/assetss/imgs/shop/product-13-2.jpg",
    },
    price: {
      current: 238.85,
      old: 245.8,
    },
    rating: 4.9,
    badges: ["-22%"],
    actions: [
      {
        label: "Add To Wishlist",

        icon: "fi-rs-heart",
      },

      {
        label: "Add To Cart",

        icon: "fi-rs-shopping-bag-add",
      },
    ],
  },
  {
    id: 15,
    category: "WomenWear",
    
    title: "Element Pattern Print Shirts",
    images: {
      default: "/src/theme/assetss/imgs/shop/product-6-1.jpg",
      hover: "/src/theme/assetss/imgs/shop/product-6-2.jpg",
    },
    price: {
      current: 238.85,
      old: 245.8,
    },
    rating: 4.9,
    badges: ["-22%"],
    actions: [
      {
        label: "Add To Wishlist",

        icon: "fi-rs-heart",
      },

      {
        label: "Add To Cart",

        icon: "fi-rs-shopping-bag-add",
      },
    ],
  },
  {
    id: 16,
    category: "WomenWear",
    
    title: "Element Pattern Print Shirts",
    images: {
      default: "/src/theme/assetss/imgs/shop/product-14-1.jpg",
      hover: "/src/theme/assetss/imgs/shop/product-14-2.jpg",
    },
    price: {
      current: 238.85,
      old: 245.8,
    },
    rating: 4.9,
    badges: ["-22%"],
    actions: [
      {
        label: "Add To Wishlist",

        icon: "fi-rs-heart",
      },

      {
        label: "Add To Cart",

        icon: "fi-rs-shopping-bag-add",
      },
    ],
  },
  {
    id: 17,
    category: "WomenWear",
    
    title: "Element Pattern Print Shirts",
    images: {
      default: "/src/theme/assetss/imgs/shop/product-9-1.jpg",
      hover: "/src/theme/assetss/imgs/shop/product-9-2.jpg",
    },
    price: {
      current: 238.85,
      old: 245.8,
    },
    rating: 4.9,
    badges: ["-22%"],
    actions: [
      {
        label: "Add To Wishlist",

        icon: "fi-rs-heart",
      },

      {
        label: "Add To Cart",

        icon: "fi-rs-shopping-bag-add",
      },
    ],
  },
  {
    id: 18,
    category: "WomenWear",
    
    title: "Element Pattern Print Shirts",
    images: {
      default: "/src/theme/assetss/imgs/shop/product-7-1.jpg",
      hover: "/src/theme/assetss/imgs/shop/product-7-2.jpg",
    },
    price: {
      current: 238.85,
      old: 245.8,
    },
    rating: 4.9,
    badges: ["-22%"],
    actions: [
      {
        label: "Add To Wishlist",

        icon: "fi-rs-heart",
      },

      {
        label: "Add To Cart",

        icon: "fi-rs-shopping-bag-add",
      },
    ],
  },
]


const Initial = {
  AllProducts:DBProductItem,
  WishList: [],
  Cart: [],
  QuickView:[],
};

const storeReducer = (store = Initial, action) => {
  // console.log(action)

  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...store,
        WishList: [
          ...store.WishList,
          store.AllProducts.find((item) => item.id === action.payload),
        ].filter(
          (item, index, self) =>
            item !== undefined &&
            index === self.findIndex((i) => i.id === item.id)
        ),
      };
    case "WISHLIST_REMOVE":
      return {
        ...store,
        WishList: store.WishList.filter((item) => item.id !== action.payload),
      };
    case "ADD_TO_Cart":
      return {
        ...store,
        Cart: [
          ...store.Cart,
          store.AllProducts.find((item) => item.id === action.payload),
        ].filter(
          (item, index, self) =>
            item !== undefined &&
            index === self.findIndex((i) => i.id === item.id)
        ),
      };
    case "ADD_TO_QUICKIES":
      return {
        ...store,
        QuickView: [
          
          store.AllProducts.find((item) => item.id === action.payload),
        ],
      };
    case "Cart_REMOVE":
      return {
        ...store,
        Cart: store.Cart.filter((item) => item.id !== action.payload),
      };
    case "Cart_CLEAR":
      return {
        ...store,
        Cart: [],
      };
    default:
      return store;
  }
};

const MyStore = createStore(storeReducer);

export default MyStore;
