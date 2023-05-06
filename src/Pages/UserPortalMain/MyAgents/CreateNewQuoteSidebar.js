import { Drawer } from '@mui/material';
import React, { useState } from 'react';
import { AiFillCloseCircle } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"

const yesNo = ["Yes", "No"]

const CreateNewQuoteSidebar = ({ openAddNewQoute, setOpenAddNewQoute }) => {
    const [excess, setExcess] = useState("Yes")
    const [repairCar, setRepairCar] = useState("Yes")
    const [registrationService, setRegistrationService] = useState("Yes")
    const [demageLimit, setDemageLimit] = useState("Yes")
    const [roadSideAssistance, setRoadSideAssistance] = useState("Yes")
    // console.log(excess);
    return (
        <Drawer
            anchor="right"
            open={openAddNewQoute}
            onClose={() => setOpenAddNewQoute(false)}
        >

            <div className="pointer-events-auto w-full py-4 pl-4 pr-10">
                <div className='w-full h-10 bg-primary text-white flex justify-between items-center px-2'>
                    <span>Create New Quote</span>
                    <button onClick={() => setOpenAddNewQoute(false)}
                        className='w-8 h-8 flex justify-center items-center bg-slate-100 text-black hover:text-primary text-2xl rounded-full'>
                        <AiFillCloseCircle />
                    </button>

                </div>
                <form className='mt-6 cursor-pointer grid grid-cols-1 gap-3' >

                    <div className='w-full'>
                        <span className='text-sm text-sky-600 mb-1'>Insurance Name</span>
                        <input className='w-full h-8 px-2 bg-transparent focus:outline-none border' type="text" placeholder='Enter Insurance Name' />
                    </div>

                    <div className='grid grid-cols-2 gap-4 w-full'>
                        <div className='relative group group-focus w-full'>
                            <span className='text-sm text-sky-600 mb-1'>What is the Excess?</span>
                            <div className='flex justify-between items-center w-full h-8 border px-2'>
                                <input className='w-full h-full cursor-pointer bg-transparent focus:outline-none focus:border-none border-none' type="text" value={excess} readOnly />
                                <BsChevronDown />
                            </div>
                            <div className='absolute z-40 top-12 hidden group-focus:block group-hover:block grid grid-cols-1 bg-slate-100 w-full max-h-28 h-fit overflow-y-auto'>
                                {
                                    yesNo.map((v, i) => (
                                        <div onClick={() => setExcess(v)}
                                            className='flex justify-between items-center w-full h-8 border-x border-b px-2 hover:bg-primary hover:text-white text-black'>
                                            <span>{v}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='relative group group-focus w-full'>
                            <span className='text-sm text-sky-600 mb-1'>Who Will Repair Car?</span>
                            <div className='flex justify-between items-center w-full h-8 border px-2'>
                                <input className='w-full h-full cursor-pointer bg-transparent focus:outline-none focus:border-none border-none' type="text" value={repairCar} readOnly />
                                <BsChevronDown />
                            </div>
                            <div className='absolute z-40 top-12 hidden group-focus:block group-hover:block grid grid-cols-1 bg-slate-100 w-full max-h-28 h-fit overflow-y-auto'>
                                {
                                    yesNo.map((v, i) => (
                                        <div onClick={() => setRepairCar(v)}
                                            className='flex justify-between items-center w-full h-8 border-x border-b px-2 hover:bg-primary hover:text-white text-black'>
                                            <span>{v}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4 w-full'>
                        <div className='relative group group-focus w-full'>
                            <span className='text-sm text-sky-600 mb-1'>Free Registration Service?</span>
                            <div className='flex justify-between items-center w-full h-8 border px-2'>
                                <input className='w-full h-full cursor-pointer bg-transparent focus:outline-none focus:border-none border-none' type="text" value={registrationService} readOnly />
                                <BsChevronDown />
                            </div>
                            <div className='absolute z-40 top-12 hidden group-focus:block group-hover:block grid grid-cols-1 bg-slate-100 w-full max-h-28 h-fit overflow-y-auto'>
                                {
                                    yesNo.map((v, i) => (
                                        <div onClick={() => setRegistrationService(v)}
                                            className='flex justify-between items-center w-full h-8 border-x border-b px-2 hover:bg-primary hover:text-white text-black'>
                                            <span>{v}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='relative group group-focus w-full'>
                            <span className='text-sm text-sky-600 mb-1'>Thart Perty Demage Limit</span>
                            <div className='flex justify-between items-center w-full h-8 border px-2'>
                                <input className='w-full h-full cursor-pointer bg-transparent focus:outline-none focus:border-none border-none' type="text" value={demageLimit} readOnly />
                                <BsChevronDown />
                            </div>
                            <div className='absolute z-40 top-12 hidden group-focus:block group-hover:block grid grid-cols-1 bg-slate-100 w-full max-h-28 h-fit overflow-y-auto'>
                                {
                                    yesNo.map((v, i) => (
                                        <div onClick={() => setDemageLimit(v)}
                                            className='flex justify-between items-center w-full h-8 border-x border-b px-2 hover:bg-primary hover:text-white text-black'>
                                            <span>{v}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className='relative group group-focus w-full'>
                        <span className='text-sm text-sky-600 mb-1'>Roadside Assistance</span>
                        <div className='flex justify-between items-center w-full h-8 border px-2'>
                            <input className='w-full h-full cursor-pointer bg-transparent focus:outline-none focus:border-none border-none' type="text" value={roadSideAssistance} readOnly />
                            <BsChevronDown />
                        </div>
                        <div className='absolute z-40 top-12 hidden group-focus:block group-hover:block grid grid-cols-1 bg-slate-100 w-full max-h-28 h-fit overflow-y-auto'>
                            {
                                yesNo.map((v, i) => (
                                    <div onClick={() => setRoadSideAssistance(v)}
                                        className='flex justify-between items-center w-full h-8 border-x border-b px-2 hover:bg-primary hover:text-white text-black'>
                                        <span>{v}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <button onClick={() => setOpenAddNewQoute(false)}
                        className='w-full h-10 rounded-md text-white text-sm bg-primary hover:bg-darkPrimary duration-300 flex justify-center items-center'>
                        <span>Create Quote</span>
                    </button>

                </form>



            </div>
        </Drawer>
    );
};

export default CreateNewQuoteSidebar;