import React from 'react';

const SelectCountries = () => {
    return (
        <div className='my-8'>
            <h1 className='text-center text-blue-900 text-xl mb-2'>DOES YOUR TRIP INCLUDE VISITS TO ANY OF THESE COUNTRIES?</h1>
            <h1 className='text-center text-rose-600 mb-6'>Please select countries that included in your trip from below</h1>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                <div className='flex items-center gap-2'>
                    <input className='cursor-pointer w-5 h-5' type="checkbox" name="usa" id="usa" />
                    <label className='text-2xl cursor-default text-blue-900 font-semibold' htmlFor="usa">USA</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input className='cursor-pointer w-5 h-5' type="checkbox" name="Canada" id="Canada" />
                    <label className='text-2xl cursor-default text-blue-900 font-semibold' htmlFor="Canada">Canada</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input className='cursor-pointer w-5 h-5' type="checkbox" name="Australia" id="Australia" />
                    <label className='text-2xl cursor-default text-blue-900 font-semibold' htmlFor="Australia">Australia</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input className='cursor-pointer w-5 h-5' type="checkbox" name="Japan" id="Japan" />
                    <label className='text-2xl cursor-default text-blue-900 font-semibold' htmlFor="Japan">Japan</label>
                </div>
            </div>
        </div>
    );
};

export default SelectCountries;