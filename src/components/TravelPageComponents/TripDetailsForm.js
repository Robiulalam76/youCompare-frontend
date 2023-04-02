import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { countries } from "../../Data/countries.js";
import arrowDown from '../../accets/icons/arrow-down.svg'

const demoLocations = ["Banglades", "India", "Pakistan"]

const TripDetailsForm = () => {
    const { pathname } = useLocation()
    const [locations, setLocations] = useState(demoLocations)
    const [showItems, setShowItems] = useState(0)


    const handleSetLocations = (data) => {
        setLocations([...locations, data])
        showItems(0)
    }


    console.log(locations);

    return (
        <form action="" className='mt-6' >

            {
                locations && <div className='flex items-center gap-3 flex-wrap'>
                    {
                        locations?.map(location => (
                            <button className='flex justify-center items-center border rounded-3xl w-fit px-2 py-1 text-black'>
                                <span>{location}</span>
                            </button>
                        ))
                    }
                </div>
            }

            {
                pathname === "/travel/multi-trip" && <>
                    <div className='flex flex-col justify-center items-start'>
                        <span className='text-sm text-sky-600 mb-1'>Location</span>
                        <div className='relative w-full'>
                            <div onClick={() => setShowItems(showItems === 1 ? 0 : 1)}
                                className='w-full h-8 border border-gray-300 hover:border-sky-600 focus:outline-none flex justify-between px-2 items-center'>
                                <p className='text-gray-600 text-sm'>Select Locations</p>
                                <img className='w-5' src={arrowDown} alt="" />
                            </div>
                            {
                                showItems === 1 && <div className='absolute z-50 top-8 border-x border-b border-gray-400 hover:border-sky-600 focus:outline-none shadow w-full max-h-44 overflow-y-auto'>
                                    {
                                        countries?.map(value => (
                                            <button onClick={() => handleSetLocations(value?.name)} className='w-full h-8 flex justify-start items-center bg-white hover:bg-sky-100 text-sm px-4'>
                                                <h1>{value?.name}</h1>
                                            </button>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </>
            }

            <div className='grid grid-cols-2 gap-4 mt-6'>
                <div className='flex flex-col justify-center items-start'>
                    <span className='text-sm text-sky-600 mb-1'>Journey Start</span>
                    <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer' type='date' name="journey_start" placeholder='Journey Start' />
                </div>

                <div className='flex flex-col justify-center items-start'>
                    <span className='text-sm text-sky-600 mb-1'>Journey End</span>
                    <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer' type='date' name="journey_End" placeholder='Journey Start' />
                </div>


                <div className='flex flex-col justify-center items-start'>
                    <span className='text-sm text-sky-600 mb-1'>Full Name</span>
                    <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer' type='text' name="name" placeholder='Full Name' />
                </div>

                <div className='flex flex-col justify-center items-start'>
                    <span className='text-sm text-sky-600 mb-1'>Email</span>
                    <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer' type='email' name="email" placeholder='Ex: jhons@gmail.com' />
                </div>

                {
                    pathname === "/travel/single-trip" && <>
                        <div className='flex flex-col justify-center items-start'>
                            <span className='text-sm text-sky-600 mb-1'>Location</span>
                            <select className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer' name="location">
                                <option className='' value="Afghan">Afghan</option>
                                <option className='' value="Albanian">Albanian</option>
                                <option className='' value="Algerian">Algerian</option>
                                <option className='' value="American">American</option>
                                <option className='' value="Andorran">Andorran</option>
                            </select>
                        </div>
                    </>
                }

                <div className='flex flex-col justify-center items-start'>
                    <span className='text-sm text-sky-600 mb-1'>Mobile</span>
                    <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer' type='email' name="mobile" placeholder='Ex: +8415214465465' />
                </div>


            </div>
        </form>
    );
};

export default TripDetailsForm;