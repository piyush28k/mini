import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Scroller from "./Scroller";
import Eyes from "./eyes";

function Home() {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        {/* page1 */}
        <div className="text-center items-center flex flex-col -mt-20">
          <motion.h1
            initial={{ x: "-1000px" }} // Start from -1000px to the left
            animate={{ x: "0px" }} // Animate to the center (0px)
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} // Smooth transition
            className="text-6xl font-bold"
          >
            Over <motion.span
            // delay={2000}
            delay="2000"
            initial={{ scale:'0px' }}
            animate={{ scale: "200px" }} 
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className="text-sky-700">5,000 jobs</motion.span> are
          </motion.h1>

          <motion.h1
            initial={{ x: "1000px" }} // Start from -1000px to the left
            animate={{ x: "0px" }} // Animate to the center (0px)
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} // Smooth transition
            className="text-6xl font-bold"
          >
            waiting for you
          </motion.h1>

          <motion.p
            initial={{ y: "100px", opacity: 0 }} // Start from 100px below with opacity 0
            animate={{ y: "0px", opacity: 1 }} // Animate to the center (0px) and fade in
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 0.5 }} // Add delay for smoother effect
            className="text-base w-96 mt-10"
          >
            Work with best company, hire the experienced professionals.
          </motion.p>
        </div>
      </div>

      {/* page2 */}
      <motion.h1
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold ml-10"
      >
        Most Popular categories
      </motion.h1>


      <div className="h-full w-full flex my-28 flex-col gap-52 items-center ">
        <motion.div 
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-96 w-1/2 flex">
          <div className="img h-full w-1/2">
            <img className=" h-full w-full object-cover object-center" src="https://i.pinimg.com/564x/c2/f0/2c/c2f02cfd879fab41b9e39d5d7a54a83f.jpg" alt="" />
          </div>
          <div className=" h-full w-1/2 p-10">
            <h1 className="text-2xl font-bold my-5">Finance</h1>
            <h3>It encompasses a wide range of activities, including budgeting, forecasting, investing, lending, and managing assets and liabilities. Finance is divided into personal finance, corporate finance, and public finance, each focusing on managing financial resources for individuals, businesses, and governments.</h3>
            <p className="mt-2 text-gray-600">1720 Postings</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-96 w-1/2 flex">
          <div className=" h-full w-1/2 p-10">
            <h1 className="text-2xl font-bold my-5">Marketing</h1>
            <h3>involves identifying target audiences, understanding consumer behavior, and developing strategies to communicate a brand’s value effectively. Key components of marketing include market</h3>
            <p className="mt-2 text-gray-600">1720 Postings</p>
          </div>
          <div className="img h-full w-1/2">
           <img className=" h-full w-full object-cover object-center" src="https://i.pinimg.com/enabled/564x/ad/cb/3d/adcb3d77dbd6ebaad3491bd3c298817a.jpg" alt="" />
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-96 w-1/2 flex">
          <div className="img h-full w-1/2">
            <img className=" h-full w-full object-cover object-center" src="https://i.pinimg.com/564x/75/2a/0c/752a0cfc628a12e5700429fc3cfad0ed.jpg" alt="" />
          </div>
          <div className=" h-full w-1/2 p-10">
            <h1 className="text-2xl font-bold my-5">IT Services</h1>
            <h3>help organizations manage and optimize their technology infrastructure. These services can range from basic technical support to more complex services like network management, cybersecurity, cloud computing, and software development</h3>
            <p className="mt-2 text-gray-600">1720 Postings</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-96 w-1/2 flex">
          <div className=" h-full w-1/2 p-10">
            <h1 className="text-2xl font-bold my-5">Science</h1>
            <h3>Science AI holds great promise for advancing knowledge and innovation across all areas of science.Science AI is being applied across fields like biology, physics, chemistry, astronomy, and environmental science to enhance innovation and problem-solving.</h3>
            <p className="mt-2 text-gray-600">1720 Postings</p>
          </div>
          <div className="img h-full w-1/2">
           <img className=" h-full w-full object-cover object-center" src="https://i.pinimg.com/enabled/564x/b2/e5/8a/b2e58a5c196f70eb35dc95d4eb66fe7a.jpg" alt="" />
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-96 w-1/2 flex">
          <div className="img h-full w-1/2">
            <img className=" h-full w-full object-cover object-center" src="https://i.pinimg.com/564x/8d/37/99/8d3799e24be55bdfddb7a4fd8e4100d0.jpg" alt="" />
          </div>
          <div className=" h-full w-1/2 p-10">
            <h1 className="text-2xl font-bold my-5">Tech</h1>
            <h3>IT involves the use of computers, software, networks, and databases to manage and process information. It includes services like cloud computing, cybersecurity, and data storage, which are essential for modern businesses.</h3>
            <p className="mt-2 text-gray-600">1720 Postings</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-96 w-1/2 flex">
          <div className=" h-full w-1/2 p-10">
            <h1 className="text-2xl font-bold my-5">Gastronamy</h1>
            <h3>In gastronomy, food presentation plays a significant role in how a dish is perceived and enjoyed. Chefs use artistic techniques to arrange food in visually striking ways, paying attention to color, texture, and plating.</h3>
            <p className="mt-2 text-gray-600">1720 Postings</p>
          </div>
          <div className="img h-full w-1/2">
           <img className=" h-full w-full object-cover object-center" src="https://i.pinimg.com/enabled/564x/4c/60/2d/4c602d73752263336c31a1e4ffaa8822.jpg" alt="" />
          </div>
        </motion.div>
        

        

        {/* third3 */}
      </div>

      <Scroller />

      <Eyes />
    </>
  );
}

export default Home;
