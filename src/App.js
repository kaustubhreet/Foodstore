import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer,FooterContainer, Service } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import About from "./components/About";
import Errorpage from './components/Errorpage';
import Contact from "./components/Contact";
import Product from "./components/Product";
import ShippingAddress from "./components/ShippingAddress";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-white">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="*" element={<Errorpage />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product/>}/>
            <Route path="/shipping" element={<ShippingAddress/>}/>
          </Routes>
        </main>
        
        <FooterContainer/>
      </div>
    </AnimatePresence>
  );
};

export default App;
