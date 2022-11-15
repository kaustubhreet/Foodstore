import React,{useState,useEffect} from 'react'
  import { saveAddress,getAddress } from "../utils/firebaseFunctions";
  import { actionType } from "../context/reducer";
  import { useStateValue } from "../context/StateProvider";
  import { motion } from "framer-motion";
  //import { collection, getDocs } from "firebase/firestore";
  import { firestore, storage } from "../firebase.config";

  const loadScript=(src)=> {
    return new Promise((resolve) => {
      const script = document.createElement("script")
      script.src = src;
  
      script.onload = () => {
        resolve(true)
      };
  
      script.onerror = () => {
        resolve(false)
      };
  
      document.body.appendChild(script)
    });
  };
  const __DEV__ = document.domain === 'localhost'


const ShippingAddress = () => {
   
    const [flag, setFlag] = useState(1);
       const [ firstName, setfirstname]=useState("");
       const [ phone,setPhone]=useState("");
       const [ email,setEmail]=useState("");
       const [ address,setAddress]=useState("");
       const [fields, setFields] = useState(false); 
       const [msg, setMsg] = useState(null);
       const [alertStatus, setAlertStatus] = useState("danger");
       const [{ shipping ,cartItems}, dispatch] = useStateValue();
       const [tot, setTot] = useState(0);
       
var currentdate = new Date(); 
const datetime=currentdate.getDate()+"#"+currentdate.getDay()+"@"+currentdate.getHours()+currentdate.getMinutes();

const [gid,setGid]=useState(datetime);
      
       useEffect(() => {
        let totalPrice = cartItems.reduce(function (accumulator, item) {
          return accumulator + item.qty * item.price;
        }, 0);
        setTot(totalPrice);
        //console.log(tot);
      }, [tot, flag]);

      
      //for database access
      const amount=(tot+2.5);
      
    const saveDetails = (event) => {
      event.preventDefault();
        try {
          if (!firstName || !email || !phone || !address) {
            setFields(true);
            setMsg("Required fields can't be empty");
            setAlertStatus("danger");
            setTimeout(() => {
              setFields(false);
              const citiesRef = firestore.collection('shipping');
              const snapshot = citiesRef.get();
              snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                setGid(doc.id);  
              });


            }, 4000);
          } else {
            const data = {
              amount:amount,
              firstName: firstName,
              email: email,
              phone: phone,
              id:datetime,
              address: address,
            };
            
            saveAddress(data);
            setFields(true);
            setMsg("Data Uploaded successfully 😊");
            setAlertStatus("success");
            displayRazorpay(amount,datetime,firstName,email,phone,address);
            setTimeout(() => {
              setFields(false);
            }, 4000);
            clearData();
          }
        } catch (error) {
          console.log(error);
          setFields(true);
          setMsg("Error while uploading : Try AGain 🙇");
          setAlertStatus("danger");
         
          setTimeout(() => {
            setFields(false);
          
          }, 4000);
        }
    
        fetchData();
      };
    
      const clearData = () => {
        setfirstname("");
        setEmail("");
        setPhone("");
        setAddress("");
      };
    
      const fetchData = async () => {
        await getAddress().then((data) => {
          dispatch({
            type: actionType.SET_SHIPPING,
            shipping: data,
          });
        });
      };
    

      //clearing the cart
      const clearCart = () => {
        dispatch({
          type: actionType.SET_CARTITEMS,
          cartItems: [],
        });
    
        localStorage.setItem("cartItems", JSON.stringify([]));
      };

//sectrek key of razor pay=EODlas22Ww94e6usOIoi0d56



//charging payment
  async function displayRazorpay(amount,gid,firstName,email,phone,address) {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?')
      return ;
    }

    const options = {
      key: __DEV__ ? 'rzp_test_YW8OvjPi1RfWv7' : 'rzp_live_F8VcYBr0g9i0wm',
      currency:"INR",
      amount: amount*100,
      order_id: gid,
      name: 'Payment Section',
      description: 'Thank you for ordering. Please hold some patience',
      image: 'https://www.setindiabiz.com/wp-content/uploads/2022/05/payonline.png',

      handler: function (response) {
        alert(response.razorpay_payment_id)
        alert("Payment Successfully")
        alert(response.razorpay_order_id,)
        if(Response){
          clearCart();
        }
        //console.log(response.razorpay_order_id)
        //alert(response.razorpay_order_id)
        alert(response.razorpay_signature)
      },
      prefill: {
        name: "Test User",
        email: 'mishuyashu23@gmail.com',
        phone_number: '9262685542'
      },
      notes: {
        shippingAddress: firstName, email, phone, address
    }
}
    const paymentObject = new window.Razorpay(options)
    paymentObject.open();

  }


  return (
    <>
    
    <div class="w-full md:w-96 md:max-w-full mt-5 mx-auto">
              <div className='w-full p-3 rounded-sm text-center font-bold text-2xl'>
              <h1>Shipping Address</h1>
              </div>
    {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ₹{
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {msg}
          </motion.p>
        )}
  <div class="p-6 border-2 border-gray-300 sm:rounded-md">
    
    <form method="POST" >
     
      <label class="block mb-6">
        <span class="text-gray-700">Full Name</span>
        <input
          type="text"
          name="firstName"
          class="
            block
            w-full
            mt-1
            border-4
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          " value={firstName}
          onChange={(e) => setfirstname(e.target.value)}
          placeholder=" Full Name "
        />
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Email address</span>
        <input
          name="email"
          type="email"
          class="
            block
            w-full
            mt-1
            border-4
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email.address@example.com"
          required
        />
        </label>

        <label class="block mb-6">
        <span class="text-gray-700">Phone Number</span>
        <input
          name="phone"
          type="number"
          class="
            block
            w-full
            mt-1
            border-4
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+91 9828393030"
          required
        />
      
      </label>
     
      <label class="block mb-6">
        <span class="text-gray-700">Address</span>
        <textarea
          name="address"
          class="
            block
            w-full
            mt-1
            border-4
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          rows="5"
          value={address}
            onChange={(e) => setAddress(e.target.value)}
          placeholder="Tell us what you're thinking about..."
        ></textarea>
      </label>
      <div class="mb-6">
        <button
          type="submit"
          class="
            h-10
            px-5
            text-indigo-100
            bg-red-600
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          " onClick={saveDetails}
        >
          Submit
        </button>
      </div>
      <div>
      </div>
    </form>
  </div>
</div>

</>
  )
}

export default ShippingAddress