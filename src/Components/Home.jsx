import React from 'react'

export function Home() {
  return (
    <section className="px-2 py-10 md:px-0">
      <div className="mx-auto max-w-4xl">
        <div className="md:flex md:items-center md:justify-center md:space-x-14">
          <div className="relative h-48 w-48 flex-shrink-0">
            <img
              className="relative h-48 w-48 rounded-full object-cover"
              src="https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>

          <div className="mt-10 md:mt-0">
            <blockquote>
              <p className="text-xl text-black">
                “Hello , I made this Basic website to answers of yours Questions for the Internship role in AltaSierra”
              </p>
            </blockquote>
            <p className="mt-7 text-lg font-semibold text-black">Ayush Malik</p>
            <p className="mt-1 text-base text-gray-600">Frontend Developer</p>
          </div>
        </div>
      </div>
    </section>
  )
}
