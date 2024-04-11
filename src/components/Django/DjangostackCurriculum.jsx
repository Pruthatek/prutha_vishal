import React from "react";

const DjangostackCurriculum = () => {
  return (
    <>
      {/* DESKTOP DEVICE */}
      <div>
        <h2 className="lg:px-16 md:px-10 px-6 text-black text-[20px] md:text-[25px] lg:text-[31px] not-italic font-semibold leading-[normal] capitalize">
          Curriculum :
        </h2>
      </div>

      <div className="  hidden  md:flex md:flex-row   px-10 md:px-14 lg:px-20 md:gap-x-10 lg:gap-x-20  my-7 md:my-12 ">
        <div className="flex flex-col md:space-y-7 ">
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
              <div className="">
                <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                  Module 1 : Introduction to Django
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Understanding web frameworks
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Introduction to Django and its architecture{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Setting up a Django development environment
              </li>
            </div>
          </div>
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
              <div className="">
                <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                  Module 3 : Django Views and URL Routing{" "}
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Creating views and templates{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                URL routing and mapping views{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Using Django template language{" "}
              </li>
            </div>
          </div>
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
              <div className="">
                <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                  Module 5 : Django Security and Middleware
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Handling security concerns in Django{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Implementing middleware for request/response processing{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Preventing common web vulnerabilities{" "}
              </li>
              {/* <li className="xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          Database Design and Optimization          </li> */}
            </div>
          </div>
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
              <div className="">
                <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                  Module 7 : Django REST Framework
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
              Introduction to Django REST Framework
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Building RESTful APIs with DRF{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Authentication and permissions in APIs{" "}
              </li>
              {/* <li className="xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          Forms and Validation          </li> */}
            </div>
          </div>
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
              <div className="">
                <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                  Module 9 :Testing and Debugging{" "}
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Writing unit tests and test-driven development{" "}
              </li>
              <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Debugging techniques in Django{" "}
              </li>
              <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Handling errors and exceptions{" "}
              </li>
              {/* <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          Performance Monitoring and Optimization           </li> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:space-y-7">
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
              <div className="">
                <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                  Module 2 : Django Models and Databases{" "}
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Creating Django models and database tables{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Querying the database using Django ORM{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Admin panel and database administration{" "}
              </li>
              {/* <li className="xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          DOM Manipulation          </li> */}
            </div>
          </div>
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
              <div className="">
                <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                  Module 4 : Django Forms and User Authentication{" "}
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Building forms in Django{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                User authentication and login/logout functionality{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Customising user models{" "}
              </li>
              {/* <li className="xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          Working with Databases (SQL or NoSQL)          </li> */}
            </div>
          </div>
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
              <div className="">
                <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                  Module 6 : Django Templates and Front-End Integration{" "}
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Advanced Django templates{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Integrating Django with front-end frameworks
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Building responsive and dynamic web interfaces{" "}
              </li>
              {/* <li className="xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          Integrating with Front-End          </li> */}
            </div>
          </div>
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
              <div className="">
                <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                  Module 8 :Django Deployment and Scalability
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
              Preparing Django applications for production
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Deployment strategies (e.g., Heroku, AWS){" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Scaling Django applications for high traffic{" "}
              </li>
              {/* <li className="xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          Testing Back-End Services          </li> */}
            </div>
          </div>
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
              <div className="">
                <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                  Module 10 : Django Project Development
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Students work on a comprehensive Django project{" "}
              </li>

              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Applying concepts learned throughout the course{" "}
              </li>
            </div>
          </div>
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
              <div className="">
                <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                  Module 11 : Version Control and Collaboration{" "}
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Using version control systems (e.g., Git){" "}
              </li>
              <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Collaborative development with teams{" "}
              </li>
              {/* <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          Career Guidance and Next Steps                     </li> */}
            </div>
          </div>

          <div className="flex flex-col  ">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 12 :Career Development and Job Preparation{" "}
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
              Building a portfolio of Django projects{" "}
            </li>
            <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
              Interview preparation and job search strategies{" "}
            </li>
            <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
              Exploring career opportunities in web development{" "}
            </li>
          </div>
        </div>
      </div>

      {/* SMALL DEVICES */}
      <div className="flex md:hidden my-7 px-10 xl:px-20 flex-col space-y-5 ">
        <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
          <div className="flex flex-col  ">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 1 : Introduction to Django
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="   xl:ml-[70px] py-1   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Understanding web frameworks
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Introduction to Django and its architecture
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Setting up a Django development environment
            </li>
          </div>
        </div>
        <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
          <div className="flex flex-col  ">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 2 : Django Models and Databases{" "}
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Creating Django models and database tables{" "}
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Querying the database using Django ORM
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Admin panel and database administration
            </li>
            {/* <li className="  dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
              DOM Manipulation{" "}
            </li> */}
          </div>
        </div>
        <div className="overflow-x-hidden  ">
          <div className="flex flex-col  ">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 3 :Django Views and URL Routing{" "}
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Creating views and templates
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            URL routing and mapping views
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Using Django template language
            </li>
          </div>
        </div>
        <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
          <div className="flex flex-col  ">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 4 : Django Forms and User Authentication
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Building forms in Django
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            User authentication and login/logout functionality
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Customising user models
            </li>
            {/* <li className="  dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
              Working with Databases (SQL or NoSQL){" "}
            </li> */}
          </div>
        </div>
        <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
          <div className="flex flex-col  ">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 5 : Django Security and Middleware
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Handling security concerns in Django
            </li>
            {/* <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
              Relational Databases (e.g., MySQL, PostgreSQL){" "}
            </li> */}
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Implementing middleware for request/response processing
            </li>
            <li className="  dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Preventing common web vulnerabilities
            </li>
          </div>
        </div>
        <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
          <div className="flex flex-col  ">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 6 : Django Templates and Front-End Integration
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Advanced Django templates
            </li>
           
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Integrating Django with front-end frameworks
            </li>
            <li className="  dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Building responsive and dynamic web interfaces
            </li>
          </div>
        </div>
        <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
          <div className="flex flex-col  ">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 7 : Django REST Framework
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Introduction to Django REST Framework
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Building RESTful APIs with DRF
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Authentication and permissions in APIs
            </li>
            {/* <li className="  dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
              Forms and Validation{" "}
            </li> */}
          </div>
        </div>
        <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
          <div className="flex flex-col  ">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 8 : Django Deployment and Scalability
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Preparing Django applications for production
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Deployment strategies (e.g., Heroku, AWS)
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Scaling Django applications for high traffic
            </li>
            {/* <li className="  dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
              Testing Back-End Services{" "}
            </li> */}
          </div>
        </div>
        <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
          <div className="flex flex-col  ">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 9 : Testing and Debugging
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Writing unit tests and test-driven development
            </li>
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Debugging techniques in Django
            </li>
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Handling errors and exceptions
            </li>
            {/* <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
              Performance Monitoring and Optimization{" "}
            </li> */}
          </div>
        </div>
        <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
          <div className="flex flex-col  ">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 10 :Django Project Development
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Students work on a comprehensive Django project
            </li>
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Applying concepts learned throughout the course
            </li>
          </div>
        </div>
        <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
          <div className="flex flex-col  ">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 11 :Version Control and Collaboration
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Using version control systems (e.g., Git)
            </li>
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Collaborative development with teams
            </li>
            {/* <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
              Career Guidance and Next Steps{" "}
            </li> */}
          </div>

          <div className="flex flex-col  py-3">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 12 :Career Development and Job Preparation
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Building a portfolio of Django projects
            </li>
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Interview preparation and job search strategies
            </li>
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Exploring career opportunities in web development
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default DjangostackCurriculum;

// {/* <div className="flex flex-col px-10 justify-center items-center py-7 ">
// <div className="flex flex-row  py-3">
// <div
//       className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0"
//     >
//       <div className="flex flex-col  ">
//         <div className="" >
//           <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
//           Module 1 : Introduction To Web Development
//           </h2>
//         </div>
//       </div>
//       <div className="flex flex-col  items-start pt-3">
//         <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Understading The Basics Of Web Dvelopment
//         </li>
//         <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Front-End vs. Back-End Development          </li>
//         <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Setting Up Development Environment
//         </li>
//       </div>
//     </div>
//     <div
//       className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0"
//     >
//       <div className="flex flex-col  ">
//         <div className="" >
//           <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
//           Module 2 : HTML, CSS, and JavaScript            </h2>
//         </div>
//       </div>
//       <div className="flex flex-col  items-start pt-3">
//         <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         HTML Fundamentals             </li>
//         <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         CSS Styling and Layout                    </li>
//         <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         JavaScript Basics                    </li>
//         <li className="xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         DOM Manipulation          </li>
//       </div>
//     </div>
//      </div>
//      <div className="flex flex-row  py-3">
//      <div
//       className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0"
//     >
//       <div className="flex flex-col  ">
//         <div className="" >
//           <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
//           Module 3 : Front-End Development          </h2>
//         </div>
//       </div>
//       <div className="flex flex-col  items-start pt-3">
//         <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Introduction to Front-End Frameworks (e.g., React, Angular, or Vue.js)            </li>
//         <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Building Interactive User Interfaces                  </li>
//         <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         State Management in Front-End Applications           </li>
//       </div>
//     </div>
//     <div
//       className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0"
//     >
//       <div className="flex flex-col  ">
//         <div className="" >
//           <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
//           Module 4 : Back-End Development            </h2>
//         </div>
//       </div>
//       <div className="flex flex-col  items-start pt-3">
//         <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Introduction to Back-End Technologies (e.g., Node.js, Python, Ruby, or Java)              </li>
//         <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Building RESTful APIs                 </li>
//         <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Handling Authentication and Authorization               </li>
//         <li className="xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Working with Databases (SQL or NoSQL)          </li>
//       </div>
//     </div>
//      </div>
//      <div className="flex flex-row  py-3">
//      <div
//       className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0"
//     >
//       <div className="flex flex-col  ">
//         <div className="" >
//           <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
//           Module 5 : Databases
//                       </h2>
//         </div>
//       </div>
//       <div className="flex flex-col  items-start pt-3">
//         <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Introduction to Databases             </li>
//         <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Relational Databases (e.g., MySQL, PostgreSQL)            </li>
//         <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         NoSQL Databases (e.g., MongoDB)                </li>
//         <li className="xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Database Design and Optimization          </li>
//       </div>
//     </div>
//     <div
//       className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0"
//     >
//       <div className="flex flex-col  ">
//         <div className="" >
//           <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
//           Module 6 :  Server-Side Frameworks (e.g., Express.js)           </h2>
//         </div>
//       </div>
//       <div className="flex flex-col  items-start pt-3">
//         <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Setting Up a Back-End Server                 </li>
//         <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Routing and Middleware
//               </li>
//         <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Error Handling and Logging               </li>
//         <li className="xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Integrating with Front-End          </li>
//       </div>
//     </div>
//      </div>
//      <div className="flex flex-row  py-3">
//      <div
//       className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0"
//     >
//       <div className="flex flex-col  ">
//         <div className="" >
//           <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
//           Module 7 : Front-End Framework Deep Dive
//                       </h2>
//         </div>
//       </div>
//       <div className="flex flex-col  items-start pt-3">
//         <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Advanced Topics in React/Angular/Vue.js           </li>
//         <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         State Management with Redux/NGRX/Vuex                    </li>
//         <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Routing and Navigation               </li>
//         <li className="xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Forms and Validation          </li>
//       </div>
//     </div>
//     <div
//       className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0"
//     >
//       <div className="flex flex-col  ">
//         <div className="" >
//           <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
//           Module 8 : Advanced Back-End Topics
//                       </h2>
//         </div>
//       </div>
//       <div className="flex flex-col  items-start pt-3">
//         <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Authentication and Security Best Practices                  </li>
//         <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         RESTful API Design and Versioning                 </li>
//         <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Handling Asynchronous Operations                 </li>
//         <li className="xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Testing Back-End Services          </li>
//       </div>
//     </div>
//      </div>
//      <div className="flex flex-row  py-3">
//      <div
//       className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0"
//     >
//       <div className="flex flex-col  ">
//         <div className="" >
//           <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
//           Module 9 : Deployment and DevOps          </h2>
//         </div>
//       </div>
//       <div className="flex flex-col  items-start pt-3">
//         <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Preparing Applications for Production            </li>
//         <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Deploying to Cloud Services (e.g., AWS, Heroku, or Azure)                    </li>
//         <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Continuous Integration and Continuous Deployment (CI/CD)             </li>
//         <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Performance Monitoring and Optimization           </li>
//       </div>
//     </div>
//     <div
//       className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0"
//     >
//       <div className="flex flex-col  ">
//         <div className="" >
//           <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
//           Module 10 : Project Work
//           </h2>
//         </div>
//       </div>
//       <div className="flex flex-col  items-start pt-3">
//         <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
//         Students work on a full-stack project of their choice, applying the concepts learned throughout the course.          </li>
//       </div>
//     </div>
//      </div>

// </div> */}
