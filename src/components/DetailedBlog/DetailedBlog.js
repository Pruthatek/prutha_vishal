import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import data from "../Blog/data.json";
import "./blog.css";

const DetailedBlog = (props) => {
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  const { blogId } = useParams();

  const [blogData, setBlogData] = useState(data[blogId - 1]);
  return (
    <div className="px-10 pt-16">
      <div className="lg:w-[50vw] mx-auto my-[3vw] ">
        <div className="flex items-baseline gap-3">
          <a
            href="/"
            className="hover:tracking-widest transition-all duration-300"
          >
            Home
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="pt-1"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
          <a
            href="/blogs"
            className="hover:tracking-widest transition-all duration-300"
          >
            Blogs
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="pt-1"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
          <p>{blogData?.title}</p>
        </div>
        <div className="w-full my-5 mb-10">
          <p className="lg:text-[1.5rem] font-extrabold uppercase dark:bg-white bg-black bg-clip-text text-transparent bg-gradient-to-r to-[#ffe32d] from-[#ff6d2d] transition-all duration-300 w-fit">
            {blogData?.title}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mx-[0vw] my-[2vw]">
          <div className="flex items-center">
            {/* <img className="lg:h-[5vw] lg:w-[5vw] h-14 w-14 rounded-[50%] border-2 border-black dark:border-white" src={blogData?.proimage} alt="avtar" /> */}
            <div className="lg:h-[5vw] lg:w-[5vw] h-14 w-14 rounded-[50%] border-2 border-black dark:border-white flex items-center justify-center">
              <p className="uppercase font-bold text-[30px]">
                {blogData?.name[0]}
              </p>
            </div>
            <div style={{ marginLeft: "1.6vw" }}>
              <p className="lg:text-[0.96vw] text-sm">Written By</p>
              <p className="lg:text-[0.96vw] text-sm capitalize">
                {blogData?.name}
              </p>
            </div>
          </div>
          <p className="lg:text-[0.96vw] text-sm mt-3 lg:mt-0">
            {blogData?.date}
          </p>
        </div>
        <div id="description" className="blogDescription text-justify">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            children={blogData?.disc}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailedBlog;
