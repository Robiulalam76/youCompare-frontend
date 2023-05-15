import React from 'react';

const img1 = 'https://glampcity-app.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftop-banner.43f89b26.png&w=1920&q=75'
const message = 'https://glampcity-app.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmessage.62ecd0f0.png&w=96&q=75'
const location = 'https://glampcity-app.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flocation.c11a4375.png&w=96&q=75'
const call = 'https://glampcity-app.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcall.6f36806d.png&w=96&q=75'

const Contact = () => {
    return (
        <section className='max-w-[1440px] mx-auto cursor-pointer'>
            <div>
                <img className='w-full h-96 object-cover' src={img1} alt="aboutImage" />
            </div>

            <div className='grid md:grid-cols-3 gap-4 mt-10 px-4 max-w-[1200px] mx-auto'>
                <div className='w-full h-60 mx-auto border-2 shadow-sm flex flex-col justify-center items-center gap-4'>
                    <img className='w-20' src={message} alt="aboutImage" />
                    <h1 className='text-black font-bold text-2xl text-center'>Email Address</h1>
                    <div className=''>
                        <h1 className='text-xl text-center text-black'>info@webmail.com</h1>
                        <h1 className='text-xl text-center text-black'>jobs@webexample.com</h1>
                    </div>
                </div>
                <div className='w-full h-60 mx-auto border-2 shadow-sm flex flex-col justify-center items-center gap-4'>
                    <img className='w-20' src={location} alt="aboutImage" />
                    <h1 className='text-black font-bold text-2xl text-center'>Office Address</h1>
                    <div className=''>
                        <h1 className='text-xl text-center text-black'>18/A, New Born Town Hall</h1>
                        <h1 className='text-xl text-center text-black'>New York, US</h1>
                    </div>
                </div>
                <div className='w-full h-60 mx-auto border-2 shadow-sm flex flex-col justify-center items-center gap-4'>
                    <img className='w-20' src={call} alt="aboutImage" />
                    <h1 className='text-black font-bold text-2xl text-center'>Phone Number</h1>
                    <div className=''>
                        <a href='tel:+0123-456789' className='text-xl text-center text-black block'>+0123-456789</a>
                        <a href='tel:+0123-456789' className='text-xl text-center text-black block'>+0123-456789</a>
                    </div>
                </div>
            </div>

            <div className='max-w-[1100px] mx-auto border-2 shadow-sm bg-white p-4 mt-16'>
                <h1 className='text-black text-left font-semibold pl-2 text-xl py-2 border-l-4 mb-4 border-primary'>Get A Quote</h1>

                <form
                    className='mb-6'
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='w-full h-14 mb-4'>
                            <input
                                className={`w-full h-full border shadow-sm focus:outline-primary px-4 
                            `} type="text" name='name' placeholder='Enter your name' />

                        </div>
                        <div className='w-full h-14 mb-4'>
                            <input
                                className={`w-full h-full border shadow-sm focus:outline-primary px-4 `}
                                type="email" name='email' placeholder='Enter Your Email Address' />

                        </div>
                        <div className='w-full h-14 mb-4'>
                            <input
                                className={`w-full h-full border shadow-sm focus:outline-primary px-4`}
                                type="text" name='subject' placeholder='Enter the Subject' />

                        </div>
                        <div className='w-full h-14 mb-4'>
                            <input
                                className={`w-full h-full border shadow-sm focus:outline-primary px-4`}
                                type="text" name='subject' placeholder='Enter Your Phone Number' />

                        </div>
                        <div className='md:col-span-2 w-full h-44 mb-4'>
                            <textarea
                                className={`w-full h-full border shadow-sm focus:outline-primary p-4 `}
                                type="text" name='message' placeholder='Enter Your Message' />

                        </div>
                    </div>

                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="save" id="save" />
                        <label className='text-left' htmlFor="save" id='save'>Save my name, email, and website in this browser for the next time I comment.</label>
                    </div>

                    <button type='submit' className='w-full md:w-48 uppercase h-12 bg-primary text-white flex justify-center items-center font-bold mt-4'>
                        <h1>Submit</h1>
                    </button>
                </form>

                <iframe className='w-full h-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496742.16755986!2d85.83481982114762!3d23.44174964673436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1677085405421!5m2!1sen!2sbd" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>



        </section>
    );
};

export default Contact;