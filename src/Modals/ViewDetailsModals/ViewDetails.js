import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const ViewDetails = ({ closeModal }) => {

    let outSideRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!outSideRef.current.contains(e.target)) {
                closeModal(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });
    return (
        <div className="flex justify-center fixed z-50 w-full h-full top-0 left-0 bg-opacity-50 bg-gray-900 cursor-pointer md:py-4 p-4">
            <div ref={outSideRef}
                className="w-full md:w-[1000px] h-full md:h-fit max-h-full overflow-y-auto bg-white duration-300 shadow border rounded-xl p-4 md:p-6">
                <h1 className='text-center font-bold text-blue-900 mt-6 text-2xl'>Doese Everythink Look Correct</h1>
                <p className='text-blue-900 text-xl text-center mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quos molestiae iusto deleniti quaerat rerum sunt ullam quam.</p>

                <div className='flex justify-between items-center gap-2 mt-6'>
                    <button className='flex justify-center items-center border shodow rounded-md w-fit px-3 md:px-6 h-12 text-white bg-white hover:bg-gray-100 duration-150'>
                        <span className='text-blue-900 font-bold'>I Want To Make Changes</span>
                    </button>
                    <button onClick={() => closeModal(false)} className='flex justify-center items-center border shodow rounded-md w-fit px-3 md:px-6 h-12 text-white bg-rose-600 hover:bg-rose-700 duration-150'>
                        <span className='text-white font-bold'>All Good</span>
                    </button>
                </div>

                <div className='mt-8'>
                    <h1 className='text-left font-bold text-2xl mb-4 text-blue-900'>Your Qoute Details</h1>
                    <div className='grid grid-cols-1 gap-6'>
                        <div className='bg-white border shadow w-full h-fit p-3 md:p-6 rounded-md'>
                            <h1 className='text-center font-bold text-xl mb-4 text-gray-900'>Vehicle Summary</h1>
                            <div className='grid grid-cols-2 gap-4 mb-4'>
                                <p className='text-gray-600'>
                                    <strong className='text-black'>Car: </strong>
                                    2023 Toyota Acua 1.6 Limited Brand New
                                </p>
                                <p className='text-gray-600'>
                                    <strong className='text-black'>Car Value: </strong>66,300</p>
                            </div>
                            <div className='grid grid-cols-2 gap-4 mb-4'>
                                <p className='text-gray-600'>
                                    <strong className='text-black'>Registration Date: </strong>
                                    11 March 2023
                                </p>
                                <p className='text-gray-600'>
                                    <strong className='text-black'>Registration City: </strong> Dubal</p>
                            </div>
                        </div>
                        <div className='bg-white border shadow w-full h-fit p-3 md:p-6 rounded-md'>
                            <h1 className='text-center font-bold text-xl mb-4 text-gray-900'>Driver Summary</h1>

                            <div className='grid grid-cols-2 gap-4 mb-4'>
                                <p className='text-gray-600'>
                                    <strong className='text-black'>Name: </strong>
                                    Nahid Murad Abir
                                </p>
                                <p className='text-gray-600'>
                                    <strong className='text-black'>Mobile: </strong>24512153462</p>
                            </div>
                            <div className='grid grid-cols-2 gap-4 mb-4'>
                                <p className='text-gray-600'>
                                    <strong className='text-black'>Email Address: </strong>
                                    abc@gmail.com
                                </p>
                                <p className='text-gray-600'>
                                    <strong className='text-black'>D.O.B: </strong> 05 March 1985</p>
                            </div>
                            <div className='grid grid-cols-2 gap-4 mb-4'>
                                <p className='text-gray-600'>
                                    <strong className='text-black'>Nationality: </strong>
                                    Alabania
                                </p>
                                <p className='text-gray-600'>
                                    <strong className='text-black'>First License Country: </strong>
                                    Bangladesh</p>
                            </div>
                            <div className='grid grid-cols-2 gap-4 mb-4'>
                                <p className='text-gray-600'>
                                    <strong className='text-black'>Iternationality Driving Experience: </strong>
                                    6 to 12 Months
                                </p>
                                <p className='text-gray-600'>
                                    <strong className='text-black'>UAI Driving Experience: </strong>
                                    6 to 12 Months</p>
                            </div>
                            <div className='grid grid-cols-2 gap-4 mb-4'>
                                <p className='text-gray-600'>
                                    <strong className='text-black'>New Registration Date: </strong>
                                    12 March 2023
                                </p>
                                <p className='text-gray-600'>
                                    <strong className='text-black'>Last Caim Period: </strong>
                                    12 March 2023 ago</p>
                            </div>
                            <div className='grid grid-cols-2 gap-4 mb-4'>
                                <p className='text-gray-600'>
                                    <strong className='text-black'>Have No Claim Ceritficates?: </strong>
                                    Yes 3 years Proof
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;