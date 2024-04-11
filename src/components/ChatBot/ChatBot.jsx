import { useState, useRef } from "react";

function ChatBot({open, setOpen}) {
  const humanMessage = useRef();
  const botmessage = useRef();
  const input = useRef();

  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const userMessage = document.querySelector("#message2");
    const inputRef = input.current;
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;

   
    let welcome = [
      "hi|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good afternoon|good evening",
    ];
    let words2 = new RegExp(welcome, "i");
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      // if the input contains welcome words
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Hello There how are you doing today?"; // display the message
        inputRef.value = ""; // clear the input
      }, 1000);
    }
    // else{
    //   getBotMessage.innerText = "Please try asking another question";
    // }

    let bye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye"];
    let words3 = new RegExp(bye, "i");
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Bye, have a nice day";
        inputRef.value = ""; // clear the input
      }, 1000);
    }
    // else{
    //   getBotMessage.innerText = "Please try asking another question";
    // }

    let thanks = [
      "Thanks|thanks|thank you|thank you very much|Thank you very much|thanks alot",
    ];
    let words4 = new RegExp(thanks, "i");
    if (words4.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "You are welcome";
        inputRef.value = ""; // clear the input
      }, 1000);
    }
    // else{
    //   getBotMessage.innerText = "Please try asking another question";
    // }

    let how = [
      "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
    ];
    let words5 = new RegExp(how, "i");
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am fine, thank you";
        inputRef.value = ""; // clear the input
      }, 1000);
    }
    // else{
    //   getBotMessage.innerText = "Please try asking another question";
    // }
    let good = [
      "That's good|Sounds nice|that sounds awesome|that sounds great|Great|great|sounds great|that sounds good|nice|ok|okay",
    ];
    let words6 = new RegExp(good, "i");
    if (words6.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "😁";
        inputRef.value = ""; // clear the input
      }, 1000);
    }
    // else{
    //   getBotMessage.innerText = "Please try asking another question";
    // }

    let response = [
      "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|I'm good|i'm good|great|Great",
    ];
    let words7 = new RegExp(response, "i");
    if (words7.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "That is good";
        inputRef.value = ""; // clear the input
      }, 1000);
    }
    // else{
    //   getBotMessage.innerText = "Please try asking another question";
    // }

    let nameAsk = [
      "What's your name|what's your name|What is your name|what is your name",
    ];
    let words8 = new RegExp(nameAsk, "i");
    if (words8.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "My name is Bot";
        inputRef.value = ""; // clear the input
      }, 1000);
    }
    // else{
    //   getBotMessage.innerText = "Please try asking another question";
    // }

    let owner = [
      "Who is the owner|who is the owner|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner",
    ];
    let words9 = new RegExp(owner, "i");
    if (words9.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "The owner of this bot is PruthaTek";
        inputRef.value = ""; // clear the input
      }, 1000);
    }
    // else{
    //   getBotMessage.innerText = "Please try asking another question";
    // }

    let owner2 = [
      "What is PruthaTek|who's PruthaTek|whats PruthaTek|who is PruthaTek",
    ];
    let words10 = new RegExp(owner2, "i");
    if (words10.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "PruthaTek is a top web and mobile app development company founded with a vision to deliver the best to its clients.";
        inputRef.value = ""; // clear the input
      }, 1000);
    }
    // else{
    //   getBotMessage.innerText = "Please try asking another question";
    // }

    let ageAsk = [
      "What's your age|what's your age|What is your age|what is your age|How old are you|how old are you",
    ]; //adding the age-question
    let words11 = new RegExp(ageAsk, "i");
    if (words11.test(document.querySelector("#input").value)) {
      // if the input contains some question
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am 1 year old";
        inputRef.value = ""; // clear the input
      }, 1000);
    }
    // else{
    //   getBotMessage.innerText = "Please try asking another question";
    // }

    let serviceAsk = [
      "What services you provide|What are the services you provide|What services does Pruthatek provide|what do you do|services|services you provide",
    ]; //adding the age-question
    let words12 = new RegExp(serviceAsk, "i");
    if (words12.test(document.querySelector("#input").value)) {
      // if the input contains some question
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "The company has a team of technical experts who specialise in Visual Communication Design, UX/UI Designing, Web Development, Mobile Application Development, AI, ML Strategic Marketing.";
        inputRef.value = ""; // clear the input
      }, 1000);
    }
    // else{
    //   getBotMessage.innerText = "Please try asking another question";
    // }
    
    let techAsk = [
      "What technologies you use|What tech do you use|What technologies do you use|What technologies you work with|What technologies do you work with",
    ]; //adding the age-question
    let words13 = new RegExp(techAsk, "i");
    if (words13.test(document.querySelector("#input").value)) {
      // if the input contains some question
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Figma, Adobe illustrator, Blender 3D Development, React Js ,React Native,HTML,CSS, Java Script, Flutter, Tailwind, Three.Js, GSAP. Python-Django, Node Js, Data Analysis, Machine Learning, Artificial Intelligence";
        inputRef.value = ""; // clear the input
      }, 1000);
    }
    // else{
    //   getBotMessage.innerText = "Please try asking another question";
    // }

    let expAsk = [
      "How much experience do you have|How many years of experience do you have|How long have you been doing this work|years of experience",
    ]; //adding the age-question
    let words14 = new RegExp(expAsk, "i");
    if (words14.test(document.querySelector("#input").value)) {
      // if the input contains some question
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Our company has been operating since 3 years.";
        inputRef.value = ""; // clear the input
      }, 1000);
    }
    // else{
    //   getBotMessage.innerText = "Please try asking another question";
    // }

    let chargeAsk = [
      "what are your charges|what are your service charges|how much do you charge|how much do you charge for your services|how much you charge|how much you charge for your services",
    ]; //adding the age-question
    let words15 = new RegExp(chargeAsk, "i");
    if (words15.test(document.querySelector("#input").value)) {
      // if the input contains some question
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "The charges vary from service to service and client requirements. You can contact us for a detailed quote.";
        inputRef.value = ""; // clear the input
      }, 1000);
    }
    // else{
    //   getBotMessage.innerText = "Please try asking another question";
    // }
    
    getHumanMessage.innerText = inputRef.value; // display the message
  };
  return (
    <div className="App fixed right-[14px] lg:top-[150px] md:top-[500px] top-[80px]  z-50  ">
      <div className="wrapper md:w-[500px] w-[340px] p-[30px] bg-[#fafafa] relative rounded-[20px] shadow ">
        <div className="content">
          <div className="flex justify-between">
          <div className="header flex items-center">
            <div className="img">
              <img  src="/img/Pruthateknew.png" alt="" className="w-[60px] h-[60px] rounded-full object-contain border border-amber-500 "/>
            </div>
            <div className="right ml-[10px]">
              <div className="name font-[500] text-[24px] text-amber-500 ">ChatBot</div> 
            </div>
            
          </div>
          <button onClick={()=>setOpen(false)} className="w-[30px] h-[30px] rounded-full bg-white shadow-lg text-black  ">
                X
            </button>
          </div>
          
          <div className="msgcontent h-72 overflow-y-scroll no-scrollbar">
            <div className="">
              <div className=" flex flex-row-reverse gap-x-4 justify-between">
              <div
                  className="human-message  w-fit text-center h-fit p-2 dark:text-black  text-black  bg-amber-400  rounded-lg"
                  id="message2"
                  ref={humanMessage}
                ></div>
              
               
                <div
                  className="bot-message w-fit text-center h-fit p-2 bg-[#EDECED]  dark:text-black text-black  rounded-lg relative top-[100px] mt-5 mb-[20px] "
                  id="message1"
                  ref={botmessage}
                ></div>
               
                
              </div>
            </div>
          </div>
          <div className=" sticky bottom-0 mt-3">
            <div className="btm flex ">
              <div className="input  ">
                <input
                  type="text"
                  id="input"
                  placeholder="Enter your message"
                  ref={input}
                  className="md:w-[300px] w-[100%] md:h-[58px] h-[48px] md:pl-[38px] pl-[5px] dark:text-black text-black rounded-lg outline-none border-none bg-[#EDECED]"
                />
              </div>
              <div className="btn ml-[10px]">
                <button onClick={handleInput} className="md:w-[120px] w-[100px] md:h-[58px] h-[48px] bg-amber-500 rounded-lg text-white font-[700] ">
                Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
