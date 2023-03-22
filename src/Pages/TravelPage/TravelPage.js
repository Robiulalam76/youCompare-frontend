import React, { useState } from 'react';
import MainContactDetails from '../../components/TravelPageComponents/MainContactDetails';
import SelectCountries from '../../components/TravelPageComponents/SelectCountries';


const items = [
    { id: '1', title: 'Schengen countries' },
    { id: '2', title: 'Hajj / Umrah' },
    { id: '3', title: 'Arab countries  gcc' },
    { id: '4', title: 'Worldwide' },
    { id: '5', title: 'Inbound Travel to UAE' },
]

const TravelPage = () => {
    const [selectedTab, setSelectedTab] = useState('1')
    return (
        <section className='relative bg-whtie px-4 min-h-screen'>
            <div className='max-w-[1440px] mx-auto py-12'>
                <div className='w-full md:w-[800px] mx-auto'>
                    <h1 className='text-3xl font-bold text-rose-600 text-center mb-6'>Find the right travel insurance for your needs</h1>
                </div>

                <div className='flex items-center md:justify-center flex-wrap gap-4'>

                    {
                        items.map(item => (
                            <button onClick={() => setSelectedTab(item.id)}
                                key={item.id}
                                className={`flex justify-start md:justify-center items-center h-12 w-full md:w-fit px-4 ${selectedTab === item.id ? 'bg-blue-900 text-white' : 'bg-white border border-blue-900 text-blue-900'}`}>
                                <span className='uppercase text-left md:text-center'>{item?.title}</span>
                            </button>
                        ))
                    }
                </div>

                {
                    selectedTab === '1' &&
                    <MainContactDetails />
                }
                {
                    selectedTab === '2' &&
                    <MainContactDetails />
                }
                {
                    selectedTab === '3' &&
                    <MainContactDetails />
                }
                {
                    selectedTab === '4' &&
                    <>
                        <SelectCountries />
                        <MainContactDetails />
                    </>
                }
                {
                    selectedTab === '5' &&
                    <MainContactDetails />
                }

            </div>
        </section>
    );
};

export default TravelPage;