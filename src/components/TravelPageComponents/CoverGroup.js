import React from 'react';

const CoverGroup = () => {
    return (
        <div>
            <div className='grid grid-cols-1 gap-12'>

                <div className='grid grid-cols-1 gap-4'>
                    <div>
                        <div className='flex justify-between items-center w-full'>
                            <span className='text-left text-sky-600'>Traveller 1 Details</span>
                            <button className='w-8 h-8 hover:bg-sky-200 rounded-full flex justify-center items-center hover:text-white'><span>X</span></button>
                        </div>
                        <hr className='border-sky-300' />
                    </div>

                    <div className='h-fit w-full flex flex-col justify-center items-start rounded-md'>
                        <span className='text-sm text-sky-600 mb-1'>Age (In Years)</span>
                        <input className='text-sm w-full h-8 rounded-none px-2 border-gray-300 hover:border-sky-600 focus:outline-none focus:border-green-600' type="number" />
                    </div>

                    <div className='flex flex-col md:flex-row md:items-center gap-4'>
                        <div className='h-fit w-full flex flex-col justify-center items-start rounded-md'>
                            <span className='text-sm text-sky-600 mb-1'>Driver Name</span>
                            <div className='flex items-center gap-4'>
                                <button className='text-sm flex justify-center items-center w-20 h-8 rounded-3xl border border-sky-600 bg-sky-600 text-white'>
                                    <span>Male</span>
                                </button><button className='text-sm flex justify-center items-center w-20 h-8 rounded-3xl border border-sky-600 bg-white text-sky-600'>
                                    <span>Female</span>
                                </button>
                            </div>
                        </div>

                        <div className='h-fit w-full flex flex-col justify-center items-start rounded-md'>
                            <span className='text-sm text-sky-600 mb-1'>Pre-Existing Condition</span>
                            <div className='flex items-center gap-4'>
                                <button className='text-sm flex justify-center items-center w-20 h-8 rounded-3xl border border-sky-600 bg-sky-600 text-white'>
                                    <span>Yes</span>
                                </button><button className='text-sm flex justify-center items-center w-20 h-8 rounded-3xl border border-sky-600 bg-white text-sky-600'>
                                    <span>No</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-4'>
                    <div>
                        <div className='flex justify-between items-center w-full'>
                            <span className='text-left text-sky-600'>Traveller 2 Details</span>
                            <button className='w-8 h-8 hover:bg-sky-200 rounded-full flex justify-center items-center hover:text-white'><span>X</span></button>
                        </div>
                        <hr className='border-sky-300' />
                    </div>

                    <div className='h-fit w-full flex flex-col justify-center items-start rounded-md'>
                        <span className='text-sm text-sky-600 mb-1'>Age (In Years)</span>
                        <input className='text-sm w-full h-8 rounded-none px-2 border-gray-300 hover:border-sky-600 focus:outline-none focus:border-green-600' type="number" />
                    </div>

                    <div className='flex flex-col md:flex-row md:items-center gap-4'>
                        <div className='h-fit w-full flex flex-col justify-center items-start rounded-md'>
                            <span className='text-sm text-sky-600 mb-1'>Driver Name</span>
                            <div className='flex items-center gap-4'>
                                <button className='text-sm flex justify-center items-center w-20 h-8 rounded-3xl border border-sky-600 bg-sky-600 text-white'>
                                    <span>Male</span>
                                </button><button className='text-sm flex justify-center items-center w-20 h-8 rounded-3xl border border-sky-600 bg-white text-sky-600'>
                                    <span>Female</span>
                                </button>
                            </div>
                        </div>

                        <div className='h-fit w-full flex flex-col justify-center items-start rounded-md'>
                            <span className='text-sm text-sky-600 mb-1'>Pre-Existing Condition</span>
                            <div className='flex items-center gap-4'>
                                <button className='text-sm flex justify-center items-center w-20 h-8 rounded-3xl border border-sky-600 bg-sky-600 text-white'>
                                    <span>Yes</span>
                                </button><button className='text-sm flex justify-center items-center w-20 h-8 rounded-3xl border border-sky-600 bg-white text-sky-600'>
                                    <span>No</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className='flex items-center justify-center w-full py-12 cursor-pointer'>
                <span className='text-center text-sky-600'>+ Add Traveller</span>
            </button>

        </div>
    );
};

export default CoverGroup;