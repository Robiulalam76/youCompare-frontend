import React from 'react';

const HelpCenter = () => {

    return (
        <section className='max-w-[1440px] mx-auto cursor-pointer'>
            <div className='max-w-[1100px] mx-auto border-2 border-sky-500 shadow-sm bg-white p-4 mt-16 rounded-xl'>
                <h1 className='text-black text-left font-semibold pl-2 text-xl py-2 border-l-4 mb-4 border-sky-500'>Get A Quote</h1>

                <form className='mb-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='w-full h-14 mb-4'>
                            <input
                                className={`w-full h-full border focus:border-sky-500 shadow-sm focus:outline-none px-4`}
                                type="text" name='name' placeholder='Enter your name' />
                        </div>
                        <div className='w-full h-14 mb-4'>
                            <input
                                className={`w-full h-full border focus:border-sky-500 shadow-sm focus:outline-none px-4`}
                                type="email" name='email' placeholder='Enter Your Email Address' />
                        </div>
                        <div className='w-full h-14 mb-4'>
                            <input
                                className={`w-full h-full border focus:border-sky-500 shadow-sm focus:outline-none px-4`}
                                type="text" name='subject' placeholder='Enter the Subject' />
                        </div>
                        <div className='w-full h-14 mb-4'>
                            <input
                                className={`w-full h-full border focus:border-sky-500 shadow-sm focus:outline-none px-4`}
                                type="text" name='subject' placeholder='Enter Your Phone Number' />
                        </div>
                        <div className='md:col-span-2 w-full h-44 mb-4'>
                            <textarea
                                className={`w-full h-full border focus:border-sky-500 shadow-sm focus:outline-none p-4`}
                                type="text" name='message' placeholder='Enter Your Message' />
                        </div>
                    </div>

                    <div className='flex items-center gap-2'>
                        <input className='w-3 h-3 cursor-default' type="checkbox" name="save" id="save" />
                        <label className='text-left text-sm font-normal cursor-default' htmlFor="save" id='save'>Save my name, email, and website in this browser for the next time I comment.</label>
                    </div>

                    <button type='submit' className='w-full focus:border-sky-500 md:w-48 uppercase h-12 bg-sky-500 hover:bg-sky-600 duration-150 text-white flex justify-center items-center font-bold mt-4'>
                        <h1>Submit</h1>
                    </button>
                </form>
            </div>

        </section>
    );
};

export default HelpCenter;