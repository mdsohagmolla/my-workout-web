'use client'
import { workoutContext } from '@/context/workoutContext';
import { useContext } from 'react';
import TypeCard from '../components/TypeCard';
import { IWorkout } from '@/type/type';



const MyPlanPage = () => {

    const { plan, save } = useContext(workoutContext)
    
    return (
        <div className='container mx-auto'>
            <div>
                <h2 className='font-bold text-2xl mt-'>My plan </h2>
                <p className='text-gray-500 mt-2'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className='grid grid-cols-3 bg-[#101216] my-8 p-10'>
                <div>Exercise</div>
                <div>Minutes</div>
                <div>Calories</div>
            </div>
            <div>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift">

                    {/* Tab 1 */}
                    <input
                        type="radio"
                        name="my_tabs_3"
                        className="tab bg-[#0b0c0f] text-white border-[#2bec09ac]"
                        aria-label="Today's plan"
                        defaultChecked
                    />

                    <div className="tab-content  bg-[#0b0c0f] p-6 text-white">
                        {
                            plan.length > 0 ? (plan.map((data: IWorkout) => {
                                return <TypeCard key={data.id} data={data}></TypeCard>
                            })) : (<p className='text-center'>No Todays plan found</p>)
                        }
                    </div>


                    {/* Tab 2 */}
                    <input
                        type="radio"
                        name="my_tabs_3"
                        className="tab bg-[#0b0c0f] text-white border-[#2bec09ac]"
                        aria-label="Saved"

                    />

                    <div className="tab-content  bg-[#0b0c0f] p-6 text-white">
                        {
                            save.length > 0 ? (save.map((data: IWorkout) => {
                                return <TypeCard key={data.id} data={data}></TypeCard>
                            })) : (<p className='text-center'>No Save Item found</p>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyPlanPage;