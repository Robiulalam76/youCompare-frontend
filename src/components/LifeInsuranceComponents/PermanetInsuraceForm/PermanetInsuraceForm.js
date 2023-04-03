import React, { useState } from 'react';
import MyselfForm from './CoverItems/MyselfForm';
import MyPertnarForm from './CoverItems/MyPertnarFrom';
import FatherForm from './CoverItems/FatherForm';
import MotherForm from './CoverItems/MotherForm';
import ParentsForm from './CoverItems/ParentsForm';

const PermanetInsuraceForm = ({ formData }) => {
    const [selectedTab, setSelectedTab] = useState("1")
    // console.log(formData);
    return (
        <div className='w-full'>
            <h1 className='text-left text-sky-600 mb-4'> Parmanet Insurance</h1>

            <div className='grid md:grid-cols-2 items-start gap-x-4 gap-y-2 w-full'>
                {
                    formData?.children?.map((item, i) => <>
                        {
                            item?.type === "input" && <>
                                <div className='flex flex-col justify-center items-start w-full'>
                                    <span className='text-sm text-sky-600 mb-1'>{item?.title}</span>
                                    <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer'
                                        type='number' name={item?.name} placeholder={item?.placeholder} />
                                </div>
                            </>
                        }
                        {
                            item?.type === "tabs" && <div>
                                <span className='text-left text-sky-600'>{item?.title}</span>
                                <div className='flex items-center flex-wrap gap-2 md:gap-4 mt-2 w-full'>
                                    {
                                        item?.children?.map(item => (
                                            <button
                                                onClick={() => setSelectedTab(item?.id)}
                                                key={item.id}
                                                className={`flex justify-center items-center h-8 rounded-3xl 
                                                    w-fit px-2 text-sm 
                                                    ${selectedTab === item?.id ? 'bg-sky-600 text-white' : 'bg-white border border-gray-300 text-gray-500'}`}
                                                value={item?.title}>
                                                <span className='text-sm text-left md:text-center'>{item?.title}</span>
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                        }
                    </>)
                }
            </div>

            <div className='mt-6'>
                {
                    selectedTab === "1" && <MyselfForm />
                }
                {
                    selectedTab === "2" && <MyPertnarForm />
                }
                {
                    selectedTab === "3" && <FatherForm />
                }
                {
                    selectedTab === "4" && <MotherForm />
                }
                {
                    selectedTab === "5" && <ParentsForm />
                }
            </div>

        </div>
    );
};

export default PermanetInsuraceForm;