import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs"
import { HiStar } from "react-icons/hi"
import { BsFacebook, BsLinkedin } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
import bRight from "../../../accets/icons/blue-right.png"

const AgentDetails = () => {
    return (
        <section className='p-2 md:px-4 lg:px-6'>
            <div className='grid lg:grid-cols-3 gap-4 w-full'>
                <div className='lg:col-span-1 w-full border rounded-3xl bg-white p-4'>
                    <BsThreeDotsVertical className='mx-auto mr-0' />

                    <div>
                        <img className='w-16 h-16 object-cover mx-auto' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                        <div className='flex justify-center items-center gap-2'>
                            <h1 className='text-center font-bold text-black'>Robin Jhonson</h1>
                            <img className='w-4' src={bRight} alt="" />
                        </div>
                        <div className='flex justify-center items-center gap-1 text-yellow-500 text-xl'>
                            <HiStar />
                            <HiStar />
                            <HiStar />
                            <HiStar />
                            <HiStar />
                        </div>
                    </div>

                    <hr className='my-2' />

                    <div className='grid grid-cols-1 gap-1 w-fit'>

                        <div className='grid grid-cols-2 items-center gap-2'>
                            <div className='flex justify-between items-center w-full'>
                                <span className='text-black text-sm'>Age</span>
                                <span className='text-gray-500'>:</span>
                            </div>
                            <span className='text-xs text-gray-500'>35 Years</span>
                        </div>

                        <div className='grid grid-cols-2 items-center gap-2'>
                            <div className='flex justify-between items-center w-full'>
                                <span className='text-black text-sm'>City</span>
                                <span className='text-gray-500'>:</span>
                            </div>
                            <span className='text-xs text-gray-500'>Thakurgaon</span>
                        </div>

                        <div className='grid grid-cols-2 items-center gap-2'>
                            <div className='flex justify-between items-center w-full'>
                                <span className='text-black text-sm'>State</span>
                                <span className='text-gray-500'>:</span>
                            </div>
                            <span className='text-xs text-gray-500'>Rangpur</span>
                        </div>

                        <div className='grid grid-cols-2 items-center gap-2'>
                            <div className='flex justify-between items-center w-full'>
                                <span className='text-black text-sm'>Country</span>
                                <span className='text-gray-500'>:</span>
                            </div>
                            <span className='text-xs text-gray-500'>Bangladesh</span>
                        </div>

                        <div className='grid grid-cols-2 items-center gap-2'>
                            <div className='flex justify-between items-center w-full'>
                                <span className='text-black text-sm'>Post Code</span>
                                <span className='text-gray-500'>:</span>
                            </div>
                            <span className='text-xs text-gray-500'>5500</span>
                        </div>

                        <div className='grid grid-cols-2 items-center gap-2'>
                            <div className='flex justify-between items-center w-full'>
                                <span className='text-black text-sm'>Phone</span>
                                <span className='text-gray-500'>:</span>
                            </div>
                            <span className='text-xs text-gray-500'>9805245115</span>
                        </div>

                        <div className='grid grid-cols-2 items-center gap-2'>
                            <div className='flex justify-between items-center w-full'>
                                <span className='text-black text-sm'>Email</span>
                                <span className='text-gray-500'>:</span>
                            </div>
                            <span className='text-xs text-gray-500'>useremail@gmail.com</span>
                        </div>

                    </div>

                    <hr className='my-2' />

                    <div className='flex justify-center items-center gap-4'>
                        <button className='w-10 h-10 bg-gray-100 hover:bg-primary hover:text-white rounded-full flex justify-center items-center text-xl'>
                            <BsFacebook />
                        </button>
                        <button className='w-10 h-10 bg-gray-100 hover:bg-primary hover:text-white rounded-full flex justify-center items-center text-xl'>
                            <AiFillTwitterCircle />
                        </button>
                        <button className='w-10 h-10 bg-gray-100 hover:bg-primary hover:text-white rounded-full flex justify-center items-center text-xl'>
                            <BsLinkedin />
                        </button>
                    </div>

                </div>


                <div className='lg:col-span-2 flex-grow border rounded-3xl bg-white p-4 w-full'>
                    <h1 className='font-bold text-left text-sky-900'>Agent Details</h1>
                    <hr className='my-2' />

                    <span className='text-gray-500 text-xs font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus eos quibusdam odit facilis impedit reprehenderit dignissimos consectetur officiis magni nostrum eveniet repellendus quisquam quam nulla, veritatis delectus, reiciendis quas labore.</span>


                    <div className='w-fit mt-4'>
                        <div className='grid grid-cols-2 items-center gap-2'>
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex items-center gap-2 w-full'>
                                    <img className='w-4' src={bRight} alt="" />
                                    <span className='text-black font-bold text-sm'>Agency</span>
                                </div>
                                <span className='text-gray-500'>:</span>
                            </div>
                            <span className='text-xs text-gray-500'>All Amarical React Estate</span>
                        </div>

                        <div className='grid grid-cols-2 items-center gap-2'>
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex items-center gap-2 w-full'>
                                    <img className='w-4' src={bRight} alt="" />
                                    <span className='text-black font-bold text-sm'>Agency License</span>
                                </div>
                                <span className='text-gray-500'>:</span>
                            </div>
                            <span className='text-xs text-gray-500'>8484656545455fg54</span>
                        </div>

                        <div className='grid grid-cols-2 items-center gap-2'>
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex items-center gap-2 w-full'>
                                    <img className='w-4' src={bRight} alt="" />
                                    <span className='text-black font-bold text-sm'>Tax Number</span>
                                </div>
                                <span className='text-gray-500'>:</span>
                            </div>
                            <span className='text-xs text-gray-500'>8484656545455fg54</span>
                        </div>

                        <div className='grid grid-cols-2 items-center gap-2'>
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex items-center gap-2 w-full'>
                                    <img className='w-4' src={bRight} alt="" />
                                    <span className='text-black font-bold text-sm'>Service Area</span>
                                </div>
                                <span className='text-gray-500'>:</span>
                            </div>
                            <span className='text-xs text-gray-500'>Dhaka, Bangladesh</span>
                        </div>
                    </div>

                    <hr className='my-2' />

                    <div>
                        <span className='text-black font-bold text-sm'>Property Status</span>

                        <div className='grid grid-cols-3 gap-2'>

                            <div className='flex flex-col items-center justify-center w-full h-fit border rounded-md shadow p-2'>
                                <span className='text-sm text-black text-center'>Total Quotes</span>
                                <span className='text-center font-bold text-black'>1200</span>
                                <div className='w-16 h-16 bg-rose-600 rounded-full mx-auto'></div>
                            </div>

                            <div className='flex flex-col items-center justify-center w-full h-fit border rounded-md shadow p-2'>
                                <span className='text-sm text-black text-center'>Properties Sold</span>
                                <span className='text-center font-bold text-black'>900</span>
                                <div className='w-16 h-16 bg-green-600 rounded-full mx-auto'></div>
                            </div>

                            <div className='flex flex-col items-center justify-center w-full h-fit border rounded-md shadow p-2'>
                                <span className='text-sm text-black text-center'>Properties Rent</span>
                                <span className='text-center font-bold text-black'>300</span>
                                <div className='w-16 h-16 bg-sky-600 rounded-full mx-auto'></div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AgentDetails;