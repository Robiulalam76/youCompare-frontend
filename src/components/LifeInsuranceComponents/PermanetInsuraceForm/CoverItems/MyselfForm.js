import React from 'react';

const MyselfForm = () => {
    return (
        <div className='flex flex-col md:flex-row gap-y-4 w-full'>
            <div className='h-fit w-full flex flex-col justify-center items-start rounded-md'>
                <span className='text-sm text-sky-600 mb-1'>Your gender</span>
                <div className='flex items-center gap-4'>
                    <button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-sky-600 bg-sky-600 text-white'>
                        <span>Male</span>
                    </button><button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-sky-600 bg-white text-sky-600'>
                        <span>Female</span>
                    </button>
                </div>
            </div>

            <div className='h-fit w-full flex flex-col justify-center items-start rounded-md'>
                <span className='text-sm text-sky-600 mb-1'>Do you smoke?</span>
                <div className='flex items-center gap-4'>
                    <button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-sky-600 bg-sky-600 text-white'>
                        <span>Yes</span>
                    </button><button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-sky-600 bg-white text-sky-600'>
                        <span>No</span>
                    </button>
                </div>
            </div>

            <div className='h-fit w-full flex flex-col justify-center items-start rounded-md'>
                <span className='text-sm text-sky-600 mb-1'>Your employment status</span>
                <div className='flex items-center gap-4'>
                    <button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-sky-600 bg-sky-600 text-white'>
                        <span>Slaried</span>
                    </button><button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-sky-600 bg-white text-sky-600'>
                        <span>Self Employed</span>
                    </button>
                </div>
            </div>

            <div className='flex flex-col justify-center items-start w-full'>
                <span className='text-sm text-sky-600 mb-1'>Your age (in years)</span>
                <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer'
                    type='number' name="age" placeholder="Ex: 22 Years" />
            </div>
        </div>
    );
};

export default MyselfForm;