import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../accets/logo1/NoPath - Copy (3).png'
import img2 from '../../accets/logo1/NoPath - Copy (4).png'
import right from '../../accets/icons/right.png'
import arrowDown from '../../accets/icons/arrow-down.svg'

const warrantyDatas = [
    { id: '1', title: '3 Months' },
    { id: '2', title: '8 Months' },
    { id: '3', title: '1 Year' },
    { id: '4', title: '2 Years' },
    { id: '5', title: '3 Years' },
    { id: '6', title: '5 Years' },
    { id: '7', title: '8 Years' }
]

const Qoutes = () => {
    const [showWarranty, setShowWarranty] = useState(false)
    const [selectedWarranty, setSelectedWarranty] = useState({ id: '1', title: '3 Months' })
    const [termsCondition, setTermsCondition] = useState(false)

    const hanldeSelectWarranty = (data) => {
        setSelectedWarranty(data)
        setShowWarranty(false)
    }
    return (
        <section className='bg-white min-h-screen'>
            <div className='max-w-[1440px] mx-auto px-4 pb-32 pt-8'>
                <div className='flex items-center gap-2 mt-2'>
                    <button className=' text-blue-600 underline'>Vehcile></button>
                    <Link to='/driver' className=' text-blue-600 underline'>Driver></Link>
                    <Link to='/qoutes' className=' text-blue-600 underline'>Qoutes></Link>
                    <Link to='/buy' className=' text-gray-500'>Buy></Link>
                    <Link to='/payment' className=' text-gray-500'>Payment</Link>
                </div>


                <div className='mt-12'>
                    <h1 className='text-2xl font-bold text-blue-900 mb-2'>Secure Checkout</h1>
                    <hr className='border-gray-400 mb-6' />

                    <div className='flex flex-col lg:flex-row md:justify-between md:items-center gap-4 mb-5'>
                        <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-8'>
                            <img className='w-48 max-h-24' src={img1} alt="" />
                            <div className='flex flex-col items-start justify-center gap-2' >
                                <h1 className='text-xl font-bold text-gray-900'>Salama Insurance Thirt Perty Only</h1>
                                <p className=' text-gray-500'>(From May 08 2023 to June 12 2023)</p>
                            </div>
                            <div className='flex flex-col items-start justify-center gap-2' >
                                <h1 className='text-xl font-bold text-gray-900'>2023 Toyota Acua 1.6 Limited</h1>
                                <p className=' text-gray-500'>(Insured Value 66.300 AED)</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-start md:items-end justify-center gap-2' >
                            <h1 className='text-3xl font-bold text-gray-700'>750 AED</h1>
                            <p className=' text-xl font-semibold text-gray-500'>Annual Premium</p>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-4 border-y-4 w-full h-fit'>
                        <div className='md:border-r p-4 md:p-6 bg-gray-50'>
                            <div className='mb-6'>
                                <h1 className='text-left font-bold text-gray-900 text-xl mb-2'>Policy Feature Summery</h1>
                                <div className='flex flex-col md:flex-row md:items-center gap-x-4 mb-4'>
                                    <h1 className='text-gray-600 font-semibold'>Third Perty Demage Limit:</h1>
                                    <h1 className='text-gray-500'>Up to AED 2 Million</h1>
                                </div>
                                <div className='flex flex-col md:flex-row md:items-center gap-x-4 mb-4'>
                                    <h1 className='text-gray-600 font-semibold'>Third Perty Lieblity:</h1>
                                    <h1 className='text-gray-500'>UAE Only</h1>
                                </div>
                                <div className='flex flex-col md:flex-row md:items-center gap-x-4 mb-4'>
                                    <h1 className='text-gray-600 font-semibold'>Demage to Your Vehcile:</h1>
                                    <h1 className='text-gray-500'>N/A</h1>
                                </div>
                            </div>
                            <div className='mb-6'>
                                <h1 className='text-left font-bold text-gray-900 text-xl mb-2'>Other Features</h1>
                                <div className='flex flex-col md:flex-row md:items-center gap-x-4 mb-4'>
                                    <h1 className='text-gray-600 font-semibold'>Personal Accident for Driver:</h1>
                                    <h1 className='text-gray-500'>(Up To AED 200.000)</h1>
                                </div>
                                <div className='flex flex-col md:flex-row md:items-center gap-x-4 mb-4'>
                                    <h1 className='text-gray-600 font-semibold'>Personal Accident for Passanger:</h1>
                                    <h1 className='text-gray-500'>(Up To AED 200.000)</h1>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 md:p-6'>
                            <div className='flex flex-col justify-center items-center mb-4'>
                                <img className='w-8 mx-auto' src={right} alt="" />
                                <h1 className='text-left font-bold text-gray-900 text-xl mb-2'>Whate's Includes</h1>
                            </div>
                            <div className='flex flex-col gap-y-4 mb-4'>
                                <h1 className='text-gray-500 font-semibold'>Personal Accident Cover for Driver</h1>
                                <h1 className='text-gray-500 font-semibold'>Personal Accident Cover for Passenger</h1>
                                <h1 className='text-gray-500 font-semibold'>Machnical First Aid</h1>
                                <h1 className='text-gray-500 font-semibold'>Machnical First Aid</h1>
                                <h1 className='text-gray-500 font-semibold'>Machnical First Aid</h1>
                                <h1 className='text-gray-500 font-semibold'>Machnical First Aid</h1>
                            </div>
                        </div>
                    </div>

                    <div className='py-4 bg-gray-50'>
                        <h1 className='font-bold text-xl text-center text-rose-600'>GET FREE VOUCHERS WITH EVERY POLICY</h1>
                        <div className='grid grid-cols-2 md:grid-cols-5 gap-6 mt-6'>
                            <img className='max-w-28' src={img1} alt="" />
                            <img className='max-w-28' src={img1} alt="" />
                            <img className='max-w-28' src={img1} alt="" />
                            <img className='max-w-28' src={img1} alt="" />
                            <img className='max-w-28' src={img1} alt="" />
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-7 gap-4 mt-6'>
                        <div className='lg:col-span-3 flex flex-col md:flex-row justify-center md:justify-start items-center gap-4'>
                            <img className='w-24 h-full' src={img2} alt="" />
                            <div>
                                <h1 className='text-xl text-center md:text-left font-bold'>Shop with Confidence</h1>
                                <h1 className='text-rose-600 font-bold text-center md:text-left text-xl'>LOWEST PRICE ONLINE GRANTEED</h1>
                                <p className='text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cum eius sit doloribus. Error, ut, explicabo dicta sit reprehenderit vero quae aspernatur quod beatae exercitationem et! Minima itaque consectetur dicta.</p>
                            </div>
                        </div>
                        <div className='lg:col-span-4 w-full'>
                            <h1 className='text-xl font-bold'>What Happens Next?</h1>
                            <p className='text-gray-500'>You Have Decide that this policy is for you. here are the next steps.</p>
                            <div className='mt-4'>
                                <p className='text-gray-600 mb-2'>1). Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <p className='text-gray-600 mb-2'>2). Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <p className='text-gray-600 mb-2'>3). Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                            </div>
                            <p className='text-gray-500 mt-2'>If Realy is that that this policy is for you. here are the next steps. <span className='text-rose-600 font-semibold'>65451465465</span></p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='w-full h-16 flex justify-start items-center px-4 bg-gray-100 rounded-md'>
                            <h1 className='text-gray-900 font-bold md:text-xl'>Additional Cover for Added Peace of Mind</h1>
                        </div>
                        <p className='text-center text-gray-500 py-2'>*the places you see here there are exclusive of 5% that weight will be added on next step</p>

                        <div className='grid md:grid-cols-4 gap-6'>
                            <div className='col-span-3 grid grid-cols-3 gap-5 mt-6 w-full'>
                                <div className='col-span-4'>
                                    <div className='grid md:grid-cols-2 gap-x-4 mb-4'>
                                        <div className='flex items-center gap-2 mb-2'>
                                            <div className='flex justify-center items-center bg-gray-600 rounded-full w-6 h-6 text-white'><span>?</span></div>
                                            <p className='text-gray-500'>Personal Accedent 24/7</p>
                                        </div>
                                        <div className='flex items-center gap-2 cursor-pointer mb-4'>
                                            <input type="checkbox" name="firstMonth" id="firstMonth" />
                                            <label className='text-[16px] text-gray-600' htmlFor="firstMonth"><p>First Month Free!</p></label>
                                        </div>
                                    </div>
                                    <div className='grid md:grid-cols-2 gap-x-4 mb-4'>
                                        <div className='flex items-start gap-2 mb-2'>
                                            <div className='flex justify-center items-center bg-gray-600 rounded-full w-8 h-6 text-white'><span>?</span></div>
                                            <p className='text-gray-500'>annual multi trip travel insurance (emergency travel cover included)</p>
                                        </div>
                                        <div className='flex items-center gap-2 cursor-pointer mb-4'>
                                            <input type="checkbox" name="aed35" id="aed35" />
                                            <label className='text-[16px] text-gray-600' htmlFor="aed35"><p>AED 35</p></label>
                                        </div>
                                    </div>
                                    <div className='grid md:grid-cols-2 gap-x-4 mb-4'>
                                        <div className='flex items-start gap-2 mb-2'>
                                            <div className='flex justify-center items-center bg-gray-600 rounded-full w-10 h-6 text-white'><span>?</span></div>
                                            <p className='text-gray-500'>I want <strong>AED 1000 cashback</strong> for taking out a a mushrik Crisil card request a call back.</p>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='flex items-center gap-2 cursor-pointer mb-4'>
                                                <input type="checkbox" name="free" id="free" />
                                                <label className='text-[16px] text-gray-600' htmlFor="free"><p>Free</p></label>
                                            </div>
                                            <label htmlFor="free"><img className='w-24' src={img1} alt="" /></label>
                                        </div>
                                    </div>

                                    <div className='grid md:grid-cols-2 gap-x-4 mb-4'>
                                        <div className='flex items-start gap-2 mb-2'>
                                            <div className='flex justify-center items-center bg-gray-600 rounded-full w-6 h-6 text-white'><span>?</span></div>
                                            <p className='text-gray-500'>warranty</p>
                                        </div>
                                        <div className='relative'>
                                            <div onClick={() => setShowWarranty(!showWarranty)}
                                                className='w-full h-14 border shadow flex justify-between px-4 items-center'>
                                                <p className='text-gray-600'>{selectedWarranty?.title}</p>
                                                <img className='w-6' src={arrowDown} alt="" />
                                            </div>
                                            {
                                                showWarranty && <div className='absolute z-50 top-14 border shadow w-full max-h-44 overflow-y-auto'>
                                                    {
                                                        warrantyDatas.map(w => (
                                                            <button onClick={() => hanldeSelectWarranty(w)} className='w-full h-12 flex justify-start items-center bg-white hover:bg-gray-100 px-4'>
                                                                <h1>{w.title}</h1>
                                                            </button>
                                                        ))
                                                    }
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <div className='grid md:grid-cols-2 gap-x-4 mb-4'>
                                        <p className='text-gray-500 mb-2'>charity donation (licence no 4636)</p>
                                        <input className='w-full h-12 focus:outline-none px-4' placeholder='0' type="number" />
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-col justify-start items-start md:items-end gap-1'>
                                <h1>Annual Premium <span className=' line-through'>750-AED</span></h1>
                                <h1 className='text-green-600'>Total Discount: 40 AED</h1>
                                <h1 className='text-green-600'>Total Amount Due:</h1>
                                <h1 className='font-bold text-black text-2xl'>750 AED</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-4 mt-8'>
                    <img className='w-24 md:w-48' src={img1} alt="" />
                    <img className='w-24 md:w-48' src={img1} alt="" />
                    <img className='w-24 md:w-48' src={img1} alt="" />
                </div>
                <hr className='my-6' />
                <h1 className='text-sm md:text-xl font-bold text-rose-700 text-left uppercase'>valuation you have provided is subject to approval from your chosen Insurance Company if the insurance does not accept your valuation your premium may need to be at the state</h1>

                <div className='flex items-center gap-2 cursor-pointer mb-4 mt-4'>
                    <input onClick={() => setTermsCondition(!termsCondition)} type="checkbox" checked={termsCondition ? true : false} name="terms" id="terms" />
                    <button onClick={() => setTermsCondition(!termsCondition)} className='text-[16px] text-gray-600' htmlFor="terms"><p>I Agree <strong>Terms & Conditions</strong></p></button>
                </div>
                {
                    termsCondition ? <button className='w-56 h-12 bg-rose-600 text-white flex justify-center items-center font-bold border border-b-4 border-rose-800'>
                        <p>Proceed To Payment</p>
                    </button>
                        :
                        <button disabled className='w-56 h-12 bg-gray-400 text-white flex justify-center items-center font-bold border-b-2 border-gray-800'>
                            <p>Proceed To Payment</p>
                        </button>
                }
            </div>
        </section>
    );
};

export default Qoutes;