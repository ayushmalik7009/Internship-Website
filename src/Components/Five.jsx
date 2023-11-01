import React from 'react';

export  function Q5() {
  return (
    <div className="bg-green-300"> {/* Set background color and ensure full page height */}
      <section className="px-2 py-10 md:px-0">
        <div className="mx-auto max-w-4xl">
          <div className="md:flex md:items-center md:justify-center md:space-x-14">
            <div className="mt-10 md:mt-0">
              <blockquote className="text-xl text-black font-bold">
                “Any certifications or qualifications you have.”
              </blockquote>
              <div className="mt-1 ml-4 text-base text-gray-600">
                <p className="mt-7 text-lg font-semibold">Yes, I have a Frontend Web Development certificate from Coding Ninjas and a Java certificate.</p>
              </div>
              <div className='flex ml-7'>
                <a
                  href="https://drive.google.com/file/d/1iET_rhwV57Qrh6BHo78AmFeUmv4efhOh/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="rounded-md bg-black mt-2 mr-2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    CERTIFICATE 1
                  </button>
                </a>
                <a
                  href="https://drive.google.com/file/d/1maulbQUiye9XWDp0MhbTtEL4bUztaq71/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 mt-2 mr-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    CERTIFICATE 2
                  </button>
                </a>
                <a
                  href="https://drive.google.com/file/d/1KNLaJl9dSixizbK7evk4yVmx0aVeKbzJ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 mt-2 mr-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    INTERNSHIP
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
