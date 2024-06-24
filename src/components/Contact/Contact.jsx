import React, { useState, useEffect } from "react";
import Client from "./Client";
import { db } from "../../database/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import sb from "../../database/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import "./Calendar.css"

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Contact = (props) => {
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [file, setFile] = useState("");
  const [country, setCountry] = useState("");


  // const [openDate, setOpenDate] = useState(false);
  // const [date, setDate] = useState(new Date());

  // const onChangedate = date =>{
  //   setDate(date)
  //   console.log(date)
  // }

  const [selectedDate, setSelectedDate] = useState(new Date());
  

  function validate() {
    // validation
    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (firstName === "") {
      document.getElementById("firstName").focus();
      return false;
    } else if (!nameRegex.test(firstName)) {
      document.getElementById("firstName").classList.add("border-red-500");
      document
        .getElementById("firstName")
        .classList.remove("dark:border-white", "border-black");
      document.getElementById("firstName_p").classList.remove("hidden");
      return false;
    } else if (lastName === "") {
      document.getElementById("lastName").focus();
      return false;
    } else if (!nameRegex.test(lastName)) {
      document.getElementById("lastName").classList.add("border-red-500");
      document
        .getElementById("lastName")
        .classList.remove("dark:border-white", "border-black");
      document.getElementById("lastName_p").classList.remove("hidden");
      document.getElementById("lastName_p_mobile").classList.remove("hidden");
      return false;
    } else if (email === "") {
      document.getElementById("email").focus();
      return false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("email").classList.add("border-red-500");
      document
        .getElementById("email")
        .classList.remove("dark:border-white", "border-black");
      document.getElementById("email_p").classList.remove("hidden");
      document.getElementById("email_p_mobile").classList.remove("hidden");
      return false;
    } else if (phoneNumber === "") {
      document.getElementById("phoneNumber").focus();
      return false;
    } else if (!phoneRegex.test(phoneNumber)) {
      document.getElementById("phoneNumber").classList.add("border-red-500");
      document
        .getElementById("phoneNumber")
        .classList.remove("dark:border-white", "border-black");
      document.getElementById("phoneNumber_p").classList.remove("hidden");
      document
        .getElementById("phoneNumber_p_mobile")
        .classList.remove("hidden");
      return false;
    } else if (companyName === "") {
      document.getElementById("companyName").focus();
      document.getElementById("companyName_p").classList.remove("hidden");
      document
        .getElementById("companyName_p_mobile")
        .classList.remove("hidden");
      return false;
    } else if (subject === "") {
      document.getElementById("subject").focus();
      document.getElementById("subject_p").classList.remove("hidden");
      document.getElementById("subject_p_mobile").classList.remove("hidden");
      return false;
    } else if (message === "") {
      document.getElementById("message").focus();
      document.getElementById("msg_p").classList.remove("hidden");
      document.getElementById("msg_p_mobile").classList.remove("hidden");
      return false;
    } else if (country === "") {
      document.getElementById("country").focus();
      document.getElementById("country_p").classList.remove("hidden");
      document.getElementById("country_p_mobile").classList.remove("hidden");
      return false;
    }

    return true; // If no errors, return true for successful validation
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      companyName !== "" &&
      subject !== "" &&
      message !== "" &&
      phoneNumber !== "" &&
      file !== "" &&
      country !== ""
    ) {
      let gifContainer = document.getElementById("GIF");
      gifContainer.classList.remove("opacity-0");
      gifContainer.classList.remove("scale-0");
      gifContainer.classList.add("opacity-100");
      gifContainer.classList.add("scale-100");
      document.getElementById("form_desktop").classList.add("opacity-0");
      document.getElementById("form_desktop").classList.add("scale-0");
      document.getElementById("form_mobile").classList.add("opacity-0");
      document.getElementById("form_mobile").classList.add("scale-0");
      document.getElementById("schedule_p").classList.add("opacity-0");
      document.getElementById("schedule_p").classList.add("scale-0");
      document.getElementById("firstName_p").classList.add("hidden");
      document.getElementById("firstName").classList.remove("border-red-500");
      document
        .getElementById("firstName")
        .classList.add("dark:border-white", "border-black");
      document.getElementById("lastName_p").classList.add("hidden");
      document.getElementById("lastName").classList.remove("border-red-500");
      document
        .getElementById("lastName")
        .classList.add("dark:border-white", "border-black");
      document.getElementById("email_p").classList.add("hidden");
      document.getElementById("email").classList.remove("border-red-500");
      document
        .getElementById("email")
        .classList.add("dark:border-white", "border-black");
      document.getElementById("companyName_p").classList.add("hidden");
      document.getElementById("companyName").classList.remove("border-red-500");
      document
        .getElementById("companyName")
        .classList.add("dark:border-white", "border-black");
      document.getElementById("subject_p").classList.add("hidden");
      document.getElementById("subject").classList.remove("border-red-500");
      document
        .getElementById("subject")
        .classList.add("dark:border-white", "border-black");
      document.getElementById("message_p").classList.add("hidden");
      document.getElementById("message").classList.remove("border-red-500");
      document
        .getElementById("message")
        .classList.add("dark:border-white", "border-black");
      document.getElementById("phoneNumber_p").classList.add("hidden");
      document.getElementById("phoneNumber").classList.remove("border-red-500");
      document
        .getElementById("phoneNumber")
        .classList.add("dark:border-white", "border-black");
      document.getElementById("file_p").classList.add("hidden");
      document.getElementById("country_p").classList.add("hidden");
      document.getElementById("country").classList.remove("border-red-500");
      document
        .getElementById("country")
        .classList.add("dark:border-white", "border-black");
        setTimeout(() => {
        gifContainer.classList.remove("opacity-100");
        gifContainer.classList.remove("scale-100");
        gifContainer.classList.add("opacity-0");
        gifContainer.classList.add("scale-0");
        document.getElementById("form").classList.add("opacity-100");
        document.getElementById("form").classList.add("scale-100");
        document.getElementById("schedule_p").classList.add("opacity-100");
        document.getElementById("schedule_p").classList.add("scale-100");
        document.getElementById("form_mobile").classList.add("opacity-100");
        document.getElementById("form_mobile").classList.add("scale-100");
      }, 3000);
    }

    if (!validate()) {
      return;
    }
    const storageRef = ref(sb, `/files/${file.name}`);

    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);

        addDoc(collection(db, "contact"), {
          firstName: firstName,
          lastName: lastName,
          email: email,
          companyName: companyName,
          subject: subject,
          message: message,
          phoneNumber: phoneNumber,
          file: url,
          country: country,
        })
          .then(() => {
            setFirstName("");
            setLastName("");
            setEmail("");
            setCompanyName("");
            setSubject("");
            setMessage("");
            setPhoneNumber("");
            setFile("");
            setCountry("");
            document.getElementById("file").value = "";
          })
          .catch((error) => {
            console.log(error.message);
          });
      });
    });
  };

  return (
    <>
      <div className="px-10 lg:px-20 pt-20 relative">
        {/* Hero Section */}
        <div className="flex flex-col sm:flex-row md:flex-row md:space-x-10 sm:py-4 md:py-6 lg:flex-row px-5 xl:px-10 lg:items-end justify-between">
          <div className="w-[40%]">
            <div
              className="circle hidden xl:block top-10"
              style={{
                background: "linear-gradient(130.35deg, #FC466B33, #3F5EFB33",
              }}
            />
            <div className="w-full hidden lg:block">
              <img src="/img/i12.png" className="" alt="" />
            </div>
          </div>
          <div className="">
            <div
              className="circle hidden xl:block right-0"
              style={{
                background: "linear-gradient(130.35deg, #FC466B33, #3F5EFB33",
              }}
            />
            <div className="lg:mt-14">
              <h1 className="text-title xl:text-[30px] font-semibold">
                Have an Idea and Want to
              </h1>
              <div className=" xl:ml-32  ">
                <span className="textnew text-title max-sm:text-[15px] xl:text-[35px]  dark:text-white    font-semibold">
                  Custom Software or web?
                </span>
              </div>
            </div>
            <p className="text-gray-500 dark:text-[#fff] font-[Euclid Circular A] max-sm:mt-3 tracking-[0.025rem] max-sm:text-[12px] xl:mt-1 lg:w-[661.74px] lg:text-[18px] text-center xl:py-2 ">
              Then Your are at right place, Pruthatek have best Experts in their{" "}
              <br /> fields so they can help you to execute your idea in
              realLife.
            </p>

            <div className=" md:px-6 my-2 relative ">
              {/* svg subtract  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="22"
                viewBox="0 0 41 22"
                fill="none"
                className=" absolute  inset-x-0 -top-[5.5%] max-sm:left-[47%] md:-top-[6.9%] xl:-top-[7.4%] left-[48%]   "
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M40.6856 21.1468C40.7147 21.1123 40.7147 21.0618 40.6856 21.0272L24.4514 1.77663C22.4537 -0.592209 18.8045 -0.59221 16.8068 1.77663L0.57263 21.0272C0.543498 21.0618 0.543498 21.1123 0.57263 21.1468C0.590254 21.1677 0.616201 21.1798 0.643539 21.1798H40.6147C40.642 21.1798 40.668 21.1677 40.6856 21.1468Z"
                  fill="url(#paint0_linear_2190_62292)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2190_62292"
                    x1="-1.50448"
                    y1="-0.603412"
                    x2="19.738"
                    y2="33.6103"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EF32D9" />
                    <stop offset="1" stop-color="#3F5EFB" />
                  </linearGradient>
                </defs>
              </svg>
              {/*=======================  Schedule Meeting======================*/}

              <div className="  shadow-[0px_4px_14px_0px_rgba(0,0,0,0.25)] dark:shadow-[#000000] dark:shadow-lg bg-gradient-to-r from-[#F65E83] to-[#6B82FB]  p-[1.5px]  mt-10 w-[100%] md:w-[100%] xl:w-[85%] rounded-lg mx-auto ">
                <div className="rounded-lg p-[3px] bg-[#ffffff] dark:bg-[#101010] ">
                  <div className="rounded-md p-2 flex flex-col gap-y-10 xl:ml-4 ">
                    <div className="flex flex-col xl:flex xl:flex-row ">
                      <div className="flex items-center justify-center">
                        <img
                          src="/img/Ellipse124.png"
                          className="w-[6rem] h-[6rem] max-sm:mt-2 md:w-[4rem] md:h-[4rem] xl:w-[8rem] xl:h-[8rem]  rounded-full"
                          alt="Designoverview"
                        />
                      </div>

                      <div className="w-[200px] md:w-[300px] ">
                        <div className=" xl:-mr-4 px-2 md:px-6 xl:px-3 flex flex-col ">
                          <p className="xl:px-4 xl:ml-0 px-2 md:px-0 md:ml-12 text-black dark:text-white xl:text-[15px] text-[13px] mt-5 md:text-[11px] md:leading-4  xl:leading-7 ">
                            Would You like to know more about our Custom Web
                            AppDevelopment Services?
                          </p>

                          <a href="#contactForm">
                            <div className="md:my-2 xl:my-5 my-3 ml- xl:ml-[2.2rem]  md:ml-[2.4rem]">
                              <button
                                type="button"
                                className="text-[14px] tracking-[2%] leading-[17.75px] text-white dark:text-white w-[200px] h-[40px]  md:w-[221px] md:h-[40px] rounded-[10px] border-[#00000] bg-transparent bg-clip bg-gradient-to-r from-[#EF32D9] to-[#3F5EFB]"
                              >
                                Schedule Meeting
                              </button>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Client Section */}
        <Client />
        <div id="contactForm" />
        {/* form section */}
        <div className="lg:px-20 lg:py-10 py-4 lg:mt-10 z-30 relative">
          <div
            className={
              "py-6 rounded-xl lg:pb-20 " +
              (props.theme === "light" ? "glassmorphism-3" : "glassmorphism")
            }
          >
            {/* title */}
            <div className="xl:py-10 xl:px-10">
              <h2
                id="schedule_p"
                className="xl:text-[22px] md:text-[21px] text-[15px] font-bold flex justify-center items-center"
              >
                Schedule A Meeting With A Specialist.
              </h2>
            </div>
            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* desktop */}
              <div
                id="form_desktop"
                className="lg:flex-row xl:pl-36 md:pl-20 md:pt-5 hidden md:flex xl:flex"
              >
                {/* left */}
                <div className="flex flex-col lg:gap-y-10 md:gap-y-5 gap-y-6 sm:gap-y-6 lg:w-[50%]">
                  <div className="w-[100%] relative">
                    <input
                      type="text"
                      id="firstName"
                      className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"
                      placeholder=" "
                      name="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      tabIndex={1}
                    />
                    <label
                      htmlFor="First Name"
                      className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      First Name*{" "}
                    </label>
                    <p
                      id="firstName_p"
                      className="text-red-500 mt-2 text-[15px] hidden"
                    >
                      *Please Enter First Name
                    </p>
                  </div>
                  <div className="w-[100%] relative">
                    <input
                      type="text"
                      id="email"
                      className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"
                      placeholder=" "
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      tabIndex={3}
                    />
                    <label
                      htmlFor="Email"
                      className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      Email*{" "}
                    </label>
                    <p
                      id="email_p"
                      className="text-red-500 mt-2 text-[15px] hidden"
                    >
                      *Please Enter Email
                    </p>
                  </div>
                  <div className="w-[100%] relative">
                    <input
                      type="text"
                      id="companyName"
                      className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={(e) => setCompanyName(e.target.value)}
                      name="companyName"
                      value={companyName}
                      tabIndex={5}
                    />
                    <label
                      htmlFor="Company Name"
                      className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      Company Name*{" "}
                    </label>
                    <p
                      id="companyName_p"
                      className="text-red-500 mt-2 text-[15px] hidden"
                    >
                      *Please Enter Company Name
                    </p>
                  </div>
                  <div className="w-[100%] relative">
                    <input
                      type="text"
                      id="subject"
                      className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={(e) => setSubject(e.target.value)}
                      name="subject"
                      value={subject}
                      tabIndex={7}
                    />
                    <label
                      htmlFor="Subject"
                      className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      Subject*{" "}
                    </label>
                    <p
                      id="subject_p"
                      className="text-red-500 mt-2 text-[15px] hidden"
                    >
                      *Please Enter Subject
                    </p>
                  </div>
                  <div className="w-[100%] relative">
                    <input
                      type="text"
                      id="message"
                      className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={(e) => setMessage(e.target.value)}
                      name="message"
                      value={message}
                      tabIndex={9}
                    />
                    <label
                      htmlFor="Message"
                      className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      Message*{" "}
                    </label>
                    <p
                      id="msg_p"
                      className="text-red-500 mt-2 text-[15px] hidden"
                    >
                      *Please Enter Message
                    </p>
                  </div>
                </div>
                {/* right */}
                <div className="flex flex-col md:pl-20 lg:pl-0 sm:gap-y-6 md:gap-y-5 lg:gap-y-10 gap-y-6 lg:w-[50%]">
                  <div className="w-[100%] relative">
                    <input
                      type="text"
                      id="lastName"
                      className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={(e) => setLastName(e.target.value)}
                      name="lastName"
                      value={lastName}
                      tabIndex={2}
                    />
                    <label
                      htmlFor="Last Name"
                      className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      Last Name*{" "}
                    </label>
                    <p
                      id="lastName_p"
                      className="text-red-500 mt-2 text-[15px] hidden"
                    >
                      *Please Enter Last Name
                    </p>
                  </div>
                  <div className="w-[100%] relative">
                    <input
                      type="text"
                      id="phoneNumber"
                      className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      name="phoneNumber"
                      value={phoneNumber}
                      tabIndex={4}
                    />
                    <label
                      htmlFor="PhoneNo"
                      className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      Phone Number*{" "}
                    </label>
                    <p
                      id="phoneNumber_p"
                      className="text-red-500 mt-2 text-[15px] hidden"
                    >
                      *Please Enter Phone Number
                    </p>
                  </div>
                  <div className="flex flex-col md:pt-3 xl:pt-0 gap-x-8">
                    <input
                      className="file:bg-[#0000001a] dark:file:bg-[#B3B3B31A] file:text-black dark:file:text-white file:border-none file:mr-2 file:px-6 file:py-2 file:rounded-full file:cursor-pointer "
                      type="file"
                      onChange={(e) => {
                        if (e.target.files[0].size > 209752) {
                          document
                            .getElementById("file_p")
                            .classList.remove("hidden");
                          e.target.value = "";
                        } else {
                          setFile(e.target.files[0]);
                        }
                      }}
                      accept=""
                      id="file"
                      tabIndex={6}
                    />
                    <p
                      id="file_p"
                      className="text-red-500 mt-2 text-[15px] hidden"
                    >
                      *File is too big(Must be less than or equal to 2MB).
                    </p>
                  </div>
                  <div className="w-[100%] relative">
                    <input
                      type="text"
                      id="country"
                      className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={(e) => setCountry(e.target.value)}
                      name="country"
                      value={country}
                      tabIndex={8}
                    />
                    <label
                      htmlFor="Country"
                      className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      Country*{" "}
                    </label>
                    <p
                      id="country_p"
                      className="text-red-500 mt-2 text-[15px] hidden"
                    >
                      *Please Enter Country
                    </p>
                  </div>

                  {/* <div>
                    <div onClick={()=>setOpenDate(!openDate)} className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0 cursor-pointer">dd-mm-yy</div>
                  </div>
                  {openDate && <Calendar className="w-[200px]" onChange={onChangedate} value={date} />} */}

                   <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} dateFormat="dd/MM/yyyy" className="bg-transparent border-b dark:border-b-white border-b-black lg:w-[70%] p-2"/>
                  

                  {/* <div>
                    <input type="date"  className="peer block  lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"/>
                  </div> */}

                  <div>
                    <input type="time"  className="peer block lg:w-[70%]  dark:text-white text-black border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"/>
                  </div>
                  
                  <div className="flex flex-row items-center">
                    <div className="bg-gradient-to-r  from-[#F05225] to-[#EEA820] rounded-full w-[7rem] px-5 text-center py-2 flex flex-row items-center justify-center gap-x-5 cursor-pointer">
                      <button
                        type="submit"
                        className="flex flex-row space-x-5"
                        // onClick={validate}
                      >
                        <p className="text-white">Send</p>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.7554 12.5C22.7554 12.8788 22.5414 13.225 22.2026 13.3944L4.20259 22.3944C3.85754 22.567 3.44403 22.5256 3.13996 22.2882C2.83589 22.0508 2.6955 21.6597 2.77918 21.2831L4.73098 12.5L2.77918 3.71694C2.6955 3.34035 2.83589 2.94921 3.13996 2.7118C3.44403 2.47439 3.85754 2.43306 4.20259 2.60558L22.2026 11.6056C22.5414 11.775 22.7554 12.1212 22.7554 12.5ZM6.55754 13.5L5.18732 19.666L17.5193 13.5L6.55754 13.5ZM17.5193 11.5L5.18732 5.33402L6.55754 11.5L17.5193 11.5Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* small */}
              <div id="form_mobile" className="pl-5 md:hidden">
                <div className="flex flex-col  space-y-4 py-4  ">
                  <div className="w-[50%] relative">
                    <input
                      type="text"
                      id="firstName"
                      className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"
                      placeholder=" "
                      name="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label
                      htmlFor="First Name"
                      className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      First Name*{" "}
                    </label>
                    <p
                      id="firstName_p_mobile"
                      className="text-red-500 mt-2 text-[15px] hidden"
                    >
                      *Please Enter First Name
                    </p>
                  </div>
                  <div className="w-[50%] relative">
                    <input
                      type="text"
                      id="lastName"
                      className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={(e) => setLastName(e.target.value)}
                      name="lastName"
                      value={lastName}
                    />
                    <label
                      htmlFor="Last Name"
                      className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      Last Name*{" "}
                    </label>
                    <p
                      id="lastName_p_mobile"
                      className="text-red-500 mt-2 text-[15px] hidden"
                    >
                      *Please Enter Last Name
                    </p>
                  </div>
                  <div className="w-[50%] relative">
                    <input
                      type="text"
                      id="email"
                      className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"
                      placeholder=" "
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label
                      htmlFor="Email"
                      className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      Email*{" "}
                    </label>
                    <p
                      id="email_p_mobile"
                      className="text-red-500 mt-2 text-[15px] hidden"
                    >
                      *Please Enter Email
                    </p>
                  </div>
                  <div className="w-[50%] relative">
                    <input
                      type="text"
                      id="phoneNumber"
                      className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      name="phoneNumber"
                      value={phoneNumber}
                    />
                    <label
                      htmlFor="PhoneNo"
                      className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      Phone Number*{" "}
                    </label>
                    <p
                      id="phoneNumber_p_mobile"
                      className="text-red-500 mt-2 text-[15px] hidden"
                    >
                      *Please Enter Phone Number
                    </p>
                  </div>
                  <div className="w-[50%] relative">
                    <input
                      type="text"
                      id="companyName"
                      className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={(e) => setCompanyName(e.target.value)}
                      name="companyName"
                      value={companyName}
                    />
                    <label
                      htmlFor="Company Name"
                      className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      Company Name*{" "}
                    </label>
                    <p
                      id="companyName_p_mobile"
                      className="text-red-500 mt-2 text-[15px] hidden"
                    >
                      *Please Enter Company Name
                    </p>
                  </div>
                  <div className="w-[50%] relative">
                    <input
                      type="text"
                      id="subject"
                      className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={(e) => setSubject(e.target.value)}
                      name="subject"
                      value={subject}
                    />
                    <label
                      htmlFor="Subject"
                      className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      Subject*{" "}
                    </label>
                    <p
                      id="subject_p_mobile"
                      className="text-red-500 mt-2 text-[15px] hidden"
                    >
                      *Please Enter Subject
                    </p>
                  </div>
                  <div className="w-[50%] relative">
                    <input
                      type="text"
                      id="message"
                      className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={(e) => setMessage(e.target.value)}
                      name="message"
                      value={message}
                    />
                    <label
                      htmlFor="Message"
                      className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      Message*{" "}
                    </label>
                    <p
                      id="message_p_mobile"
                      className="text-red-500 mt-2 text-[15px] hidden"
                    >
                      *Please Enter Message
                    </p>
                  </div>
                  <div className="w-[50%] relative">
                    <input
                      type="text"
                      id="country"
                      className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={(e) => setCountry(e.target.value)}
                      name="country"
                      value={country}
                    />
                    <label
                      htmlFor="Country"
                      className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      Country*{" "}
                    </label>
                    <p
                      id="country_p_mobile"
                      className="text-red-500 mt-2 text-[15px] hidden"
                    >
                      *Please Enter Country
                    </p>
                  </div>
                  <div className="flex flex-row py-5  ">
                    <input
                      className="file:bg-[#0000001a] dark:file:bg-[#B3B3B31A] file:text-black dark:file:text-white file:border-none file:mr-2 file:px-6 file:py-2 file:rounded-full file:cursor-pointer "
                      type="file"
                      onChange={(e) => {
                        if (e.target.files[0].size > 2097152) {
                          alert("File size is too big");
                          e.target.value = "";
                        } else {
                          setFile(e.target.files[0]);
                        }
                      }}
                      accept=""
                      id="file"
                    />
                    <p
                      id="file_p_mobile"
                      className="text-red-500 mt-2 text-[15px] hidden"
                    >
                      *File is too big(Must be less than or equal to 5MB).
                    </p>
                  </div>

                  {/* <div>
                    <div onClick={()=>setOpenDate(!openDate)} className="peer block w-max lg:w-[70%] border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm
                     focus:border-black dark:focus:border-white focus:outline-none focus:ring-0 cursor-pointer">dd-mm-yy</div>
                  </div>
                  {openDate && <Calendar onChange={onChangedate} value={date} />} */}
                  <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} dateFormat="dd/MM/yyyy" className="bg-transparent border-b dark:border-b-white border-b-black  p-2"/>

                  <div>
                    <input type="time"  className="peer block lg:w-[70%] dark:text-white text-black border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0"/>
                  </div>
                  <div className=" px-10 ">
                    <div className="bg-gradient-to-r from-[#F05225] to-[#EEA820] rounded-full w-[7rem] px-16 text-center py-2 flex flex-row items-center justify-center gap-x-5 cursor-pointer ">
                      <button
                        type="submit"
                        className="flex flex-row space-x-3"
                        // onSubmit={handleSubmit}
                      >
                        <p className="text-white">Send</p>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.7554 12.5C22.7554 12.8788 22.5414 13.225 22.2026 13.3944L4.20259 22.3944C3.85754 22.567 3.44403 22.5256 3.13996 22.2882C2.83589 22.0508 2.6955 21.6597 2.77918 21.2831L4.73098 12.5L2.77918 3.71694C2.6955 3.34035 2.83589 2.94921 3.13996 2.7118C3.44403 2.47439 3.85754 2.43306 4.20259 2.60558L22.2026 11.6056C22.5414 11.775 22.7554 12.1212 22.7554 12.5ZM6.55754 13.5L5.18732 19.666L17.5193 13.5L6.55754 13.5ZM17.5193 11.5L5.18732 5.33402L6.55754 11.5L17.5193 11.5Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                {/* right */}
                {/* <div className="flex flex-col md:pl-20 lg:pl-0 sm:gap-y-6 md:gap-y-5 lg:gap-y-10 gap-y-6 lg:w-[50%]">
                </div> */}
              </div>
            </form>

            {/* submit animation */}
            <div
              className="glassmorphism-2 scale-0 opacity-0 top-0 left-0 absolute w-full h-full flex items-center transition-all duration-300 rounded-lg z-40"
              id="GIF"
            >
              <div
                className="w-96 h-96 mx-auto object-contain bg-blend-screen overflow-visible rounded-lg"
                style={{
                  backgroundImage: "url(/img/contact-1.gif)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>

          {/* Square BG */}
          <div className="contact-square-1 absolute top-[0%] right-[0%] hidden xl:block z-[41]" />
          <div className="contact-square-2 absolute -bottom-[3%] left-[0%] hidden xl:block -z-20" />
        </div>
        {/* bg Circle */}
        <div
          className="circle hidden lg:block top-[40%] left-0"
          style={{
            background: "linear-gradient(130.35deg, #FC466B33, #3F5EFB33",
          }}
        />
      </div>
    </>
  );
};

export default Contact;
