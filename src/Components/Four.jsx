import React from 'react';

export  function Q4() {
  return (
    <div className="bg-red-100 min-h-full"> {/* Set background color and ensure full page height */}
      <section className="px-2 py-10 md:px-0">
        <div className="mx-auto max-w-4xl">
          <div className="md:flex md:items-center md:justify-center md:space-x-14">
            <div className="mt-10 md:mt-0">
              <blockquote className="text-xl text-black font-bold">
                “Whether you lean on front-end, back-end or full-stack.”
              </blockquote>
              <div className="mt-1 ml-4 text-base text-gray-600">
                <p className="mt-7 text-lg font-semibold">I primarily focus on front-end development, and I've built several projects that have given me confidence in my front-end skills. However, I'm also in the process of learning backend development to become a full-stack developer. This way, I can work on both the user interface and the server-side of web applications, making me a more versatile developer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
