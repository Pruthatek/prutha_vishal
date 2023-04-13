import React from "react";

const HappyClient = () => {
  return (
    <div className="flex flex-col items-center justify-center">

      <div className="text-title font-bold text-white">
        <h3>Happy clients Reviews</h3>
      </div>

      <div className="flex flex-col px-5  xl:flex xl:flex-row lg:flex lg:flex-row ">
      {/* First */}
        <div className="max-w-sm p-6 mr-5 my-2 bg-transparent border rounded-3xl shadow-[#1E1E1E] lg:mr-2">
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.870758 8.71408L5.9122 0.753906H9.40583L6.22176 7.47583C6.95882 7.77065 7.57794 8.30133 8.07914 9.06786C8.60981 9.80492 8.87515 10.6304 8.87515 11.5444C8.87515 12.7826 8.44766 13.8292 7.59268 14.6842C6.7377 15.5392 5.69108 15.9667 4.45284 15.9667C3.21459 15.9667 2.16797 15.5392 1.31299 14.6842C0.458008 13.8292 0.0305176 12.7826 0.0305176 11.5444C0.0305176 10.5715 0.310598 9.62803 0.870758 8.71408ZM11.0421 8.71408L16.0835 0.753906H19.5772L16.3931 7.47583C17.1301 7.77065 17.7493 8.30133 18.2505 9.06786C18.7811 9.80492 19.0465 10.6304 19.0465 11.5444C19.0465 12.7826 18.619 13.8292 17.764 14.6842C16.909 15.5392 15.8624 15.9667 14.6242 15.9667C13.3859 15.9667 12.3393 15.5392 11.4843 14.6842C10.6293 13.8292 10.2018 12.7826 10.2018 11.5444C10.2018 10.5715 10.4819 9.62803 11.0421 8.71408Z"
              fill="white"
            />
          </svg>
          <p className="  mt-3 font-normal text-[#ffff] not-italic text-[0.921rem] leading-[190.3%]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
            ipsum sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit
            amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, adi
            elit, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, adi
            elit, Lorem ipsum dolor sit amet
          </p>
          <div className="flex flex-row items-center pb-2 my-3 ">
            <div className="w-[4.299rem] h-[4.500rem] border-dotted border-2 border-[#0038FF] rounded-full">
              <img
                className="w-[4.299rem] h-[4.299rem] mb-3 rounded-full shadow-lg "
                src="/img/Ellipse 43.png"
                alt="Bonnie "
              />
            </div>
            <div className="flex flex-col">
              <h5 className="mb-1 font-semibold text-[0.983rem]  text-[#ffff] leading-[1.246rem] ml-5">
                Daniel Lane,
              </h5>

              <span className="text-[0.799rem] text-[#ffff] font-normal leading-[1.089rem]  ml-5">
                Developer, Lorem ipsum dolor sit amet,
              </span>
            </div>
          </div>
        </div>
{/* Second */}
        <div className="max-w-sm p-6 mr-5 my-2 bg-[#3a3a3a4d] border  rounded-[1.536rem] shadow-[#1E1E1E] lg:mr-2">
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.870758 8.71408L5.9122 0.753906H9.40583L6.22176 7.47583C6.95882 7.77065 7.57794 8.30133 8.07914 9.06786C8.60981 9.80492 8.87515 10.6304 8.87515 11.5444C8.87515 12.7826 8.44766 13.8292 7.59268 14.6842C6.7377 15.5392 5.69108 15.9667 4.45284 15.9667C3.21459 15.9667 2.16797 15.5392 1.31299 14.6842C0.458008 13.8292 0.0305176 12.7826 0.0305176 11.5444C0.0305176 10.5715 0.310598 9.62803 0.870758 8.71408ZM11.0421 8.71408L16.0835 0.753906H19.5772L16.3931 7.47583C17.1301 7.77065 17.7493 8.30133 18.2505 9.06786C18.7811 9.80492 19.0465 10.6304 19.0465 11.5444C19.0465 12.7826 18.619 13.8292 17.764 14.6842C16.909 15.5392 15.8624 15.9667 14.6242 15.9667C13.3859 15.9667 12.3393 15.5392 11.4843 14.6842C10.6293 13.8292 10.2018 12.7826 10.2018 11.5444C10.2018 10.5715 10.4819 9.62803 11.0421 8.71408Z"
              fill="white"
            />
          </svg>
          <p className="  mt-3 font-normal text-[#ffff] not-italic text-[0.921rem] leading-[190.3%] ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
            ipsum sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit
            amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, adi
            elit, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, adi
            elit, Lorem ipsum dolor sit amet,{" "}
          </p>
          <div className="flex flex-row items-center pb-2 my-3">
            <div className="w-[4.299rem] h-[4.500rem] border-dotted border-2 border-[#0038FF] rounded-full">
              <img
                className="w-[4.299rem] h-[4.299rem] mb-3 rounded-full shadow-lg "
                src="/img/Ellipse 43.png"
                alt="Bonnie "
              />
            </div>
            <div className="flex flex-col">
              <h5 className="mb-1 font-semibold text-[0.983rem]  text-[#ffff] leading-[1.246rem] ml-5">
                Daniel Lane,
              </h5>

              <span className=" text-[0.799rem] text-[#ffff] font-normal leading-[1.089rem]  ml-5">
                Developer, Lorem ipsum dolor sit amet,
              </span>
            </div>
          </div>
        </div>
{/* third */}
        <div className="max-w-sm p-6 mr-5  my-2 bg-[#3a3a3a4d] border  rounded-[1.536rem] shadow-[#1E1E1E]">
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.870758 8.71408L5.9122 0.753906H9.40583L6.22176 7.47583C6.95882 7.77065 7.57794 8.30133 8.07914 9.06786C8.60981 9.80492 8.87515 10.6304 8.87515 11.5444C8.87515 12.7826 8.44766 13.8292 7.59268 14.6842C6.7377 15.5392 5.69108 15.9667 4.45284 15.9667C3.21459 15.9667 2.16797 15.5392 1.31299 14.6842C0.458008 13.8292 0.0305176 12.7826 0.0305176 11.5444C0.0305176 10.5715 0.310598 9.62803 0.870758 8.71408ZM11.0421 8.71408L16.0835 0.753906H19.5772L16.3931 7.47583C17.1301 7.77065 17.7493 8.30133 18.2505 9.06786C18.7811 9.80492 19.0465 10.6304 19.0465 11.5444C19.0465 12.7826 18.619 13.8292 17.764 14.6842C16.909 15.5392 15.8624 15.9667 14.6242 15.9667C13.3859 15.9667 12.3393 15.5392 11.4843 14.6842C10.6293 13.8292 10.2018 12.7826 10.2018 11.5444C10.2018 10.5715 10.4819 9.62803 11.0421 8.71408Z"
              fill="white"
            />
          </svg>

          <p className="  mt-3 font-normal text-[#ffff] not-italic text-[0.921rem] leading-[190.3%]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
            ipsum sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit
            amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, adi
            elit, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, adi
            elit, Lorem ipsum dolor sit amet,{" "}
          </p>
          <div className="flex flex-row items-center pb-2 my-3">
            <div className="w-[4.299rem] h-[4.500rem] border-dotted border-2 border-[#0038FF] rounded-full">
              <img
                className="w-[4.299rem] h-[4.299rem] mb-3 rounded-full shadow-lg "
                src="/img/Ellipse 43.png"
                alt="Bonnie "
              />
            </div>
            <div className="flex flex-col">
              <h5 className="mb-1 font-semibold text-[0.983rem]  text-[#ffff] leading-[1.246rem] ml-5">
                Daniel Lane,
              </h5>

              <span className="  text-[0.799rem] text-[#ffff] font-normal leading-[1.089rem]  ml-5">
                Developer, Lorem ipsum dolor sit amet,
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClient;
