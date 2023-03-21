import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const AddTraveller = ({ closeModal }) => {

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
        <div className='flex justify-center fixed z-50 w-full h-full top-0 left-0 bg-opacity-50 bg-gray-900 cursor-pointer md:py-4 p-4'>
            <div ref={outSideRef}
                className="w-full md:w-[1000px] h-full md:h-fit max-h-full overflow-y-auto bg-white duration-300">

                <div className='w-full h-24 shadow-xl flex justify-center items-center'>
                    <h1 className='text-center font-bold text-2xl'>Add Traveller</h1>
                </div>

                <div className='w-full md:w-[1000px] h-full md:h-fit max-h-full shadow border rounded-xl p-4 md:p-6'>

                    <div className='flex flex-col md:flex-row md:items-center justify-center gap-6'>
                        <div className='flex items-center gap-4'>
                            <h1 className='text-xl text-blue-900'>Traveller 1</h1>
                            <h1 className='text-xl text-blue-900'>Date of birth</h1>
                        </div>
                        <div className='flex justify-start items-center gap-4'>
                            <input className='h-14 w-full md:w-60 mx-auto text-center focus:outline-none border-b border-blue-900 focus:border-green-600' type="date" name="" id="" />
                            <button className='flex justify-center items-center bg-rose-600 h-14 w-14'>
                                <span className='text-white font-bold text-xl'>X</span>
                            </button>
                        </div>
                    </div>


                    <button className='w-60 h-14 mx-auto flex justify-center items-center border border-blue-900 my-12 hover:bg-blue-900'>
                        <span className='text-center font-bold text-blue-900 hover:text-white text-xl'>+ ADD TRAVELLER</span>
                    </button>

                    <div className='flex items-center justify-center w-fit mx-auto md:mr-0 gap-6'>
                        <button onClick={() => closeModal(false)}
                            className='w-32 h-14 mx-auto flex justify-center items-center bg-rose-600 hover:bg-rose-700 duration-300'>
                            <span className='text-center font-bold text-white text-xl'>CANCEL</span>
                        </button>
                        <button onClick={() => closeModal(false)}
                            className='w-32 h-14 mx-auto flex justify-center items-center bg-rose-600 hover:bg-rose-700 duration-300'>
                            <span className='text-center font-bold text-white text-xl'>DONE</span>
                        </button>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default AddTraveller;