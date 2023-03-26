import React from 'react';
import { useState } from 'react';
import rightArrow from '../../accets/icons/right-arrow.png'
import { Link } from 'react-router-dom';
import SmallTabs from '../../SmallTabs/SmallTabs';
import ViewDetails from '../../Modals/ViewDetailsModals/ViewDetails';

const Driver = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <section className='relative bg-[#f5f8fa] px-4 min-h-screen'>
            <div className='max-w-[1440px] mx-auto py-12'>
                <p className='text-left text-xl font-semibold text-black'>*These Pices Includes VAT</p>
                <SmallTabs />

                <div className='flex flex-col md:flex-row md:items-center gap-4 mt-2'>
                    <h1 className='text-3xl font-bold text-green-600'>Hi Nahid!</h1>
                    <p className='text-black font-semibold text-xl'>We Found 2 Qoutes for Your Toyota Acura 1.6 Limited</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                    <div className='flex flex-col bg-gradient-to-r from-indigo-50 via-purple-50 to-sky-50 rounded-xl shadow-md border py-6 px-6 h-96 cursor-pointer hover:-translate-y-6 duration-500'>
                        <h1 className='text-sky-600 uppercase font-bold text-center text-xl'>Cheapset Thart Perty Only</h1>
                        <div className='my-4'>
                            <div className='flex justify-between items-center gap-2 border-b border-sky-600 py-2'>
                                <h1 className='text-gray-700 font-semibold'>Price:</h1>
                                <h1 className='text-sky-500 text-xl font-bold'>750 AED</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 border-b border-sky-600 py-2'>
                                <h1 className='text-gray-700 font-semibold'>Axcess:</h1>
                                <h1 className='text-gray-900 font-semibold'>N/A</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 border-b border-sky-600 py-2'>
                                <h1 className='text-gray-700 font-semibold'>Roadside:</h1>
                                <h1 className='text-gray-900 font-semibold'>GOLD</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 border-b border-sky-600 py-2'>
                                <h1 className='text-gray-700 font-semibold'>Insurer:</h1>
                                <h1 className='text-gray-900 font-semibold'>Salama</h1>
                            </div>
                            <button onClick={() => setOpenModal(!openModal)} className='w-56 h-12 rounded-xl bg-sky-500 hover:bg-sky-600 cursor-pointer duration-150 text-white font-bold flex justify-center items-center text-xl mx-auto mt-6'>
                                <h1>View Details</h1>
                            </button>
                            <p className='text-gray-600 font-semibold text-center mt-4'>Click here to see All Thirt Perty Options</p>
                        </div>
                    </div>
                    {
                        openModal && <ViewDetails closeModal={setOpenModal} />
                    }

                    <div className='flex flex-col bg-gradient-to-r from-indigo-50 via-purple-50 to-sky-50 rounded-xl shadow-md border py-6 px-6 h-96 cursor-pointer hover:-translate-y-6 duration-500'>
                        <h1 className='text-sky-600 uppercase font-bold text-center text-xl'>Cheapset Fully Comprehensive</h1>
                        <div className='my-4'>
                            <div className='flex justify-between items-center gap-2 border-b border-sky-600 py-2'>
                                <h1 className='text-gray-700 font-semibold'>Price:</h1>
                                <h1 className='text-sky-500 text-xl font-bold'>N/A</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 border-b border-sky-600 py-2'>
                                <h1 className='text-gray-700 font-semibold'>Axcess:</h1>
                                <h1 className='text-gray-900 font-semibold'>N/A</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 border-b border-sky-600 py-2'>
                                <h1 className='text-gray-700 font-semibold'>Roadside:</h1>
                                <h1 className='text-gray-900 font-semibold'>N/A</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 border-b border-sky-600 py-2'>
                                <h1 className='text-gray-700 font-semibold'>Insurer:</h1>
                                <h1 className='text-gray-900 font-semibold'>N/A</h1>
                            </div>
                            <button disabled className='w-56 h-12 rounded-xl bg-sky-300 cursor-pointer duration-150 text-white font-bold flex justify-center items-center text-xl mx-auto mt-6'>
                                <h1>Not Availabe</h1>
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col bg-gradient-to-r from-indigo-50 via-purple-50 to-sky-50 rounded-xl shadow-md border py-6 px-6 h-96 cursor-pointer hover:-translate-y-6 duration-500'>
                        <h1 className='text-sky-600 uppercase font-bold text-center text-xl'>Cheapset Agency Repaire</h1>
                        <div className='my-4'>
                            <div className='flex justify-between items-center gap-2 border-b border-sky-600 py-2'>
                                <h1 className='text-gray-700 font-semibold'>Price:</h1>
                                <h1 className='text-sky-500 text-xl font-bold'>N/A</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 border-b border-sky-600 py-2'>
                                <h1 className='text-gray-700 font-semibold'>Axcess:</h1>
                                <h1 className='text-gray-900 font-semibold'>N/A</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 border-b border-sky-600 py-2'>
                                <h1 className='text-gray-700 font-semibold'>Roadside:</h1>
                                <h1 className='text-gray-900 font-semibold'>N/A</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 border-b border-sky-600 py-2'>
                                <h1 className='text-gray-700 font-semibold'>Insurer:</h1>
                                <h1 className='text-gray-900 font-semibold'>N/A</h1>
                            </div>
                            <button disabled className='w-56 h-12 rounded-xl bg-sky-300 cursor-pointer duration-150 text-white font-bold flex justify-center items-center text-xl mx-auto mt-6'>
                                <h1>Not Availabe</h1>
                            </button>
                        </div>
                    </div>
                </div>

                <Link to='/quote-list' className='w-56 h-12 rounded-xl bg-sky-500 hover:bg-sky-600 cursor-pointer duration-150 text-white font-bold flex justify-center items-center gap-3 text-xl mx-auto mt-16'>
                    <h1>See All Quotes</h1>
                    <img className='w-6' src={rightArrow} alt="" />
                </Link>
            </div>

        </section>
    );
};

export default Driver;