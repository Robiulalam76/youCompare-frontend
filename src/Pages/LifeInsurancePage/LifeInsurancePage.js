import React, { useState } from 'react';
import { lifeInsuranceItems } from '../../utils/lifeInsuranceData/lifeInsuranceItems';
import PermanetInsuraceForm from '../../components/LifeInsuranceComponents/PermanetInsuraceForm/PermanetInsuraceForm';
import TermInsuranceForm from '../../components/LifeInsuranceComponents/PermanetInsuraceForm/TermInsuranceForm';
import GroupInsuranceForm from '../../components/LifeInsuranceComponents/GroupInsuranceForm/GroupInsuranceForm';

const LifeInsurancePage = () => {
    const [selectedTab, setSelectedTab] = useState('1')
    return (
        <section>
            <div className='my-12'>
                <h1 className='text-center text-xl font-bold text-sky-600'>Life Insurance</h1>
                <p className='text-sm text-center text-gray-600'>Prepare for your family's future in the case of an unexpected tragedy. Insurance Helps you.</p>
            </div>

            <div className='flex items-center gap-4 mb-6'>
                {
                    lifeInsuranceItems?.map((item, i) => (
                        <button onClick={() => setSelectedTab(item?.id)}
                            className={`w-fit h-6  flex items-center
                        ${selectedTab === item?.id ? 'border-b-2 border-sky-600 text-sky-600' : 'border-b-2 border-white'}`}>
                            <span>{item?.title}</span>
                        </button>
                    ))
                }
            </div>

            <hr className='mb-3 border-gray-600' />

            {
                selectedTab === '1' && <PermanetInsuraceForm formData={lifeInsuranceItems[0]} />
            }
            {
                selectedTab === '2' && <TermInsuranceForm formData={lifeInsuranceItems[1]} />
            }
            {
                selectedTab === '3' && <GroupInsuranceForm />
            }

        </section>
    );
};

export default LifeInsurancePage;