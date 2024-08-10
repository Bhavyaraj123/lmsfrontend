import React, { useState, useRef } from "react";
import psychometricImage from "../assets/images/psychometrictest.jpg";
import child from "../assets/images/child.jpg";
import TestComponent from "../components/TestComponent";

const PsychometricTestPage = () => {
  const [showQuestions, setShowQuestions] = useState(false);
  const testSectionRef = useRef(null);
  // eslint-disable-next-line

  const toggleQuestions = () => {
    setShowQuestions(!showQuestions);
    if (!showQuestions) {
      // Scroll to the test section when it becomes visible
      setTimeout(() => {
        testSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <div className="w-full">
       {/* Psychometric Test Section */}

       <section className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-20 px-10 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Psychometric Test</h1>
          <p className="text-2xl mb-8">
            Evaluate various aspects of your personality and skills with our
            comprehensive Psychometric Test
          </p>
          <div>
            {/* test categories */}
            <section className="py-16 px-10 bg-gradient-to-r from-blue-500 to-teal-400 text-white box-border">
              <div className="mx-auto max-w-7xl">
                <div className="flex gap-5 flex-col lg:flex-row items-center">
                  <img
                    src={psychometricImage}
                    alt="child"
                    className=" flex items-center  w-[80%] h-[80%]  lg:w-[40%] lg:h-auto rounded-lg shadow-xl"
                  />
                  <div>
                    <h2 className="text-center font-bold text-4xl relative mt-4 flex justify-center items-start">
                      
                      Assesment Categories
                    </h2>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 mt-10">
                      <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-white rounded flex p-4 h-full items-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                           strokeWidth="3"
                            className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                          </svg>
                          <span className="title-font font-medium text-custom-body">
                            Interest Inventory
                          </span>
                        </div>
                      </div>
                      <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-white rounded flex p-4 h-full items-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                           strokeWidth="3"
                            className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                          </svg>
                          <span className="title-font font-medium text-custom-body">
                            Personality Traits
                          </span>
                        </div>
                      </div>
                      <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-white rounded flex p-4 h-full items-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                           strokeWidth="3"
                            className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                          </svg>
                          <span className="title-font font-medium text-custom-body">
                            Learning Preferences
                          </span>
                        </div>
                      </div>
                      <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-white rounded flex p-4 h-full items-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                           strokeWidth="3"
                            className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                          </svg>
                          <span className="title-font font-medium text-custom-body">
                            Skills and Competencies
                          </span>
                        </div>
                      </div>
                      <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-white rounded flex p-4 h-full items-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                           strokeWidth="3"
                            className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                          </svg>
                          <span className="title-font font-medium text-custom-body">
                            Work Values
                          </span>
                        </div>
                      </div>
                      <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-white rounded flex p-4 h-full items-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                           strokeWidth="3"
                            className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                          </svg>
                          <span className="title-font font-medium text-custom-body">
                            Motivations
                          </span>
                        </div>
                      </div>
                      <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-white rounded flex p-4 h-full items-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                           strokeWidth="3"
                            className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                          </svg>
                          <span className="title-font font-medium text-custom-body">
                            Decision-Making Style
                          </span>
                        </div>
                      </div>
                      <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-white rounded flex p-4 h-full items-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                           strokeWidth="3"
                            className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                          </svg>
                          <span className="title-font font-medium text-custom-body">
                            Interpersonal Skills
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
            onClick={toggleQuestions}
            className= " flex mx-auto mt-10 justify-center bg-white text-blue-700 py-3 px-8 rounded-full  font-semibold hover:bg-pink-200 transition duration-300"
          >
            Start Test
          </button>

                  </div>
                </div>
              </div>
            </section>

          </div>

          
             
        </section>

        {/* Test Component Section */}
        <section
          ref={testSectionRef}
          className={`flex justify-center items-center h-[600px] ${
            showQuestions ? "block" : "hidden"
          }`}
        >
          <div className="md:w-[600px] lg:w-[700px] xl:w-[800px] bg-white shadow-2xl  p-8 rounded-lg">
            <TestComponent />
          </div>
        </section>


 {/* Additional Content Section */}
 <section className="py-16 px-10 bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-custom-dark-gray">
              What is a Psychometric Test?
            </h2>
            <div className="flex gap-5 flex-col lg:flex-row items-center">
              <img
                src={child}
                alt="child"
                className=" flex items-center  w-[80%] h-[80%]  lg:w-[40%] lg:h-auto rounded-lg shadow-xl"
              />
              <div>
                <p
                  className="  text-xl text-gray-700 mb-7 relative leading-relaxed lg:w-[90%] mx-3 text-justify justify-center items-center"
                  style={{ boxSizing: "border-box" }}
                >
                  A Psychometric Test is a specialized assessment tool designed
                  to evaluate an individual's mental capabilities, personality
                  traits, attitudes, behaviors, and other psychological
                  characteristics. These tests are widely used across various
                  fields, including education, recruitment, career counseling,
                  and personal development, to gain a deeper understanding of a
                  person’s psychological makeup and potential.
                </p>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed mx-3 text-justify box-border  ">
                  chometric tests also play a role in personal development. They
                  offer insights into an individual's strengths, weaknesses, and
                  areas for improvement, contributing to self-awareness and
                  personal growth. For instance, understanding one's personality
                  traits can aid in improving interpersonal relationships and
                  professional interactions.
                </p>
              </div>
            </div>

            <div className="mt-5  flex justify-center">
              <button
                onClick={toggleQuestions}
                className=" bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 px-8 rounded-full font-semibold hover:bg-pink-600 transition duration-300 justify-center "
              >
                Get Started
              </button>
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
};

export default PsychometricTestPage;
