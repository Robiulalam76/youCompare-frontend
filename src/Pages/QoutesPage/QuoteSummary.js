import React, { useState } from 'react';
import bRight from "../../accets/icons/blue-right.png"
import { RiVisaLine } from 'react-icons/ri';
import { FaCcMastercard, FaMoneyCheckAlt } from 'react-icons/fa';
import { SiAdguard, SiAmericanexpress } from 'react-icons/si';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { MdTimer } from 'react-icons/md';

const carVersions = [
    { _id: "1", title: "Number 1" },
    { _id: "2", title: "Number 2" },
    { _id: "3", title: "Number 3" },
    { _id: "4", title: "Number 4" },
]

const QuoteSummary = () => {
    const [carVersion, setCarVersion] = useState(false)
    const [selectedCarVersion, setSelectedCarVersion] = useState("Audio Q3 Premium")
    const hanldeSelectCarVersion = (data) => {
        setSelectedCarVersion(data?.title)
        setCarVersion(false)
    }
    return (
        <div className='mt-6'>
            <h1 className='text-gray-500 font-bold text-sm uppercase mb-4'>Coberturas Incluidas</h1>

            <div className='grid lg:grid-cols-2 gap-4 w-full h-fit'>

                <div className='grid grid-cols-1 gap-2 h-fit w-full'>
                    <div className='flex items-center gap-3'>
                        <img className='w-4' src={bRight} alt="" />
                        <span className='text-gray-500 text-sm font-bold'>Thirt Party Liablity (Included)</span>
                        <div className='w-5 h-5 overflow-hidden bg-slate-100 rounded-full text-gray-600 flex justify-center items-center font-bold border'><span>?</span></div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-4' src={bRight} alt="" />
                        <span className='text-gray-500 text-sm font-bold'>Theft (Included)</span>
                        <div className='w-5 h-5 overflow-hidden bg-slate-100 rounded-full text-gray-600 flex justify-center items-center font-bold border'><span>?</span></div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-4' src={bRight} alt="" />
                        <span className='text-gray-500 text-sm font-bold'>Damages (Included)</span>
                        <div className='w-5 h-5 overflow-hidden bg-slate-100 rounded-full text-gray-600 flex justify-center items-center font-bold border'><span>?</span></div>
                    </div>


                    <div className=''>
                        <h1 className='text-primary font-bold underline underline-offset-8'>See All Averages</h1>
                    </div>

                    <div>
                        <span className='text-sm text-slate-400 uppercase'>Confirm Your Car Version</span>
                        <div className='relative mb-2'>
                            <div onClick={() => setCarVersion(!carVersion)}
                                className='w-full h-10 border shadow flex justify-between px-4 items-center'>
                                <p className='text-gray-600'>{selectedCarVersion}</p>
                                {
                                    carVersion ? <IoMdArrowDropup className='text-xl' /> : <IoMdArrowDropdown className='text-xl' />
                                }
                            </div>
                            {
                                carVersion && <div className='absolute z-50 top-10 border shadow w-full max-h-44 overflow-y-auto'>
                                    {
                                        carVersions.map(w => (
                                            <button onClick={() => hanldeSelectCarVersion(w)} className='w-full h-10 flex justify-start items-center bg-white hover:bg-gray-100 px-4'>
                                                <h1>{w.title}</h1>
                                            </button>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    </div>

                </div>

                <div className='grid grid-cols-1 gap-2 h-fit w-full'>

                    <div className='w-full h-10 border-b flex justify-start items-center gap-4'>
                        <SiAdguard className='text-xl text-gray-600' />
                        <span className='text-gray-500 text-sm font-bold'>Best Price Guarantee</span>
                        <div className='w-5 h-5 overflow-hidden bg-slate-100 rounded-full text-gray-600 flex justify-center items-center font-bold border'><span>?</span></div>
                    </div>

                    <div className='w-full h-10 border-b flex justify-start items-center gap-4'>
                        <MdTimer className='text-xl text-gray-600' />
                        <span className='text-gray-500 text-sm font-bold'>100% Secure Purchase</span>
                        <div className='w-5 h-5 overflow-hidden bg-slate-100 rounded-full text-gray-600 flex justify-center items-center font-bold border'><span>?</span></div>
                    </div>

                    <div className='w-full h-10 border-b flex justify-start items-center gap-4'>
                        <FaMoneyCheckAlt className='text-xl text-gray-600' />
                        <span className='text-gray-500 text-sm font-bold'>30 Day Money Back Guarantee</span>
                        <div className='w-5 h-5 overflow-hidden bg-slate-100 rounded-full text-gray-600 flex justify-center items-center font-bold border'><span>?</span></div>
                    </div>

                    <div className='flex items-center gap-4 mt-6'>
                        <span className='text-gray-600 font-bold text-sm'>Pay at 3,6 and 12 MSI with</span>
                        <div className='flex items-center gap-3'>
                            <RiVisaLine className='text-blue-600' />
                            <FaCcMastercard />
                            <SiAmericanexpress className='text-sky-500' />
                        </div>
                    </div>

                </div>

            </div>




        </div>
    );
};

export default QuoteSummary;

