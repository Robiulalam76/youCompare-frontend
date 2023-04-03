import React, { useState } from 'react';

const types = ["Personal", "Business"]
const items = ["One Person", "Couple", "Family", "Group"]

const HealthForm = () => {
    const [selectedType, setSelectedType] = useState("Personal")
    const [selectedItem, setSelectedItem] = useState("One Person")
    return (
        <div className='grid md:grid-cols-2 gap-4 w-full'>

            <div className='h-fit w-full flex flex-col justify-center items-start rounded-md'>
                <span className='text-sm text-sky-600 mb-1'>Type of Insurance</span>
                <div className='flex items-center gap-4'>
                    {
                        types?.map((type, i) => (
                            <button key={i} onClick={() => setSelectedType(type)}
                                className={`text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl ${type === selectedType ? "border border-sky-600 bg-sky-600 text-white" : "border border-gray-300 bg-white text-gray-500"}`}>
                                <span>{type}</span>
                            </button>
                        ))
                    }
                </div>
            </div>

            <div className='h-fit w-full flex flex-col justify-center items-start rounded-md'>
                <span className='text-sm text-sky-600 mb-1'>Who is the cover for?</span>
                <div className='flex items-center gap-4'>
                    {
                        items?.map((item, i) => (
                            <button key={i} onClick={() => setSelectedItem(item)}
                                className={`text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl ${item === selectedItem ? "border border-sky-600 bg-sky-600 text-white" : "border border-gray-300 bg-white text-gray-500"}`}>
                                <span>{item}</span>
                            </button>
                        ))
                    }

                </div>
            </div>


            {
                selectedItem === "Group" && (
                    <div className='flex flex-col justify-center items-start w-full'>
                        <span className='text-sm text-sky-600 mb-1'>Organization Name</span>
                        <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer'
                            type='text' name="organizationName" placeholder="Organization Name                            " />
                    </div>
                )
            }


            <div className='flex flex-col justify-center items-start w-full'>
                <span className='text-sm text-sky-600 mb-1'>Full Name</span>
                <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer'
                    type='text' name="Name" placeholder="Full Name" />
            </div>

            <div className='flex flex-col justify-center items-start w-full'>
                <span className='text-sm text-sky-600 mb-1'>Email ID</span>
                <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer'
                    type='email' name="email" placeholder="Email ID" />
            </div>

            <div className='flex flex-col justify-center items-start w-full'>
                <span className='text-sm text-sky-600 mb-1'>Mobile</span>
                <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer'
                    type='number' name="mobile" placeholder="Mobile Number" />
            </div>

        </div>
    );
};

export default HealthForm;