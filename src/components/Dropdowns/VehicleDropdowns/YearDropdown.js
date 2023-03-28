import React from 'react';

const YearDropdown = ({ values, handleYear }) => {
    return (
        <div className='absolute z-50 top-8 border-x border-b border-gray-400 hover:border-sky-600 focus:outline-none shadow w-full max-h-44 overflow-y-auto'>
            {
                values?.map(value => (
                    <button onClick={() => handleYear(value?.Year)} className='w-full h-8 flex justify-start items-center bg-white hover:bg-sky-100 text-sm px-4'>
                        <h1>{value?.Year}</h1>
                    </button>
                ))
            }
        </div>
    );
};

export default YearDropdown;