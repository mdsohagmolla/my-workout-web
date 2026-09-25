'use client'

import { workoutContext } from "@/context/workoutContext";
import { IWorkout } from "@/type/type";
import { useContext } from "react";
import { toast } from "react-toastify";

const SaveButton = ({data}:{data:IWorkout}) => {

    const {save, setSave}= useContext(workoutContext)
    

const handleSavebutton=()=>{

    setSave([...save, data])
    toast.success(`You have added ${data.name} to your plan`)
}

    return (
       <button className="rounded-lg border border-gray-700 px-5 py-3 text-sm font-medium text-gray-300 transition hover:border-gray-500 hover:text-white" onClick={()=>handleSavebutton()}>
              ♡ Save for later
            </button>
    );
};

export default SaveButton;