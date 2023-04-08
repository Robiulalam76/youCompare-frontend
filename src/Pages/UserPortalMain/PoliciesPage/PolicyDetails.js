import React, { useState } from 'react';
import { BsGearFill } from "react-icons/bs"
import { RiDeleteBin5Fill } from "react-icons/ri"
import PolicyDetailsDrawer from './PolicyDetailsDrawer';

const tabs = ["Active", "Expired", "Featured"]

const policies = [
    {
        _id: "1",
        title: "Marigen 544ga",
        subTitle: "ol54d54452",
        premium: "654,540",
        insurance_type: "Life",
        effective_data: "05/12/2015",
        anniversary_data: "25/12/2045",
        policy_mode: "quantity",
        coverage_name: "kodfopk",
        amount: "1500",
        limits: "1010",
        show: "Active"
    },
    {
        _id: "2",
        title: "Marigen 544ga",
        subTitle: "ol54d54452",
        premium: "654,540",
        insurance_type: "Life",
        effective_data: "05/12/2015",
        anniversary_data: "25/12/2045",
        policy_mode: "quantity",
        coverage_name: "kodfopk",
        amount: "1500",
        limits: "1010",
        show: "Active"
    },
    {
        _id: "3",
        title: "Marigen 544ga",
        subTitle: "ol54d54452",
        premium: "654,540",
        insurance_type: "Life",
        effective_data: "05/12/2015",
        anniversary_data: "25/12/2045",
        policy_mode: "quantity",
        coverage_name: "kodfopk",
        amount: "1500",
        limits: "1010",
        show: "Expired"
    },
    {
        _id: "4",
        title: "Marigen 544ga",
        subTitle: "ol54d54452",
        premium: "654,540",
        insurance_type: "Life",
        effective_data: "05/12/2015",
        anniversary_data: "25/12/2045",
        policy_mode: "quantity",
        coverage_name: "kodfopk",
        amount: "1500",
        limits: "1010",
        show: "Featured"
    },
    {
        _id: "5",
        title: "Marigen 544ga",
        subTitle: "ol54d54452",
        premium: "654,540",
        insurance_type: "Life",
        effective_data: "05/12/2015",
        anniversary_data: "25/12/2045",
        policy_mode: "quantity",
        coverage_name: "kodfopk",
        amount: "1500",
        limits: "1010",
        show: "Featured"
    },
]

const PolicyDetails = () => {
    const [selectedTab, setSelectedTab] = useState("Active")
    const [selectedPolicy, setSelectedPolicy] = useState(null)
    return (
        <section className='p-2 md:px-4 lg:px-6'>
            <h1 className='text-left text-black font-bold mb-2'>Policy Details</h1>
            <div className='border-t border-x'>
                <div className='grid grid-cols-3 bg-slate-200'>
                    {
                        tabs.map((tab, i) => (
                            <button onClick={() => setSelectedTab(tab)}
                                className={`w-full h-12 flex justify-center items-center text-sm
                            ${selectedTab === tab ? "bg-primary text-white" : "bg-slate-200 text-black"}`}>
                                <span>{tab}</span>
                            </button>
                        ))
                    }
                </div>
                <div className='grid grid-cols-1'>
                    {
                        policies?.map((policy, i) => (
                            <button onClick={() => setSelectedPolicy(policy)}
                                className={`w-full h-14 grid grid-cols-3 items-center border-b
                                ${selectedTab === policy?.show ? "block" : "hidden"}
                    ${selectedPolicy?._id === policy?._id ? "bg-slate-100" : "bg-white hover:bg-slate-100"}`}>

                                <div className='flex justify-center items-center gap-3' >
                                    <BsGearFill className='text-primary text-2xl' />
                                    <div className='flex flex-col justify-start items-start gap-1'>
                                        <h1 className='text-black font-bold text-sm'>{policy?.title}</h1>
                                        <span className='text-xs text-gray-500'>{policy?.subTitle}</span>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center text-white bg-primary rounded-xl w-fit px-2 h-6 text-xs mx-auto'>
                                    <span>No Agent</span>
                                </div>
                                <div className='flex flex-col items-center justify-center gap-1 text-xs'>
                                    <button className='w-7 h-7 flex justify-center items-center bg-slate-100 hover:bg-primary text-rose-500 hover:text-white text-xl rounded-full'>
                                        <RiDeleteBin5Fill />
                                    </button>
                                    <span>${policy?.premium}</span>
                                </div>


                            </button>
                        ))
                    }
                </div>
            </div>

            {
                selectedPolicy && <PolicyDetailsDrawer policy={selectedPolicy} setSelectedPolicy={setSelectedPolicy}
                    open={selectedPolicy ? true : false} />
            }
        </section>
    );
};

export default PolicyDetails;