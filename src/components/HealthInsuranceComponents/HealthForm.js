import React, { useState } from 'react';
import OnPersonForm from './OnPersonForm';
import CoupleForm from './CoupleForm';
import FamilyForm from './FamilyForm';
import GroupForm from './GroupForm';

const types = ["Personal", "Business"]
const items = ["One Person", "Couple", "Family", "Group"]

const HealthForm = () => {
    const [selectedType, setSelectedType] = useState("Personal")
    const [selectedItem, setSelectedItem] = useState("One Person")
    return (
        <div className='w-full'>
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
            </div>

            <div className='mt-4' >
                {
                    selectedItem === "One Person" && <OnPersonForm />
                }
                {
                    selectedItem === "Couple" && <CoupleForm />
                }
                {
                    selectedItem === "Family" && <FamilyForm />
                }
                {
                    selectedItem === "Group" && <GroupForm />
                }
            </div>
        </div>
    );
};

export default HealthForm;