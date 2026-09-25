import CrossDelete from '@/detailDeleteButtun/crossDelete';
import { IWorkout } from '@/type/type';
import Image from 'next/image';


const TypeCard = ({data}:{data:IWorkout}) => {
    return (
         <div className="flex w-full items-center gap-4 rounded-xl border border-gray-800 bg-[#15171c] p-3">

      {/* Image */}
      <div className="shrink-0">
        <Image
          src={data.image}
          alt={data.name}
          width={105}
          height={65}
          className="h-16 w-28 rounded-lg object-cover"
        />
      </div>

      {/* Workout Info */}
      <div className="min-w-0 flex-1">

        {/* Name */}
        <h2 className="truncate text-sm font-black uppercase text-white">
          {data.name}
        </h2>

        {/* Equipment */}
        <p className="mt-1 text-xs text-gray-500">
          {data.equipment}
        </p>

        {/* Stats */}
        <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-gray-400">

          <span className="flex items-center gap-1">
            <span className="text-[#b6ff00]">◷</span>
            {data.duration} min
          </span>

          <span className="flex items-center gap-1">
            <span className="text-[#b6ff00]">♥</span>
            {data.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <span className="text-[#b6ff00]">☆</span>
            {data.rating}
          </span>

        </div>
      </div>

      {/* Actions */}
      <div className="hidden shrink-0 items-center gap-2 sm:flex">

        <button className="rounded-full border border-gray-700 px-4 py-2 text-xs text-gray-300 transition hover:border-gray-500 hover:text-white">
          View Details
        </button>

        <button className="rounded-full bg-[#b6ff00] px-4 py-2 text-xs font-bold text-black transition hover:bg-[#c7ff33]">
          ✓ Mark as Done
        </button>

        {/* <button className="px-2 text-gray-500 transition hover:text-white">
          ×
        </button> */}
        <CrossDelete key={data.id} data= {data}></CrossDelete>

      </div>

      {/* Mobile action */}
      <div className="flex shrink-0 flex-col gap-2 sm:hidden">

        <button className="rounded-full bg-[#b6ff00] px-3 py-2 text-xs font-bold text-black">
          ✓
        </button>

        {/* <button className="text-gray-500">
          ×
        </button> */}
        <CrossDelete key={data.id} data= {data}></CrossDelete>

      </div>

    </div>
    );
};

export default TypeCard;