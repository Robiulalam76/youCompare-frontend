import React from 'react';

const GroupInsuranceForm = () => {
    return (
        <div>
            <h1 className='text-left text-sky-600 mb-4'>Group Life Insurance</h1>

            <div className='grid md:grid-cols-2 gap-x-6 gap-y-2'>

                <div className='flex flex-col justify-center items-start w-full'>
                    <span className='text-sm text-sky-600 mb-1'>Amount of Cover</span>
                    <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer'
                        type='number' name="amount" placeholder="Enter Amount" />
                </div>

                <div className='flex flex-col justify-center items-start w-full'>
                    <span className='text-sm text-sky-600 mb-1'>Organization Name</span>
                    <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer'
                        type='text' name="Organization_Name" placeholder="Enter Name of Your Organization" />
                </div>

                <div className='h-fit w-full flex flex-col justify-center items-start rounded-md'>
                    <span className='text-sm text-sky-600 mb-1'>Total Number of Employees</span>
                    <div className='flex items-center gap-4'>
                        <button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-sky-600 bg-sky-600 text-white'>
                            <span>Less than 50</span>
                        </button>
                        <button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-sky-600 bg-white text-sky-600'>
                            <span>50 to 100</span>
                        </button>
                        <button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-sky-600 bg-white text-sky-600'>
                            <span>100 to 200</span>
                        </button>
                        <button className='text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl border border-sky-600 bg-white text-sky-600'>
                            <span>More than 200</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GroupInsuranceForm;