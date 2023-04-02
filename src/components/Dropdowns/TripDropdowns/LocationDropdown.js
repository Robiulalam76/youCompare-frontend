import React from 'react';

const LocationDropdown = ({ values, handleSelect }) => {
    return (
        <div className='absolute z-50 top-8 border-x border-b border-gray-400 hover:border-sky-600 focus:outline-none shadow w-full max-h-44 overflow-y-auto'>
            {
                values?.map(value => (
                    <button onClick={() => handleSelect(value?.name)} className='w-full h-8 flex justify-start items-center bg-white hover:bg-sky-100 text-sm px-4'>
                        <h1>{value?.name}</h1>
                    </button>
                ))
            }
        </div>
    );
};

export default LocationDropdown;