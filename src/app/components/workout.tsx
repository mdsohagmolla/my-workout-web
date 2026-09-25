import { IWorkout } from "@/type/type";
import WorkoutCard from "./homepage/workoutCard";



const getWorkoutData = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = res.json()
    return data
}



const Workout = async () => {

    const workOuts:IWorkout[] = await getWorkoutData()
    console.log(workOuts, 'from home page')

    return (
        <section className='container mx-auto'>

            <h1 className="font-bold text-2xl mt-5">THE LIBRARY</h1>
            <p className="mb-5 text-[#9CA3AF]">Twelve lifts covering every major muscle group.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>

                {
                   workOuts.map(workout =><WorkoutCard key={workout.id} workout = {workout}></WorkoutCard>) 
                }
            </div>
        </section>
    );
};

export default Workout;