import React, { useState } from 'react';
import CoverCouple from '../../components/TravelPageComponents/CoverCouple';
import CoverFamily from '../../components/TravelPageComponents/CoverFamily';
import CoverGroup from '../../components/TravelPageComponents/CoverGroup';
import CoverOne from '../../components/TravelPageComponents/CoverOne';
import MainContactDetails from '../../components/TravelPageComponents/MainContactDetails';
import SelectCountries from '../../components/TravelPageComponents/SelectCountries';
import TripDestination from '../../components/TravelPageComponents/TripDestination';
import TripDetailsForm from '../../components/TravelPageComponents/TripDetailsForm';
import TripTransport from '../../components/TravelPageComponents/TripTransport';


// const items = [
//     { id: '1', title: 'Schengen countries' },
//     { id: '2', title: 'Hajj / Umrah' },
//     { id: '3', title: 'Arab countries  gcc' },
//     { id: '4', title: 'Worldwide' },
//     { id: '5', title: 'Inbound Travel to UAE' },
// ]

const coverItems = [
    { id: '1', title: 'One' },
    { id: '2', title: 'Couple' },
    { id: '3', title: 'Family' },
    { id: '4', title: 'Group' }
]

const SingleTrip = () => {
    const [selectedCoverTab, setSelectedCoverTab] = useState('1')
    const [selectedTripTab, setSelectedTripTab] = useState('1')
    return (
        <section className='relative bg-whtie px-4 min-h-screen'>
            <div className='max-w-[1440px] mx-auto py-12'>
                <div className='w-full md:w-[800px] mx-auto'>
                    <h1 className='text-2xl font-bold text-rose-600 text-center mb-6'>Find the right travel insurance for your needs</h1>
                </div>

                <div className=' max-w-[700px] mx-auto mt-8'>

                    <span className='text-left text-sky-600'>How many people are travelling?</span>
                    <div className='flex items-center flex-wrap gap-2 md:gap-4 mt-2 w-full'>
                        {
                            coverItems?.map(item => (
                                <button onClick={() => setSelectedCoverTab(item?.id)}
                                    key={item.id}
                                    className={`flex justify-center items-center h-8 rounded-3xl w-20 
                                ${selectedCoverTab === item?.id ? 'bg-sky-600 text-white' : 'bg-white border border-sky-600 text-sky-600'}`}
                                    value={item?.title}>
                                    <span className='text-sm uppercase text-left md:text-center'>{item?.title}</span>
                                </button>
                            ))
                        }
                    </div>

                    <hr className='border-sky-300 my-6' />

                    <form action=""
                        className='grid grid-cols-1 gap-2 max-w-[700px] mx-auto mt-8'>
                        {selectedCoverTab === '1' && <CoverOne />}
                        {selectedCoverTab === '2' && <CoverCouple />}
                        {selectedCoverTab === '3' && <CoverFamily />}
                        {selectedCoverTab === '4' && <CoverGroup />}
                    </form>

                </div>



                <div className=' max-w-[700px] mx-auto mt-8'>
                    <span className='text-xl text-left text-black font-bold block mb-6'>Trip Details</span>


                    <div className='flex items-center gap-4 mb-6'>
                        <button onClick={() => setSelectedTripTab('1')}
                            className={`w-fit h-6  flex items-center
                        ${selectedTripTab === '1' ? 'border-b-2 border-sky-600 text-sky-600' : 'border-b-2 border-white'}`}>
                            <span>Destination</span>
                        </button>
                        <button onClick={() => setSelectedTripTab('2')}
                            className={`w-fit h-6  flex items-center
                        ${selectedTripTab === '2' ? 'border-b-2 border-sky-600 text-sky-600' : 'border-b-2 border-white'}`}>
                            <span>Mode of Transport</span>
                        </button>
                    </div>

                    {
                        selectedTripTab === '1' && <TripDestination />
                    }
                    {
                        selectedTripTab === '2' && <TripTransport />
                    }

                    <TripDetailsForm />

                </div>











                {/* <div className='flex items-center md:justify-center flex-wrap gap-4'>

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
                } */}

            </div>
        </section>
    );
};

export default SingleTrip;