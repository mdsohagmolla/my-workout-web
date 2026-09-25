import { IWorkout } from '@/type/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface workoutProps{
    workout: IWorkout
}
const WorkoutCard = ({workout}:workoutProps) => {
    
    return (
        <Link  href={`workout/${workout.id}`}>
        <div className=" max-w-sm overflow-hidden rounded-2xl border border-gray-800 bg-[#15171c] shadow-lg transition duration-300 hover:-translate-y-1 hover:border-gray-700 hover:shadow-2xl">

      {/* Image */}
      <div className="relative   overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          width={390}
          height={192}
          className="object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-5">

        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#b6ff00] px-3 py-1 text-[11px] font-black uppercase tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h2 className="mt-5 text-xl font-black uppercase tracking-wide text-white">
          {workout.name}
        </h2>

        {/* Equipment */}
        <p className="mt-2 text-sm text-gray-500">
          {workout.equipment}
        </p>

        {/* Divider */}
        <div className="my-5 border-t border-gray-800"></div>

        {/* Workout Info */}
        <div className="flex items-center gap-5 text-sm text-gray-400">

          {/* Duration */}
          <div className="flex items-center gap-2">
            <span className="text-base">◷</span>
            <span>{workout.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-2">
            <span className="text-base">♥</span>
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-base">☆</span>
            <span>{workout.rating}</span>
          </div>

        </div>

      </div>
    </div>
        </Link>
    );
};

export default WorkoutCard;