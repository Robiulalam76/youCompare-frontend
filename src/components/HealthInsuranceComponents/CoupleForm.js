import React from 'react';

const CoupleForm = () => {
    return (
        <>
            <div className='text-left flex justify-start items-center w-full border-b h-8 mb-4 font-bold'>
                <span>Person 1</span>
            </div>

            <div className='grid md:grid-cols-2 gap-4 w-full'>

                <div className='flex flex-col justify-center items-start w-full'>
                    <span className='text-sm text-sky-600 mb-1'>Full Name (Person 1)</span>
                    <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer'
                        type='text' name="Name" placeholder="Full Name" />
                </div>

                <div className='flex flex-col justify-center items-start w-full'>
                    <span className='text-sm text-sky-600 mb-1'>Email ID (Person 1)</span>
                    <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer'
                        type='email' name="email" placeholder="Email ID" />
                </div>

                <div className='flex flex-col justify-center items-start w-full'>
                    <span className='text-sm text-sky-600 mb-1'>Mobile (Person 1)</span>
                    <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer'
                        type='number' name="mobile" placeholder="Mobile Number" />
                </div>

            </div>


            <div className='text-left flex justify-start items-center w-full border-b h-8 mb-4 font-bold mt-4'>
                <span>Person 2</span>
            </div>

            <div className='grid md:grid-cols-2 gap-4 w-full'>

                <div className='flex flex-col justify-center items-start w-full'>
                    <span className='text-sm text-sky-600 mb-1'>Full Name (Person 2)</span>
                    <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer'
                        type='text' name="Name" placeholder="Full Name" />
                </div>

                <div className='flex flex-col justify-center items-start w-full'>
                    <span className='text-sm text-sky-600 mb-1'>Email ID (Person 2)</span>
                    <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer'
                        type='email' name="email" placeholder="Email ID" />
                </div>

                <div className='flex flex-col justify-center items-start w-full'>
                    <span className='text-sm text-sky-600 mb-1'>Mobile (Person 2)</span>
                    <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer'
                        type='number' name="mobile" placeholder="Mobile Number" />
                </div>

            </div>
        </>
    );
};

export default CoupleForm;