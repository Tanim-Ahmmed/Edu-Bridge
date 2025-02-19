import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import bg from "../assets/logo/bannerImg.jpg"
import { Link } from "react-router-dom";
const StudyPlatformHero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-4 bg-green-500/80"
      style={{
        backgroundImage: `url(${bg})`, 
      }}
    >
   
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="bg-white/20 p-6 rounded-lg shadow-lg text-center max-w-3xl w-full"
      >
      
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          <Typewriter
            words={[
              "Welcome to EduBridge!",
              "Connect, Learn & Grow.",
              "Collaborate for Success.",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>

       
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-sm sm:text-base md:text-lg text-gray-700 mb-6"
        >
          Empowering students, tutors, and administrators to connect, share
          resources, and achieve academic excellence. Join now to explore a
          world of opportunities!
        </motion.p>

      
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Link to="/login" className="w-full sm:w-auto px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 text-sm sm:text-base">
            Get Started
          </Link>
          <Link to="/sessions" className="w-full sm:w-auto px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 text-sm sm:text-base">
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StudyPlatformHero;
