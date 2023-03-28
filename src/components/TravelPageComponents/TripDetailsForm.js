import React from 'react';

const TripDetailsForm = () => {
    return (
        <form action="" className='grid grid-cols-2 gap-4 mt-6' >

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


            <div className='flex flex-col justify-center items-start'>
                <span className='text-sm text-sky-600 mb-1'>Mobile</span>
                <input className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none cursor-pointer' type='email' name="mobile" placeholder='Ex: +8415214465465' />
            </div>


        </form>
    );
};

export default TripDetailsForm;