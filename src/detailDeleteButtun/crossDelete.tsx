'use client'
import { workoutContext } from '@/context/workoutContext';
import { IWorkout } from '@/type/type';
import { useContext } from 'react';
import { toast } from 'react-toastify';




const CrossDelete = ({data}:{data:IWorkout}) => {

const  {plan, save, setSave, setPlan} = useContext(workoutContext)


const handleDelete =()=>{

     // Plan থেকে delete
   const updatedPlan = plan.filter((item) => item.id !== data.id);

    setPlan(updatedPlan);

     // Save থেকে delete
    const updatedSave = save.filter((item) => item.id !== data.id);
    setSave(updatedSave);

    toast.success(`${data.name} removed from your plan`);
}




    return (
        <button onClick={()=>handleDelete()} className="text-gray-500" >
          ×
        </button>
    )
};

export default CrossDelete;