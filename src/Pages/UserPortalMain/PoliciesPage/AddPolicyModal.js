import React, { useEffect, useRef, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';

// {
//     _id: "5",
//     title: "Marigen 544ga",
//     subTitle: "ol54d54452",
//     premium: "654,540",
//     insurance_type: "Life",
//     effective_date: "05/12/2015",
//     anniversary_data: "25/12/2045",
//     policy_mode: "quantity",
//     coverage_name: "kodfopk",
//     amount: "1500",
//     limits: "1010",
//     show: "Featured"
// },

const insuranceTypes = ["Auto", "Travel", "Health", "Life"]

const AddPolicyModal = ({ openAddPolicyModal, setOpenAddPolicyModal }) => {
    const [insuranceType, setInsuranceType] = useState("Auto")
    console.log(openAddPolicyModal);


    let closeRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!closeRef.current.contains(e.target)) {
                setOpenAddPolicyModal(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });
    return (
        <>
            <section className='fixed z-50 top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center bg-gray-600 bg-opacity-70 p-4'>

                <div ref={closeRef} className='w-full md:w-[800px] h-fit p-2 rounded-xl shadow bg-white'>
                    <div className='w-full h-10 bg-primary text-white flex justify-between items-center px-2'>
                        <span>Create New Policy</span>
                        <button onClick={() => setOpenAddPolicyModal(false)}
                            className='w-8 h-8 flex justify-center items-center bg-slate-100 text-black hover:text-primary text-2xl rounded-full'>
                            <AiFillCloseCircle />
                        </button>

                    </div>
                    <form action="" className='grid md:grid-cols-2 gap-4 mt-4 p-2' >

                        <div className='md:col-span-2 grid md:grid-cols-2 gap-4' >
                            <div className='w-full'>
                                <span className='text-sm text-sky-600 mb-1'>Policy Title</span>
                                <input className='w-full h-8 px-2 bg-transparent focus:outline-none border' type="text" placeholder='Enter Policy Name' />
                            </div>

                            <div className='w-full'>
                                <span className='text-sm text-sky-600 mb-1'>Policy Subtitle</span>
                                <input className='w-full h-8 px-2 bg-transparent focus:outline-none border' type="text" placeholder='Enter Policy Subtitle' />
                            </div>
                        </div>


                        <div className='md:col-span-2 grid md:grid-cols-2 gap-4'>
                            <div className='w-full'>
                                <span className='text-sm text-sky-600 mb-1'>Policy Mode</span>
                                <input className='w-full h-8 px-2 bg-transparent focus:outline-none border' type="text" placeholder='Enter Policy Mode' />
                            </div>
                            <div className='w-full'>
                                <span className='text-sm text-sky-600 mb-1'>Covarage Name</span>
                                <input className='w-full h-8 px-2 bg-transparent focus:outline-none border' type="text" placeholder='Enter Covarage Name' />
                            </div>
                        </div>

                        <div className='col-span-2 grid grid-cols-3 gap-4'>
                            <div className='w-full'>
                                <span className='text-sm text-sky-600 mb-1'>Premium</span>
                                <input className='w-full h-8 px-2 bg-transparent focus:outline-none border' type="number" placeholder='Enter Premium' />
                            </div>
                            <div className='w-full'>
                                <span className='text-sm text-sky-600 mb-1'>Amount</span>
                                <input className='w-full h-8 px-2 bg-transparent focus:outline-none border' type="number" placeholder='Enter Amount' />
                            </div>
                            <div className='w-full'>
                                <span className='text-sm text-sky-600 mb-1'>Limits</span>
                                <input className='w-full h-8 px-2 bg-transparent focus:outline-none border' type="number" placeholder='Enter Limits' />
                            </div>
                        </div>



                        <div className='col-span-2 grid grid-cols-3 gap-4'>
                            <div className='relative group group-focus w-full'>
                                <span className='text-sm text-sky-600 mb-1'>Insurance Type</span>
                                <div className='flex justify-between items-center w-full h-8 border px-2'>
                                    <input className='w-full h-full cursor-pointer bg-transparent focus:outline-none focus:border-none border-none' type="text" value={insuranceType} readOnly />
                                    <BsChevronDown />
                                </div>
                                <div className='absolute z-40 top-12 hidden group-focus:block group-hover:block grid grid-cols-1 bg-slate-100 w-full max-h-28 h-fit overflow-y-auto'>
                                    {
                                        insuranceTypes.map((v, i) => (
                                            <div onClick={() => setInsuranceType(v)}
                                                className='flex justify-between items-center w-full h-8 border-x border-b px-2 hover:bg-primary hover:text-white text-black'>
                                                <span>{v}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className='w-full'>
                                <span className='text-sm text-sky-600 mb-1'>Effective Date</span>
                                <input className='w-full h-8 px-2 bg-transparent focus:outline-none border' type="date" placeholder='Effective Date' />
                            </div>
                            <div className='w-full'>
                                <span className='text-sm text-sky-600 mb-1'>Anniversary Date</span>
                                <input className='w-full h-8 px-2 bg-transparent focus:outline-none border' type="date" placeholder='Anniversary Date' />
                            </div>
                        </div>

                        <button
                            className='col-span-2 w-full h-10 rounded-md text-white text-sm bg-primary hover:bg-darkPrimary duration-300 flex justify-center items-center'>
                            <span>Create Policy</span>
                        </button>

                    </form>
                </div>

            </section>
        </>
    );
};

export default AddPolicyModal;