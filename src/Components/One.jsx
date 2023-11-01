import React from 'react';

export function Q1() {
  return (
    <div className="bg-red-100"> {/* Set background color and ensure full page height */}
      <section className="px-2 py-10 md:px-0">
        <div className="mx-auto max-w-4xl">
          <div className="md:flex md:items-center md:justify-center md:space-x-14">
            <div className="mt-10 md:mt-0">
              <blockquote>
                <p className="text-xl text-black font-bold">
                  “A detailed description of your past experiences.”
                </p>
              </blockquote>
              <div className="mt-1 ml-4 text-base text-gray-600">
                <p className="mt-7 text-lg font-semibold text-black">Internship Experience:</p>
                <ul className="list-disc pl-6 mt-7">
                  <li className="mt-7">
                    <p className="mt-2">
                      <p className="mt-7 text-lg font-semibold text-slate-600"> Coding Ninjas Web Development (March/2023 – June/2023):</p>

                      <br />
                      - Worked as a Teaching Assistant (TA) at Coding Ninjas.
                      <br />
                      - Gained insights into web development, enhancing my skills further.
                    </p>
                  </li>
                  <li className="mt-7">
                    <p>
                      <p className="mt-7 text-lg font-semibold text-slate-600"> Mighty Auto Wheels Pvt Ltd (July/2023 - Present):</p>

                      <br />
                      - Engaged in web development projects(HTML, CSS), contributing to real-world Website.
                      <br />
                      - Demonstrated my ability to work effectively in professional settings.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
