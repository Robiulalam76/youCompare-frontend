import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const policyHolders = ["Male", "Female", "Enterprise"]
const aboutPackages = ["Amplia", "Limitada", "RC"]

const QuoteFilter = () => {
    const [viewPolicyHolder, setViewPolicyHolder] = useState(true)
    const [viewAboutPackages, setViewAboutPackages] = useState(true)
    const [selectedHolder, setSelectedHolder] = useState("Male")
    const [selectedPackage, setSelectedPackage] = useState("Male")

    const [thirtPartyLiablityDecease, setThirtPartyLiablityDecease] = useState()
    const [medicalExpensesPassengers, setMedicalExpensesPassengers] = useState()

    const [roadAssistance, setRoadAssistance] = useState(false)
    const [mediaclAssistance, setMediaclAssistance] = useState(false)

    return (
        <div className='w-full md:w-96 grid grid-cols-1 gap-4 cursor-pointer'>

            {/*---------- 1 no section--------- */}
            <div className='bg-white px-2 py-2 shadow-md'>
                <div onClick={() => setViewPolicyHolder(!viewPolicyHolder)} className='flex justify-between items-center'>
                    <span className='text-sm text-gray-700 font-bold'>About The Policy Holder</span>
                    {
                        viewPolicyHolder ? <MdKeyboardArrowUp className='text-xl' /> : <MdKeyboardArrowDown className='text-xl' />
                    }
                </div>
                {
                    viewPolicyHolder && <>
                        <span className='text-sm text-slate-400 uppercase'>The Policy Holder Will Be</span>
                        <div className='grid grid-cols-3 border mb-4 mt-2'>
                            {
                                policyHolders.map((value, i) => (
                                    <button onClick={() => setSelectedHolder(value)}
                                        className={`w-full h-10 font-bold flex justify-center items-center border-r
                            ${selectedHolder === value ? "bg-[#046BFF] text-white" : "bg-white text-gray-600"}`}>
                                        <span className=''>{value}</span>
                                    </button>
                                ))
                            }
                        </div>
                        <div>
                            <span className='text-sm text-slate-400 uppercase mb-1'>AGE</span>
                            <input className='w-full h-8 focus:outline-none px-2 border rounded text-gray-600 text-sm' type="date" name="age" id="" />
                        </div>
                    </>
                }
            </div>

            {/*---------- 2 no section--------- */}
            <div className='bg-white px-2 py-2 shadow-md'>
                <div onClick={() => setViewAboutPackages(!viewAboutPackages)} className='flex justify-between items-center'>
                    <span className='text-sm text-gray-700 font-bold'>About The Package</span>
                    {
                        viewAboutPackages ? <MdKeyboardArrowUp className='text-xl' /> : <MdKeyboardArrowDown className='text-xl' />
                    }
                </div>
                {
                    viewAboutPackages && <>
                        <div className='flex items-center gap-2 mb-1 mt-2'>
                            <span className='text-sm text-slate-400 uppercase'>Coverage Level</span>
                            <div className='w-4 h-4 overflow-hidden bg-slate-50 rounded-full text-gray-600 flex justify-center items-center border'><span>?</span></div>
                        </div>
                        <div className='grid grid-cols-3 border mb-4'>
                            {
                                aboutPackages.map((value, i) => (
                                    <button onClick={() => setSelectedPackage(value)}
                                        className={`w-full h-10 font-bold flex justify-center items-center border-r
                            ${selectedPackage === value ? "bg-[#046BFF] text-white" : "bg-white text-gray-600"}`}>
                                        <span className=''>{value}</span>
                                    </button>
                                ))
                            }
                        </div>
                    </>
                }
            </div>

            {/*---------- 3 no section--------- */}
            <div className='bg-white px-2 py-2 shadow-md'>
                <div onClick={() => setViewAboutPackages(!viewAboutPackages)} className='flex justify-between items-center'>
                    <span className='text-sm text-gray-700 font-bold'>No Name-------</span>
                    {
                        viewAboutPackages ? <MdKeyboardArrowUp className='text-xl' /> : <MdKeyboardArrowDown className='text-xl' />
                    }
                </div>

                <div className='mb-6'>
                    <div className='flex items-center gap-2 mb-1 mt-2'>
                        <span className='text-sm text-slate-400 uppercase'>Thirt Party Liablity Decease</span>
                        <div className='w-4 h-4 overflow-hidden bg-slate-50 rounded-full text-gray-600 flex justify-center items-center border'><span>?</span></div>
                    </div>
                    <div className='flex flex-col gap-1 mt-2'>
                        <span className='text-slate-600 font-bold' >${thirtPartyLiablityDecease}</span>
                        <input type="range" onChange={(e) => setThirtPartyLiablityDecease(e.target.value)} className="appearance-none w-full h-0.5 bg-slate-400 rounded outline-none slider-thumb" />
                    </div>
                </div>

                <div className='mb-6'>
                    <div className='flex items-center gap-2 mb-1 mt-2'>
                        <span className='text-sm text-slate-400 uppercase'>Medical Expenses Passengers</span>
                        <div className='w-4 h-4 overflow-hidden bg-slate-50 rounded-full text-gray-600 flex justify-center items-center border'><span>?</span></div>
                    </div>
                    <div className='flex flex-col gap-1 mt-2'>
                        <span className='text-slate-600 font-bold' >${medicalExpensesPassengers}</span>
                        <input type="range" onChange={(e) => setMedicalExpensesPassengers(e.target.value)} className="appearance-none w-full h-0.5 bg-slate-400 rounded outline-none slider-thumb" />
                    </div>
                </div>

                <div className='flex items-center justify-between mb-6'>
                    <div className='flex items-center gap-2 mb-1 mt-2'>
                        <span className='text-sm text-gray-700 font-bold'>Road Assistance</span>
                        <div className='w-4 h-4 overflow-hidden bg-slate-50 rounded-full text-gray-600 flex justify-center items-center border'><span>?</span></div>
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <div onClick={() => setRoadAssistance(!roadAssistance)}
                            className={`w-10 h-[18px] flex items-center rounded-full p-1 cursor-pointer
                                        ${roadAssistance ? 'bg-red-200' : 'bg-gray-300'}`}>
                            <div className={`h-3 w-3 rounded-full shadow-md transform duration-300 ease-in-out
                                        ${roadAssistance ? 'bg-green-600 transform translate-x-5' : 'bg-gray-500'}`}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between mb-6'>
                    <div className='flex items-center gap-2 mb-1 mt-2'>
                        <span className='text-sm text-gray-700 font-bold'>Medical Assistance</span>
                        <div className='w-4 h-4 overflow-hidden bg-slate-50 rounded-full text-gray-600 flex justify-center items-center border'><span>?</span></div>
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <div onClick={() => setMediaclAssistance(!mediaclAssistance)}
                            className={`w-10 h-[18px] flex items-center rounded-full p-1 cursor-pointer
                                        ${mediaclAssistance ? 'bg-red-200' : 'bg-gray-300'}`}>
                            <div className={`h-3 w-3 rounded-full shadow-md transform duration-300 ease-in-out
                                        ${mediaclAssistance ? 'bg-green-600 transform translate-x-5' : 'bg-gray-500'}`}>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default QuoteFilter;