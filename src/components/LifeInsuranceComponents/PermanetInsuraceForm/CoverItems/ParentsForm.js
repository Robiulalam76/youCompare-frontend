import React from 'react';

const ParentsForm = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-y-4 gap-x-6 w-full'>

            <div className='h-fit w-full flex flex-col justify-center items-start rounded-md'>
                <span className='text-sm text-sky-600 mb-1'>Any one of your parents smoke?</span>
                <div className='flex items-center gap-4'>
                    <button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-sky-600 bg-sky-600 text-white'>
                        <span>Father</span>
                    </button>
                    <button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-sky-600 bg-white text-sky-600'>
                        <span>Mother</span>
                    </button>
                    <button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-sky-600 bg-white text-sky-600'>
                        <span>Both</span>
                    </button>
                    <button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-sky-600 bg-white text-sky-600'>
                        <span>None</span>
                    </button>
                </div>
            </div>

            <div className='h-fit w-full flex flex-col justify-center items-start rounded-md'>
                <span className='text-sm text-sky-600 mb-1'>Your parent's employment status</span>
                <div className='flex items-center gap-4'>
                    <button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-sky-600 bg-sky-600 text-white'>
                        <span>Slaried</span>
                    </button><button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-sky-600 bg-white text-sky-600'>
                        <span>Self Employed</span>
                    </button>
                </div>
            </div>

            <div className='flex flex-col justify-center items-start w-full'>
                <span className='text-sm text-sky-600 mb-1'>Your father's age (years)</span>
                <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer'
                    type='number' name="age" placeholder="Ex: 22 Years" />
            </div>
            <div className='flex flex-col justify-center items-start w-full'>
                <span className='text-sm text-sky-600 mb-1'>Your mother's age (years)</span>
                <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer'
                    type='number' name="age" placeholder="Ex: 22 Years" />
            </div>
        </div>
    );
};

export default ParentsForm;