import React from 'react';

const YearDropdown = ({ values, handleYear }) => {
    return (
        <div className='absolute z-50 top-14 border-x border-b border-gray-400 hover:border-blue-600 focus:outline-none shadow w-full max-h-44 overflow-y-auto'>
            {
                values?.map(value => (
                    <button onClick={() => handleYear(value?.Year)} className='w-full h-12 flex justify-start items-center bg-white hover:bg-gray-100 px-4'>
                        <h1>{value?.Year}</h1>
                    </button>
                ))
            }
        </div>
    );
};

export default YearDropdown;