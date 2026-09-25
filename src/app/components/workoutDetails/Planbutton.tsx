'use client'
import { workoutContext } from "@/context/workoutContext";
import Link from "next/link";

import { useContext } from "react";





const Planbutton = () => {

     const { plan } = useContext(workoutContext)
    return   (
        // <Link href={"/myplan"}><button className='text-white'>{`Plan (${plan.length})`}</button></Link>
         <Link href="/myplan">
      <button className="flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-white">
     Plan

        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#b6ff00] text-xs font-black text-black">
          {plan.length}
        </span>
      </button>
    </Link>
    )

        
           
    
    
};

export default Planbutton;