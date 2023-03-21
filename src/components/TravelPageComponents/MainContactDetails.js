import React, { useState } from 'react';
import AddTraveller from '../Modals/AddTravellerModals/AddTraveller';

const MainContactDetails = () => {
    const [openTravellerModal, setOpenTravellerModal] = useState(false)
    return (
        <div className='bg-white shadow border w-full h-fit p-4 md:p-8 mt-8'>
            <h1 className='text-blue-900 font-bold text-center text-3xl pb-6'>Main contact details</h1>


            <div className='grid md:grid-cols-3 gap-6 mb-6'>

                <div className='w-full flex flex-col justify-center items-start rounded-md'>
                    <label className='text-xl font-semibold text-blue-900' htmlFor="">Name</label>
                    <input className='w-full h-14 rounded-none px-3 border-gray-400 hover:border-blue-600 focus:outline-none focus:border-green-600' type="text" placeholder='Enter Your Name' />
                </div>

                <div className=''>
                    <label className='text-xl font-semibold text-blue-900' htmlFor="">Phone Number</label>
                    <div className='w-full flex justify-center items-start rounded-md'>

                        <div className='border border-gray-400 hover:border-blue-600 focus:outline-none h-14 w-16 flex items-center justify-center'>
                            <img className='w-8' src="https://cdn-icons-png.flaticon.com/128/206/206626.png" alt="" />
                        </div>
                        <input className='w-full h-14 rounded-none px-3 border-gray-400 hover:border-blue-600 focus:outline-none focus:border-green-600' type="number" placeholder='Enter Your Phone' />
                    </div>
                </div>


                <div className='w-full flex flex-col justify-center items-start rounded-md'>
                    <label className='text-xl font-semibold text-blue-900' htmlFor="">Email</label>
                    <input className='w-full h-14 rounded-none px-3 border-gray-400 hover:border-blue-600 focus:outline-none focus:border-green-600' type="email" placeholder='Enter Your Email' />
                </div>
            </div>


            <h1 className='text-blue-900 font-bold text-center text-3xl pb-6'>Trip details</h1>


            <div className='grid md:grid-cols-2 gap-6 mb-6'>
                <div className='border-r'>
                    <h1 className='text-left text-xl text-blue-900 font-semibold mb-6'>Choose Travelling Dates</h1>
                    <div>
                        <input className='w-full md:w-72 h-14 rounded-none px-3 border-gray-400 hover:border-blue-600 focus:outline-none focus:border-green-600' type="date" />
                    </div>
                </div>

                <div>
                    <div className='flex flex-col md:flex-row items-start md:items-center gap-4 mb-6'>
                        <svg className='w-6' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362.47 384"><path d="M604,576c-5.11-2.48-9.73-5.5-11.67-11.23a16.47,16.47,0,0,1-1-5.11c-.09-10.74-.05-21.49-.05-32.45.82-.25,1.61-.52,2.41-.73,9.43-2.49,16.3-10.6,16.4-20.35.21-19.74.24-39.5,0-59.24-.15-11.68-9.51-20.65-21.11-21-2.61-.08-5.23,0-7.56,0-4-7.79-1.72-15.38-.23-23,3.4-17.51,6.69-35,10-52.57a2.88,2.88,0,0,0-.63-2.33c-8.19,22.74-16.37,45.47-24.62,68.37,8.57,3.9,5.13,11.61,6.17,18.46h13.95c9.87,0,14.89,5.11,14.9,15.06q0,25.68,0,51.37c0,11.4-2.92,14.92-14,16.84-.92,6.6-1.37,7-8.34,7h-4.12c-7.35,0-7.35,0-8.8-7.15H537.11c-1.25,7.12-1.28,7.15-8.63,7.15H524c-6.67,0-7.09-.36-8-7.09l-2.86-.35c-6.17-.74-11-5.54-11-11.72q-.21-29.62,0-59.25a11.92,11.92,0,0,1,11.75-11.75c5.57-.2,11.16,0,16.78,0,1.21-6.88-2.41-15.08,6.07-18.38.8-3.22,1.26-6.05,2.21-8.71,10.9-30.62,21.78-61.25,32.94-91.77a72,72,0,0,1,8-15.55c5.66-8.37,13.87-12.73,24.1-12.76q24.69-.07,49.4,0c11.18,0,19.73,5.11,25.49,14.42,3.55,5.74,6.09,12.11,9.43,18.88,0-6.51.05-12.52,0-18.53-.08-8.36,2-16.08,7-22.84,7.48-10.11,17.62-15.31,30.12-15.38,26.07-.15,52.15-.21,78.22,0,20.76.17,38,13.14,44.4,32.8q7.63,23.44,15.33,46.87c4,12.26-2.36,21.69-15.14,22.93q-27.18,2.66-54.3,5.71c-11.07,1.24-18.53-2.83-20.83-11.76s3-18,12.08-19.54c8.71-1.46,17.57-2,26.37-3,5.07-.55,10.15-1.06,15.6-1.63-3.57-10.81-6.89-21.48-10.65-32-1.45-4-5-6.38-9.48-7.68v19l-.71.11c-.57-2.38-1.19-4.75-1.73-7.14-2.13-9.4-8.95-13.67-18.38-11.52q-7.45,1.69-14.94,3.33a14.65,14.65,0,0,0-10.69,8.5,4.87,4.87,0,0,1-2.47,2.22c-7.08,2.62-10.35,7.11-10.36,14.68,0,10.25,0,20.5,0,30.75,0,9,5.68,14.89,14.69,14.79a12.32,12.32,0,0,1,9.76,3.87c6.26,6.16,14.27,7,22.65,5.94,3.82-.5,7.67-.85,11.77-1.3.09,1.07.22,2,.23,3q0,86.25,0,172.5c0,15.16-14.67,24.44-27.12,17.16-6.63-3.88-9.44-10-9.44-17.56q0-62.25,0-124.5V411.17h-7.63v3.9q0,70.31,0,140.62c0,11.44-8,19.72-18.66,19.55A18.69,18.69,0,0,1,726,558.34c-.13-1.74-.08-3.5-.08-5.25V296.48c-4.23.67-5.31,3-5.31,6.64q.11,58.31,0,116.62c0,7.54-3.64,12.5-10,13.82-7.09,1.47-12.42-1.76-15.24-9.34q-11.64-31.34-23.26-62.69a87,87,0,0,0-6.17-14c.84,4.66,1.63,9.33,2.52,14q8,42.07,16.11,84.16c1.23,6.45-2,10.44-8.54,10.6-3.1.07-6.2,0-9.81,0v4.22c0,31.25-.25,62.5.14,93.75.14,10.73-3.19,18.25-13.74,21.7H645.2c-10.5-4.42-13-12.73-12.89-23.48.44-30.59.16-61.19.16-91.79v-4.18h-7.4v4.3q0,48,0,95.92a29.09,29.09,0,0,1-.62,6.66c-1.64,6.86-6.71,10.33-12.91,12.57ZM540.19,434.65h22.42V424c-7.57,6.84-14.9,6-22.42.39Z" transform="translate(-502.07 -192)"></path><path class="cls-1" d="M770.2,192c2.65.85,5.39,1.48,7.93,2.57a31.55,31.55,0,0,1,18.17,36.66C792.65,246.12,778.65,256.09,763,255c-14.87-1.07-27.45-13.73-28.64-28.83a31.72,31.72,0,0,1,23.89-33.25,18.43,18.43,0,0,0,2.23-.88Z" transform="translate(-502.07 -192)"></path><path class="cls-2" d="M611.51,576c6.2-2.24,11.27-5.71,12.91-12.57a29.09,29.09,0,0,0,.62-6.66q.06-48,0-95.92v-4.3h7.4v4.18c0,30.6.28,61.2-.16,91.79-.15,10.75,2.39,19.06,12.89,23.48Z" transform="translate(-502.07 -192)"></path><path d="M658,249a29.22,29.22,0,1,1-29.08-29.31A29.18,29.18,0,0,1,658,249Z" transform="translate(-502.07 -192)"></path><path d="M784.15,331.79c-15.82,5.5-22.37,15.49-20.16,30.44-4.59,1.22-7.25-.65-7.28-5.27q-.08-15.52,0-31c0-4,1.69-5.69,5.64-5.75,5.1-.07,10.21,0,15.31,0,4.89,0,6.4,1.56,6.48,6.51C784.17,328.4,784.15,330.14,784.15,331.79Z" transform="translate(-502.07 -192)"></path><path d="M770.87,310c6.62-1.39,13.21-3,19.88-4.07,2.92-.48,4.33,1.86,4.93,4.57,1.41,6.42,2.86,12.84,4.41,19.75l-7,.75c.21-6.31.16-12.26-5-16.66s-11.27-2.85-17.1-3.24Z" transform="translate(-502.07 -192)"></path><path d="M540.19,434.65V424.36c7.52,5.6,14.85,6.45,22.42-.39v10.68Z" transform="translate(-502.07 -192)"></path></svg>
                        <h1 className='text-left text-xl text-blue-900 font-semibold'>Choose Travelling Dates</h1>
                        <button onClick={() => setOpenTravellerModal(true)}
                            className='w-40 h-10 border-blue-900 border'>
                            <span className='text-blue-900 font-semibold'>+ ADD / EDIT</span>
                        </button>
                    </div>
                    <h1 className='text-left text-xl text-blue-900 font-semibold mb-6'><span className='text-rose-600'>Traveler:</span> 1Date of birth21/03/2003</h1>

                    {
                        openTravellerModal && <AddTraveller closeModal={setOpenTravellerModal} />
                    }
                </div>

            </div>


            <div className='flex items-center justify-center gap-2 mt-12 mb-8'>
                <input type="checkbox" name="accept" id="accept" />
                <label className='text-xl font-normal text-black' htmlFor="accept">I confirm that all travelers have valid UAE residence visa and that the travel will start from UAE.</label>
            </div>


            <button className='w-72 h-16 bg-rose-600 text-white font-bold text-xl flex justify-center items-center hover:bg-rose-700 duration-300 mx-auto text-center'>
                <span>Show Me Quotes</span>
            </button>

        </div>
    );
};

export default MainContactDetails;