import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

const BotRedirect = ({ url, message }) => {
  return (
    <div>
      <a href={url} target="_blank">
        {message}
      </a>
    </div>
  );
};

const Chatbot = () => {
  const theme = {
    background: "#f5f8fb",
    headerBgColor: "#dd6322",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#dd6322",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  const steps = [
    {
      id: "1",
      message: "What is your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}, nice to meet you!",
      trigger: "4",
    },
    {
      id: "4",
      message: "How can I help you?",
      trigger: "5",
    },
    {
      id: "5",
      options: [
        { value: 1, label: "Website service", trigger: "6" },
        { value: 2, label: "Application service", trigger: "6" },
        { value: 3, label: "Other", trigger: "7" },
      ],
    },
    {
      id: "6",
      message: "You can connect with us here for a call or leave us an email",
      trigger: "7",
    },
    {
      id: "7",
      options: [
        { value: 1, label: "Email", trigger: "8" },
        { value: 2, label: "WhatsApp", trigger: "9" },
        { value: 3, label: "Contact Us", trigger: "10" },
      ],
    },
    {
      id: "8",
      component: (
        <BotRedirect
          url="mailto:info@prthatek.com"
          message={`Message us on Email \n Click here to open Email`}
        />
      ),
      asMessage: true,
      trigger: "11",
    },
    {
      id: "9",
      component: (
        <BotRedirect
          url="https://wa.me/919876543210"
          message={`Message us on WhatsApp \n Click here to open WhatsApp`}
        />
      ),
      asMessage: true,
      trigger: "11",
    },
    {
      id: "10",
      component: (
        <BotRedirect
          url="/contact"
          message={`Click here to go to our Contact Us page`}
        />
      ),
      asMessage: true,
      trigger: "11",
    },
    {
      id: "11",
      message: "Do you want to restart the chat?",
      trigger: "12",
    },
    {
      id: "12",
      options: [
        { value: 1, label: "Yes", trigger: "4" },
        { value: 2, label: "No", trigger: "13" },
      ],
    },
    {
      id: "13",
      message: "Thank you, have a good day!",
      end: true,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="fixed right-[14px] lg:top-[150px] md:top-[500px] top-[80px] z-40">
        <ChatBot
          steps={steps}
          placeholder="Type your message here..."
          headerTitle="Chatbot"
          floating={true}
          style={{ color: "#4a4a4a" }}
        />
      </div>
    </ThemeProvider>
  );
};

export default Chatbot;
