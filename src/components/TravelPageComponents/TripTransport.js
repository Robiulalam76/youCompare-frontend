import React, { useState } from 'react';

const tripTransportTabs = [
    { id: '1', title: 'Aeroplane' },
    { id: '2', title: 'Car' },
    { id: '3', title: 'Bus' },
    { id: '4', title: 'Boat' },
    { id: '5', title: 'Train' }
]

const TripTransport = () => {
    const [selectedTransport, setSelectedTransportTab] = useState('1')
    return (
        <div>
            <div className='flex items-center flex-wrap gap-2 md:gap-4 mt-2 w-full'>
                {
                    tripTransportTabs?.map(item => (
                        <button onClick={() => setSelectedTransportTab(item?.id)}
                            key={item.id}
                            className={`flex justify-center items-center h-8 rounded-3xl w-28 
                                ${selectedTransport === item?.id ? 'bg-sky-600 text-white' : 'bg-white border border-sky-600 text-sky-600'}`}
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

export default TripTransport;