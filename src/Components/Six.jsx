import React from 'react';

export  function Q6() {
  return (
    <div className="bg-purple-300"> {/* Set background color and ensure full page height */}
      <section className="px-2 py-10 md:px-0">
        <div className="mx-auto max-w-4xl">
          <div className="md:flex md:items-center md:justify-center md:space-x-14">
            <div className="mt-10 md:mt-0">
              <blockquote className="text-xl text-black font-bold">
                “A short story about a recent project you worked on, especially any challenges and how you overcame them.”
              </blockquote>
              <div className="mt-1 ml-4 text-base text-gray-600">
                <p className="mt-7 text-lg font-semibold">
                  Certainly, here's a short story about a recent web development project:

                  I recently worked on a web development project that involved creating a News website. The project was quite exciting, but it came with its share of challenges.

                  One of the initial challenges was Routing. To overcome this challenge, I used react-router.

                  Another challenge was very easy but sometimes easy problems bother very much, the problem is asynchronous response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
