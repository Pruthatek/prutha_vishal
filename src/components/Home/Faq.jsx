import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Faq = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const faqData = [
    {
      title: `What sets PruthaTek apart from other development companies?`,
      describe: `PruthaTek stands out from other development companies due to our focus on providing secure and high-quality IT services, combining expertise with proven methods and staying at the forefront of the latest technologies and trends. Our team of seasoned professionals specialise in creating highly functional, customizable, and robust applications, delivering compelling, innovative, and creative solutions to help our clients reach their goals.`,
      style: `bg-gradient-to-r from-[#F05225] to-[#EEA820]`,
    },
    {
      title: `What is your project development methodology?`,
      describe: `At PruthaTek, we follow an agile methodology that emphasises collaboration, flexibility, and customer satisfaction. This allows us to adapt to changing requirements and deliver high-quality solutions that meet our clients' needs.`,
      style: `bg-gradient-to-r from-[#FF63F9] via-[#E41EAD] to-[#FF008D]`,
    },
    {
      title: `Do I need to have technical knowledge to implement AI and ML in my business?`,
      describe: `While technical knowledge can be helpful, it is not necessary to implement AI and ML in your business. You can work with an experienced AI and ML development team to help you develop and implement solutions tailored to your specific needs.`,
      style: `bg-gradient-to-r from-[#3D7800] to-[#7FBB42]`,
    },
    {
      title: `What kind of projects do you usually work on?`,
      describe: `We work on a wide range of projects, including web and mobile app development, eCommerce solutions, UI/UX design, and software testing services.`,
      style: `bg-gradient-to-r from-[#0038FF] to-[#9747FF]`,
    },
    {
      title: `How can AI and ML benefit my business?`,
      describe: `AI and ML can benefit your business by automating repetitive tasks, improving accuracy and efficiency, reducing costs, enabling data-driven decision making, and enhancing customer experiences.`,
      style: `bg-gradient-to-r from-[#0DA1DA] to-[#5DB98E]`,
    },
    {
      title: `What is the difference between AI and ML?`,
      describe: `AI stands for Artificial Intelligence, while ML stands for Machine Learning. AI refers to the creation of machines or software that can perform tasks requiring human-like intelligence, such as understanding natural language or recognizing objects in images. ML is a subset of AI that uses algorithms to analyse data and learn from it to improve its performance over time.`,
      style: `bg-gradient-to-r from-[#E10E8C] to-[#520C43]`,
    },
  ];

  return (
    <div className="lg:px-64 px-10 relative">
      <p className="text-center text-title lg:text-[22px] font-bold mt-10 mb-5 text-[#B3B3B3] dark:text-[#ffffff]">
        Quick Queries
      </p>
      <div className="flex flex-col items-center gap-y-5">
        {faqData.map((data, index) => {
          return (
            <FaqItem
              key={index}
              open={index === open}
              title={data.title}
              desc={data.describe}
              style={data.style}
              toggle={() => toggle(index)}
              theme={props.theme}
            />
          );
        })}
      </div>
      <div
        className="circle hidden lg:block bottom-[0%] right-0 z-20"
        style={{
          background:
            props.theme === "light"
              ? "linear-gradient(130.35deg, rgba(252, 70, 107, 0.30), rgba(63, 94, 251, 0.30)"
              : "linear-gradient(130.35deg, rgba(252, 70, 107, 0.10), rgba(63, 94, 251, 0.10)",
        }}
      />
      <div
        className="circle hidden lg:block top-[0%] left-0 z-20"
        style={{
          background:
            props.theme === "light"
              ? "linear-gradient(130.35deg, rgba(63, 94, 251, 0.30), rgba(63, 94, 251, 0.30)"
              : "linear-gradient(130.35deg, rgba(63, 94, 251, 0.10), rgba(63, 94, 251, 0.10)",
        }}
      />
    </div>
  );
};

export default Faq;

const FaqItem = ({ open, toggle, title, desc, style, theme }) => {
  return (
    <div className="pt-[10px] z-30">
      <div
        className={
          "p-[2px] cursor-pointer rounded-lg " +
          (theme === "light" ? "glassmorphism-3" : "glassmorphism")
        }
        onClick={toggle}
      >
        <div className="px-[20px] py-[10px] rounded-md">
          <div className="flex justify-between items-center">
            <p className="text-[14px] lg:text-[18px] font-[500]">{title}</p>
            <div
              className={
                "text-subtitle lg:text-title rounded-full p-1 " + style
              }
            >
              {open ? (
                <AiOutlineMinus color="white" />
              ) : (
                <AiOutlinePlus color="white" />
              )}
            </div>
          </div>
          <Collapse isOpened={open}>
            <div className="mt-5 text-[12px] lg:text-[14px]">{desc}</div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};
