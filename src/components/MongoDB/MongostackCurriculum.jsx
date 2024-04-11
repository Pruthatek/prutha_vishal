import React from "react";

const FullstackCurriculum = () => {
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
                  Module 1 :Introduction to MongoDB
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Understanding NoSQL databases
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Overview of MongoDB and its advantages{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Installation and setup of MongoDB
              </li>
            </div>
          </div>
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
              <div className="">
                <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                  Module 3 : CRUD Operations in MongoDB
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Inserting and querying documents{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Updating and deleting documents{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Bulk operations and data import/export{" "}
              </li>
            </div>
          </div>
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
              <div className="">
                <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                  Module 5 : Aggregation Framework
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Pipeline stages and operators{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Aggregation pipelines for data transformation{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Complex data analysis with aggregation{" "}
              </li>
              {/* <li className="xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          Database Design and Optimization          </li> */}
            </div>
          </div>
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
              <div className="">
                <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                  Module 7 : Security and Authentication
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Authentication and authorization in MongoDB{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Role-based access control{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Best practices for securing MongoDB{" "}
              </li>
              {/* <li className="xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          Forms and Validation          </li> */}
            </div>
          </div>
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
              <div className="">
                <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                  Module 9 : Real-World Applications{" "}
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Designing and implementing a MongoDB-based project{" "}
              </li>
              <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Hands-on development of a practical application{" "}
              </li>
              {/* <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          Continuous Integration and Continuous Deployment (CI/CD)             </li>
          <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          Performance Monitoring and Optimization           </li> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:space-y-7">
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
              <div className="">
                <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                  Module 2 : MongoDB Data Modeling{" "}
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Document-based data model{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Creating and managing collections{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Designing schema-free documents{" "}
              </li>
              {/* <li className="xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          DOM Manipulation          </li> */}
            </div>
          </div>
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
              <div className="">
                <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                  Module 4 : Indexing and Query Optimization{" "}
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Index types and their usage{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Query optimization techniques{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Profiling and analyzing queries{" "}
              </li>
              {/* <li className="xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          Working with Databases (SQL or NoSQL)          </li> */}
            </div>
          </div>
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
              <div className="">
                <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                  Module 6 : Data Replication and Sharding{" "}
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Replica sets and high availability{" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Sharding concepts and architecture
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Configuring and managing replica sets and sharded clusters{" "}
              </li>
              {/* <li className="xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          Integrating with Front-End          </li> */}
            </div>
          </div>
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
              <div className="">
                <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                  Module 8 : MongoDB with Programming Languages
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Integrating MongoDB with popular programming languages (e.g.,
                Node.js, Python){" "}
              </li>
              <li className=" xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Building CRUD applications with MongoDB{" "}
              </li>
              
            </div>
          </div>
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
              <div className="">
                <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
                  Module 10 : MongoDB Best Practices and Performance Tuning
                </h2>
              </div>
            </div>
            <div className="flex flex-col  items-start pt-3">
              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
                Scaling MongoDB for high traffic{" "}
              </li>
              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
              Backup and recovery strategies
              </li>
              <li className="   xl:ml-[70px] py-1 lg:px-10 md:px-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
              Monitoring and performance optimization
              </li>
            </div>
          </div>
          <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
            <div className="flex flex-col  ">
          <div className="" >
            <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
            Module 11 : Final Projects and Presentations         </h2>
          </div>
        </div>
            <div className="flex flex-col  items-start pt-3">
          <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          Students work on MongoDB projects of their choice                     </li>
          <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          Presentation and review of projects                             </li>
          {/* <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          Career Guidance and Next Steps                     </li> */}
        </div>

        <div className="flex flex-col  ">
          <div className="" >
            <h2 className="  flex flex-row  text-[#545353] text-[24px] not-italic font-semibold leading-[normal] capitalize   ">
            Module 12 : Career Development and Job Preparation        </h2>
          </div>
        </div>
        <div className="flex flex-col  items-start pt-3">
          <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          Preparing for MongoDB-related job interviews                     </li>
          <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          Exploring career opportunities in database management                           </li>
          {/* <li className="   xl:ml-[70px] py-1 lg:px-7 pl-5  dark:text-white lg:text-justify text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
          Career Guidance and Next Steps                     </li> */}
        </div>
          </div>
        </div>
      </div>

      {/* SMALL DEVICES */}
      <div className="flex md:hidden my-7 px-10 xl:px-20 flex-col space-y-5 ">
        <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
          <div className="flex flex-col  ">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 1 : Introduction to MongoDB
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="   xl:ml-[70px] py-1   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Understanding NoSQL databases
            </li>
           
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Overview of MongoDB and its advantages
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Installation and setup of MongoDB
            </li>
          </div>
        </div>
        <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
          <div className="flex flex-col  ">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 2 : MongoDB Data Modeling{" "}
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Document-based data model
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Creating and managing collections
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Designing schema-free documents
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
                Module 3 : CRUD Operations in MongoDB
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Inserting and querying documents
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Updating and deleting documents
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Bulk operations and data import/export
            </li>
          </div>
        </div>
        <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
          <div className="flex flex-col  ">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 4 : Indexing and Query Optimization
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Index types and their usage
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Query optimization techniques
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Profiling and analyzing queries
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
                Module 5 : Aggregation Framework
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Pipeline stages and operators
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
              Relational Databases (e.g., MySQL, PostgreSQL){" "}
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Aggregation pipelines for data transformation
            </li>
            <li className="  dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Complex data analysis with aggregation
            </li>
          </div>
        </div>
        <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
          <div className="flex flex-col  ">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 6 :Data Replication and Sharding
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Replica sets and high availability
            </li>
            {/* <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
              Routing and Middleware
            </li> */}
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Sharding concepts and architecture
            </li>
            <li className="  dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Configuring and managing replica sets and sharded clusters
            </li>
          </div>
        </div>
        <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
          <div className="flex flex-col  ">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 7 : Security and Authentication
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Authentication and authorization in MongoDB
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Role-based access control
            </li>
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Best practices for securing MongoDB
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
                Module 8 : MongoDB with Programming Languages
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Integrating MongoDB with popular programming languages (e.g., Node.js, Python)
            </li>
            
            <li className="   dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Building CRUD applications with MongoDB
            </li>
           
          </div>
        </div>
        <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
          <div className="flex flex-col  ">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 9 : Real-World Applications
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Designing and implementing a MongoDB-based project
            </li>
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Hands-on development of a practical application
            </li>
            
          </div>
        </div>
        <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
          <div className="flex flex-col  ">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 10 : MongoDB Best Practices and Performance Tuning
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Scaling MongoDB for high traffic
            </li>
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Backup and recovery strategies
            </li>
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Monitoring and performance optimization
            </li>
          </div>
        </div>
        <div className="overflow-x-hidden  first-of-type:mt-0 last-of-type:mb-0">
          <div className="flex flex-col  ">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 11 : Final Projects and Presentations
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Students work on MongoDB projects of their choice
            </li>
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Presentation and review of projects
            </li>
           


          </div>

          <div className="flex flex-col  py-3">
            <div className="">
              <h2 className="  flex flex-row  text-[#545353] text-[20px] not-italic font-semibold leading-[normal] capitalize   ">
                Module 12 : Career Development and Job Preparation
              </h2>
            </div>
          </div>
          <div className="flex flex-col  items-start pt-3">
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Preparing for MongoDB-related job interviews
            </li>
            <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
            Exploring career opportunities in database management
            </li>
            {/* <li className="     dark:text-white  text-[#707070] text-[16px] not-italic font-normal leading-[214.8%] capitalize">
              Career Guidance and Next Steps{" "}
            </li> */}


          </div>
        </div>

        
      </div>
    </>
  );
};

export default FullstackCurriculum;

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
