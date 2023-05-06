import React, { useState } from 'react';
import SingleTrip from './SingleTrip';
import MultiTrip from './MultiTrip';
import arrowDown from '../../accets/icons/arrow-down.svg'
import { Link } from 'react-router-dom';
import TripDestination from '../../components/TravelPageComponents/TripDestination';
import TripTransport from '../../components/TravelPageComponents/TripTransport';
import TripDetailsForm from '../../components/TravelPageComponents/TripDetailsForm';
import CoverOne from '../../components/TravelPageComponents/CoverOne';
import CoverCouple from '../../components/TravelPageComponents/CoverCouple';
import CoverFamily from '../../components/TravelPageComponents/CoverFamily';
import CoverGroup from '../../components/TravelPageComponents/CoverGroup';

const items = [
    { id: "1", title: "Single Trip" },
    { id: "2", title: "Multi Trip" }
]

const coverItems = [
    { id: '1', title: 'One' },
    { id: '2', title: 'Couple' },
    { id: '3', title: 'Family' },
    { id: '4', title: 'Group' }
]

const TravelPage = () => {
    const [open, setOpen] = useState(false)
    const [selectedTab, setSelectedTab] = useState("Single Trip")
    const [selectedCoverTab, setSelectedCoverTab] = useState('1')
    const [selectedTripTab, setSelectedTripTab] = useState('1')

    const handleSelectTab = (data) => {
        setSelectedTab(data)
        setOpen(false)
    }
    return (
        <section className='max-w-[700px] mx-auto'>
            <div className='my-6'>
                <h1 className='text-center text-xl font-bold text-sky-600'>Travel Insurance</h1>
                <p className='text-sm text-center text-gray-600'>Insurance that plans cover trip cancellation, travel medical & many more from your loss.</p>
            </div>


            <div className='relative mb-2 w-full bg-sky-50 p-2 border'>
                <span className='text-sm text-sky-600 mb-1'>Type of Travel Insurance</span>
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
                            items?.map(item => (
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
            <div className='w-full mx-auto mt-8'>

                {
                    selectedTab === "Multi Trip" && <>
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
                    </>
                }



                <form action=""
                    className='grid grid-cols-1 gap-2 max-w-[700px] mx-auto mt-8'>
                    {selectedCoverTab === '1' && <CoverOne />}
                    {selectedCoverTab === '2' && <CoverCouple />}
                    {selectedCoverTab === '3' && <CoverFamily />}
                    {selectedCoverTab === '4' && <CoverGroup />}
                </form>

            </div>



            <div className='mx-auto mt-8'>
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


                <Link to='/quotes' className='w-full h-10 bg-primary hover:bg-darkPrimary duration-300 flex justify-center items-center border-b-4 border-darkPrimary mt-6'>
                    <span className='font-bold text-white'>Continue</span>
                </Link>
            </div>

        </section>
    );
};

export default TravelPage;