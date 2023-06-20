import React, { createContext } from "react";
import { Link } from "react-router-dom";

export const chatBotContext = createContext();

const Bot = ({ children }) => {
  const steps = [
    {
      id: "1",
      message: "Hi, What is your name?",
      trigger: "2"
    },
    {
      id: "2",
      user: true,
      trigger: "3"
    },
    {
      id: "3",
      message: "Hi {previousValue}! How can i help you?",
      trigger: "4"
    },
    {
      id: "4",
      options: [
        { value: 1, label: "Product Enquiry", trigger: "5" },
        { value: 2, label: "Product Complaint", trigger: "6" },
        { value: 3, label: "About US", trigger: "7" },
        { value: 4, label: "Nothing", trigger: "9" }
      ]
    },
    {
      id: "5",
      component: <div> Sample of Product Enquiry Page </div>,
      trigger: "8"
    },
    {
      id: "6",
      component: <div> Sample of Product Complaint Page. Visit visit {<a href="/contact">Click on</a>}</div>,
      trigger: "8"
    },
    {
      id: "7",
      component: <div> We are food based company and our service is to deliver orders in short time with the best quality...for more information visit {<a href="/about">Click on</a>}</div>,
      trigger: "8"
    },
    {
      id: "8",
      message: "Anything else?",
      trigger: "4"
    },
    {
      id: "9",
      message: "Thank you for your visiting",
      end: true
    }
  ];

  return (
    <chatBotContext.Provider value={steps}>{children}</chatBotContext.Provider>
  );
};

export default Bot;
