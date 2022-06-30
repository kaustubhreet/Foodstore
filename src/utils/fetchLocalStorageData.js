export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};

export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("cartItems") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

  return cartInfo ? cartInfo : [];
};

export const fetchShipping = () => {
  const shipInfo =
    localStorage.getItem("shipItems") !== "undefined"
      ? JSON.parse(localStorage.getItem("shipItems"))
      : localStorage.clear();

  return shipInfo ? shipInfo : [];
};