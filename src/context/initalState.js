import { fetchCart, fetchShipping, fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();
const shipInfo= fetchShipping();

export const initialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
  cartItems: cartInfo,
  shipping:null,
  shipItems:shipInfo,
  
};
