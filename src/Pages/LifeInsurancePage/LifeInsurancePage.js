import React, { useState } from 'react';
import { lifeInsuranceItems } from '../../utils/lifeInsuranceData/lifeInsuranceItems';
import PermanetInsuraceForm from '../../components/LifeInsuranceComponents/PermanetInsuraceForm/PermanetInsuraceForm';
import TermInsuranceForm from '../../components/LifeInsuranceComponents/PermanetInsuraceForm/TermInsuranceForm';
import GroupInsuranceForm from '../../components/LifeInsuranceComponents/GroupInsuranceForm/GroupInsuranceForm';
import arrowDown from '../../accets/icons/arrow-down.svg'

const LifeInsurancePage = () => {
    const [open, setOpen] = useState(false)
    const [selectedTab, setSelectedTab] = useState('Permanent Life')

    const handleSelectTab = (data) => {
        setSelectedTab(data)
        setOpen(false)
    }

    return (
        <section className='max-w-[800px] mx-auto'>
            <div className='my-12'>
                <h1 className='text-center text-xl font-bold text-sky-600'>Life Insurance</h1>
                <p className='text-sm text-center text-gray-600'>Prepare for your family's future in the case of an unexpected tragedy. Insurance Helps you.</p>
            </div>


            <div className='relative mb-2 w-full bg-sky-50 p-2 border'>
                <span className='text-sm text-sky-600 mb-1'>Select Insurance</span>
                <div onClick={() => setOpen(!open)}
                    className='w-full h-8 border cursor-pointer flex justify-between px-4 items-center'>
                    <p className='text-gray-600 text-sm'>
                        {selectedTab ? selectedTab : 'Select Option'}
                    </p>
                    <img className='w-6' src={arrowDown} alt="" />
                </div>
                {
                    open && <div className='absolute z-50 top-16 border w-full max-h-44 overflow-y-auto'>
                        {
                            lifeInsuranceItems?.map(item => (
                                <button onClick={() => handleSelectTab(item?.title)}
                                    className='w-full h-8 flex justify-start items-center bg-white hover:bg-gray-100 px-4'>
                                    <h1 className='text-sm'>{item?.title}</h1>
                                </button>
                            ))
                        }
                    </div>
                }
            </div>

            <hr className='mb-4' />

            {
                selectedTab === 'Permanent Life' && <PermanetInsuraceForm formData={lifeInsuranceItems[0]} />
            }
            {
                selectedTab === 'Term Life' && <TermInsuranceForm formData={lifeInsuranceItems[1]} />
            }
            {
                selectedTab === 'Group Life' && <GroupInsuranceForm />
            }

        </section>
    );
};

export default LifeInsurancePage;