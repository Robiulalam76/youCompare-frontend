import React, { useState } from 'react';

const tripDestinationTabs = [
    { id: '1', title: 'Local' },
    { id: '2', title: 'International' }
]

const TripDestination = () => {
    const [selectedDestinaion, setSelectedDestinaionTab] = useState('1')
    return (
        <div>
            <div className='flex items-center flex-wrap gap-2 md:gap-4 mt-2 w-full'>
                {
                    tripDestinationTabs?.map(item => (
                        <button onClick={() => setSelectedDestinaionTab(item?.id)}
                            key={item.id}
                            className={`flex justify-center items-center h-8 rounded-3xl w-36 
                                ${selectedDestinaion === item?.id ? 'bg-sky-600 text-white' : 'bg-white border border-sky-600 text-sky-600'}`}
                            value={item?.title}>
                            <span className='text-sm uppercase'>{item?.title}</span>
                        </button>
                    ))
                }
            </div>
            <hr className='border-sky-300 my-2' />
        </div>
    );
};

export default TripDestination;