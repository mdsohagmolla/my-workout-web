'use client'

import { workoutContext } from "@/context/workoutContext";
import { IWorkout } from "@/type/type";
import { useContext } from "react";
import { toast } from "react-toastify";


const PlanButton = ({data}:{data:IWorkout}) => {

const  {plan, setPlan} = useContext(workoutContext)



const handlePlan = () => {
    // Check if workout already exists
    const alreadyAdded = plan.some((item) => item.id === data.id);

    if (alreadyAdded) {
      toast.info(`${data.name} is already in your plan`);
      return;
    }

    // Add workout
    setPlan([...plan, data]);

    toast.success(`You have added ${data.name} to your plan`);
  };


    return (
        <button className="rounded-lg bg-[#b6ff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#c5ff33]" onClick={()=>handlePlan()}>
              📅 Add to today's plan
            </button>
    );
};

export default PlanButton;