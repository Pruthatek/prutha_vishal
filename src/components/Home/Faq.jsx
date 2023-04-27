import React from "react";

const Faq = () => {
  const faqData = [
    {
      title: `What sets PruthaTek apart from other development companies?`,
      describe: `PruthaTek stands out from other development companies due to our focus on providing secure and high-quality IT services, combining expertise with proven methods and staying at the forefront of the latest technologies and trends. Our team of seasoned professionals specialise in creating highly functional, customizable, and robust applications, delivering compelling, innovative, and creative solutions to help our clients reach their goals.`,
    },
    {
      title: `What is your project development methodology?`,
      describe: `At PruthaTek, we follow an agile methodology that emphasises collaboration, flexibility, and customer satisfaction. This allows us to adapt to changing requirements and deliver high-quality solutions that meet our clients' needs.`,
    },
  ];
  return (
    <div className="px-20">
      <p className="text-center text-title lg:text-[20px] mt-10 mb-5">
        Quick Queries
      </p>
      <div className="flex flex-col items-center gap-y-5">
        {faqData.map((data, index) => {
          return <p>Hello</p>;
        })}
      </div>
    </div>
  );
};

export default Faq;
