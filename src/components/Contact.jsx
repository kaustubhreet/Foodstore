import React,{useState} from 'react';
import { contact } from "../utils/firebaseFunctions";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    phone: "",
    email: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };


  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName,phone, email, message } = userData;

    if (firstName && phone && email && message) {
      // for real time database
      /*const res = fetch(
        "https://foodstore-99700-default-rtdb.firebaseio.com/contact.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            phone,
            email,
            message,
          }),

        }
      );*/
      const res={
        firstName,
            phone,
            email,
            message,
      }
      contact(res);

      if (res) {
        setUserData({
          firstName: "",
          email: "",
          phone:"",
          message: "",
        });
        alert("Data Stored Successfully !!!!!");
      } else {
        alert("plz fill the data !!!");
      }
    } else {
      alert("plz fill the data !!!");
    }
  };

  return (
   <>
<div class="w-full md:w-96 md:max-w-full mt-5 mx-auto">
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
          "value={userData.firstName}
          onChange={postUserData}
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
          value={userData.email}
                          onChange={postUserData}
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
          value={userData.phone}
                          onChange={postUserData}
          placeholder="+91 9828393030"
          required
        />
      
      </label>
      <label class="block mb-6">
        <span class="text-gray-700">Message</span>
        <textarea
          name="message"
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
          value={userData.message}
                          onChange={postUserData}
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
          " onClick={submitData}
        >
          Contact Us
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

export default Contact