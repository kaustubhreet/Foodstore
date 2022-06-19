import { useNavigate } from "react-router-dom";
import { useAuth, useData } from "../contexts";
import { actionTypes } from "../reducers/actionTypes";
import { AddToOrdersService, ClearCartService } from "../services/apiCall";
import { ToastHandler } from "../utilities/toastUtils";

export const usePayment = () => {
  const { token } = useAuth();
  const { state, setLoader, dispatch, setCouponData } = useData();
  const navigate = useNavigate();

  const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => resolve(true);
      script.onerror = () => reject(false);

      document.body.appendChild(script);
    });
  };

  const displayRazorPay = async (deliveryAddress, totalAmount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      ToastHandler("error", "Check your Internet Connection!");
      return;
    }

    const options = {
      key: process.env.REACT_APP_RZP_KEY,
      amount: totalAmount * 100,
      currency: "INR",
      name: "ClothNest",
      description: "Thank you for shopping with us",
      image:
        "https://res.cloudinary.com/ajain8479/image/upload/v1655183630/E-com%20Images/i9scsfrwyl9pb0gpifkc.png",
      handler: function (response) {
        paymentSuccessful(response, deliveryAddress, totalAmount);
      },
      prefill: {
        name: `${deliveryAddress.name}`,
        email: `${deliveryAddress.email}`,
        contact: `${deliveryAddress.mobile}`,
      },
      theme: {
        color: "#88d7fb",
      },
      notes: {
        address: `${deliveryAddress.name}, ${deliveryAddress.locality}, ${deliveryAddress.city}, ${deliveryAddress.pincode}`,
      },
    };

    const paymentObj = new window.Razorpay(options);
    paymentObj.on("payment.failed", () => {
      ToastHandler("error", "Pament Failed!");
      paymentObj.close();
      navigate("/products");
    });
    paymentObj.open();
  };

  const paymentSuccessful = async (
    razorPayResponse,
    deliveryAddress,
    totalAmount
  ) => {
    try {
      let res;
      setLoader(true);
      res = await AddToOrdersService(token, {
        items: state.cart,
        paymentId: razorPayResponse.razorpay_payment_id,
        totalPrice: totalAmount,
        deliveryAddress,
      });
      dispatch({
        type: actionTypes.SET_ORDERS,
        payload: { orders: res.data.orders },
      });
      res = await ClearCartService(token);
      setCouponData({});
      dispatch({
        type: actionTypes.SET_CART,
        payload: { cart: res.data.cart },
      });
      setLoader(false);
      navigate("/profile/orders");
    } catch (err) {
      console.error(err);
    }
  };

  return { loadScript, displayRazorPay, paymentSuccessful };
};