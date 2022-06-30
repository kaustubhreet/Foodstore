import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

//saving new address
export const saveAddress = async (data) => {
  await setDoc(doc(firestore, "shipping", `${Date.now()}`), data, {
    merge: true,
  });
};

//get new address
export const getAddress = async () => {
  const items = await getDocs(
    query(collection(firestore, "shipping"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};


// getall food items
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};
