import PlanButton from '@/detailPageButton/PlanButton';
import SaveButton from '@/detailPageButton/SaveButton';
import { IWorkout } from '@/type/type';
import Image from 'next/image';
import React from 'react';
interface workoutDetailpage {
    params: Promise<{
        workoutId: string

    }>

}

const getWorkoutData = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await res.json()
    return data
}


const WorkoutDetails = async ({ params }: workoutDetailpage) => {
    const { workoutId } = await params
    const workoutDatas = await getWorkoutData()
    const data = workoutDatas.find((workoutData: IWorkout) => workoutData.id === parseInt(workoutId)) as IWorkout
    

    return (

         <div className="min-h-screen bg-[#0b0c0f] px-4 py-10 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 rounded-2xl border border-gray-800 bg-[#101216] p-5 md:grid-cols-2 md:p-8">

        {/* Left - Image */}
        <div className="overflow-hidden rounded-xl">
          <Image
            src={data.image}
            alt={data.name}
            width={600}
            height={700}
            className="h-full min-h-[500px] w-full object-cover"
          />
        </div>

        {/* Right - Details */}
        <div className="flex flex-col">

          {/* Title */}
          <h1 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
            {data.name}
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-400">
            {data.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-4 flex flex-wrap gap-2">
            {data.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#b6ff00] px-3 py-1 text-xs font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Information */}
          <div className="mt-6 overflow-hidden rounded-xl border border-gray-800 bg-[#171a20]">

            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
              <span className="text-xs font-bold uppercase text-gray-500">
                Equipment
              </span>

              <span className="text-sm text-gray-300">
                {data.equipment}
              </span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
              <span className="text-xs font-bold uppercase text-gray-500">
                Difficulty
              </span>

              <span className="text-sm text-gray-300">
                {data.difficulty}
              </span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
              <span className="text-xs font-bold uppercase text-gray-500">
                Sets
              </span>

              <span className="text-sm text-gray-300">
                {data.sets}
              </span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
              <span className="text-xs font-bold uppercase text-gray-500">
                Reps
              </span>

              <span className="text-sm text-gray-300">
                {data.reps}
              </span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
              <span className="text-xs font-bold uppercase text-gray-500">
                Duration
              </span>

              <span className="text-sm text-gray-300">
                {data.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
              <span className="text-xs font-bold uppercase text-gray-500">
                Calories
              </span>

              <span className="text-sm text-gray-300">
                {data.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-xs font-bold uppercase text-gray-500">
                Rating
              </span>

              <span className="text-sm text-gray-300">
                {data.rating}
              </span>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-7">
            <h2 className="text-sm font-black uppercase tracking-wide">
              Instructions
            </h2>

            <ol className="mt-4 space-y-3">
              {data.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-5 text-gray-400"
                >
                  <span className="text-gray-500">
                    {index + 1}.
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">

            <PlanButton data={data}></PlanButton>

            <SaveButton data= {data}></SaveButton>

          </div>
        </div>
      </div>
    </div>
    )
};

export default WorkoutDetails;