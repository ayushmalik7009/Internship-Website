import React from 'react';

export  function Q3() {
  return (
    <div className="bg-lime-200"> {/* Set background color and ensure full page height */}
      <section className="px-2 py-10 md:px-0">
        <div className="mx-auto max-w-4xl">
          <div className="md:flex md:items-center md:justify-center md:space-x-14">
            <div className="mt-10 md:mt-0">
              <blockquote className="text-xl text-black font-bold">
                “The languages and programming stacks you're familiar with.”
              </blockquote>
              <div className="mt-1 ml-4 text-base text-gray-600">
                <p className="mt-7 text-lg font-semibold text-black">Languages:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li><span>HTML</span></li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Java</li>
                  <li>SQL (Structured Query Language)</li>
                </ul>
                <p className="mt-7 text-lg font-semibold text-black">Programming Stacks:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>React.js (JavaScript library for building user interfaces)</li>
                  <li>Redux (State management library for JavaScript apps)</li>
                  <li>React Router (Library for handling routing in React applications)</li>
                  <li>Data Structures (General concept related to organizing and managing data)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
