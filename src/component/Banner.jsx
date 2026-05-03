import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import bg from "../assets/logo/bannerImg.jpg";
import { Link } from "react-router-dom";

const StudyPlatformHero = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cover bg-center px-4"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="absolute inset-0 bg-neutral/70"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="theme-card relative w-full max-w-3xl bg-base-100/80 p-6 text-center shadow-2xl backdrop-blur-md"
      >
        <h1 className="mb-4 text-2xl font-bold text-base-content sm:text-3xl md:text-4xl">
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
          className="theme-muted mb-6 text-sm sm:text-base md:text-lg"
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
          <Link to="/login" className="theme-btn-primary w-full rounded-lg px-6 py-3 text-sm font-semibold sm:w-auto sm:text-base">
            Get Started
          </Link>
          <Link to="/sessions" className="theme-btn-ghost w-full rounded-lg px-6 py-3 text-sm font-semibold sm:w-auto sm:text-base">
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StudyPlatformHero;
