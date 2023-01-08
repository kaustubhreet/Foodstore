import React, { useContext } from "react";
import ChatBot from "bongga-react-simple-chatbot";
import { chatBotContext } from "./Bot";
import { ThemeProvider } from 'styled-components';

// Creating our own theme
const theme = {
  background: '#e5e7eb',
  headerBgColor: 'orange',
  headerFontSize: '20px',
  botBubbleColor: 'orange',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

// Set some properties of the bot
const config = {
  floating: true,
};

const BotFunction = () => {
  const steps = useContext(chatBotContext);


  return (
    <>
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="Chat With Bot"
        speechSynthesis={{ enable: true, lang: "en" }}
        steps={steps}
        {...config}

      />
      </ThemeProvider>
      </>

      );
};

export default BotFunction;
