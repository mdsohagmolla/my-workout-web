import React from 'react';
import bannar from '@/app/asset/banner.png'
import Image from 'next/image';

const Bannar = () => {
    return (
        <section className="container mx-auto px-4 py-6">
      <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#15171c]">
        <div className="flex min-h-[325px] flex-col-reverse items-center justify-between gap-8 px-6 py-10 md:px-10 lg:flex-row">

          {/* Left Content */}
          <div className="w-full lg:w-1/2">

            {/* Badge */}
            <p className="mb-5 inline-block border border-blue-500 bg-[#b6ff00] px-2 py-0.5 text-[10px] font-bold tracking-widest text-blue-900">
              WORKOUT LIBRARY
            </p>

            {/* Heading */}
            <h1 className="max-w-xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              TRAIN WITH INTENT. LOG
              <br />
              EVERY SET.
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            {/* Button */}
            <button
              className="mt-6 rounded-md bg-[#b6ff00] px-6 py-3 text-xs font-black
              tracking-wide text-black transition duration-300
              hover:bg-[#c7ff33] hover:shadow-[0_0_20px_rgba(182,255,0,0.25)]"
            >
              BROWSE WORKOUTS
            </button>
          </div>


          {/* Right Image */}
          <div className="flex w-full items-center justify-center lg:w-1/2 lg:justify-end">
            <Image
              src={bannar}
              alt="Workout"
              width={360}
              height={300}
              className="h-[240px] w-auto object-contain sm:h-[280px] lg:h-[300px]"
            />
          </div>

        </div>
      </div>
    </section>
    );
};

export default Bannar;