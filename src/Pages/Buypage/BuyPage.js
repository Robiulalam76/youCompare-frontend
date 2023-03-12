import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../accets/logo1/NoPath@2x.png'
import img2 from '../../accets/logo1/NoPath - Copy.png'

const BuyPage = () => {
    const [selectCash, setSelectCash] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target);
    }
    return (
        <section className='bg-white min-h-screen py-8'>
            <div className='max-w-[1440px] mx-auto px-4'>
                <div className='flex items-center gap-2 mt-2'>
                    <button className=' text-blue-600 underline'>Vehcile></button>
                    <Link to='/driver' className=' text-blue-600 underline'>Driver></Link>
                    <Link to='/qoutes' className=' text-blue-600 underline'>Qoutes></Link>
                    <Link to='/buy' className=' text-blue-600 underline'>Buy></Link>
                    <Link to='/payment' className=' text-gray-500'>Payment</Link>
                </div>

                <div className='mt-12'>
                    <h1 className='font-bold text-blue-900 text-xl mb-2'>Pay For Your Policy</h1>
                    <div className='grid md:grid-cols-2 gap-4 mb-6'>
                        <div className='w-full h-full'>
                            <div className='w-full h-60 bg-gray-200'></div>
                            <div className='grid grid-cols-4 gap-3 mt-4'>
                                <img className='w-32' src={img1} alt="" />
                                <img className='w-32' src={img1} alt="" />
                                <img className='w-32' src={img1} alt="" />
                                <img className='w-32' src={img1} alt="" />
                            </div>
                        </div>


                        <form onSubmit={handleSubmit}>
                            <input className='w-full h-12 focus:outline-none px-4 mb-4' placeholder='Card Number' type="number" name='cardNumber' />
                            <div className='grid md:grid-cols-2 gap-4 mb-4'>
                                <input className='w-full h-12 focus:outline-none px-4' placeholder='MM/YY' type="date" name='date' />
                                <input className='w-full h-12 focus:outline-none px-4' placeholder='CVV' type="text" name='cvv' />
                            </div>
                            <input className='w-full h-12 focus:outline-none px-4 mb-4' placeholder='Card Holder Name' type="text" name='holderNumber' />

                            <div className='flex items-center gap-2 cursor-pointer bg-gray-200 h-12 px-4 mb-4 mt-4'>
                                <input onClick={() => setSelectCash(!selectCash)} type="checkbox" checked={selectCash ? true : false} name="cash" id="cash" />
                                <button onClick={() => setSelectCash(!selectCash)} className='text-[16px] text-gray-600' htmlFor="cash"><img src="" alt="" />Cash</button>
                            </div>
                            {
                                selectCash ? <button type='submit' className='w-full cursor-pointer h-12 bg-rose-600 text-white flex justify-center items-center font-bold border border-b-4 border-rose-800'>
                                    <p>Pay Now (788 AED)</p>
                                </button>
                                    :
                                    <button disabled className='w-full cursor-pointer h-12 bg-gray-400 text-white flex justify-center items-center font-bold border-b-2 border-gray-800'>
                                        <p>Pay Now (788 AED)</p>
                                    </button>
                            }
                        </form>
                    </div>

                    <div className='border shadow px-2 md:px-6'>
                        <div className='flex flex-col md:flex-row md:items-center gap-4 mt-4'>
                            <img className='w-32 h-32' src={img2} alt="" />
                            <div className='grid md:grid-cols-2 gap-4'>
                                <div>
                                    <h1 className='text-gray-900 font-bold md:text-xl'>Salama Insurence - Thirt Perty Only</h1>
                                    <p className='text-gray-600'>from May 24 2023 to june 24 2024</p>
                                </div>
                                <div>
                                    <h1 className='text-gray-900 font-bold md:text-xl'>Salama Insurence - Thirt Perty Only</h1>
                                    <p className='text-gray-600'>from May 24 2023 to june 24 2024</p>
                                </div>
                            </div>
                        </div>

                        <div className='mb-8'>
                            <h1 className='text-xl md:text-2xl font-bold text-blue-900 mb-2'>Policy</h1>
                            <hr className='mb-4' />

                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-900 text-left md:text-xl font-semibold'>Salama Annual Premium</h1>
                                <h1 className='text-right text-gray-700 font-bold'>AED 750</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-900 text-left md:text-xl font-semibold'>You Compare Admin Fee</h1>
                                <h1 className='text-right text-gray-700 font-bold'>AED 40</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-900 text-left md:text-xl font-semibold'>Discount SMART40</h1>
                                <h1 className='text-right text-gray-700 font-bold'>-AED 40</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-900 text-left md:text-xl font-semibold'>Subtotal</h1>
                                <h1 className='text-right text-rose-600 font-bold'>AED 750</h1>
                            </div>
                        </div>


                        <div className='mb-8'>
                            <h1 className='text-xl md:text-2xl font-bold text-blue-900 mb-2'>Add-ons</h1>
                            <hr className='mb-4' />

                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-900 text-left md:text-xl font-semibold'>Personal Accident 24/7(free First Month) Monthly AED 11</h1>
                                <h1 className='text-right text-blue-900 font-bold'>AED 0</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-900 text-left md:text-xl font-semibold'>Subtotal</h1>
                                <h1 className='text-right text-rose-600 font-bold'>AED 0</h1>
                            </div>
                        </div>


                        <div className='mb-8'>
                            <h1 className='text-xl md:text-2xl font-bold text-blue-900 mb-2'>Charity Donations (Licence no 4636)</h1>
                            <hr className='mb-4' />

                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-900 text-left md:text-xl font-semibold'>Amount</h1>
                                <h1 className='text-right text-gray-700 font-bold'>AED 0</h1>
                            </div>
                        </div>


                        <div className='mb-8'>
                            <h1 className='text-xl md:text-2xl font-bold text-blue-900 mb-2'>VAT</h1>
                            <hr className='mb-4' />

                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-900 text-left md:text-xl font-semibold'>Salama premium Policy</h1>
                                <h1 className='text-right text-gray-700 font-bold'>AED 38</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-900 text-left md:text-xl font-semibold'>Personal Accident 24/7(free First Month) Monthly AED 11</h1>
                                <h1 className='text-right text-blue-900 font-bold'>AED 0</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-900 text-left md:text-xl font-semibold'>Subtotal</h1>
                                <h1 className='text-right text-rose-600 font-bold'>AED 38</h1>
                            </div>
                        </div>

                        <hr className='my-4' />
                        <h1 className='text-right font-bold pb-6'>Total <span className='text-rose-600'>AED 38</span></h1>


                        <div className='grid grid-cols-4 gap-3 mb-6'>
                            <img className='w-32' src={img1} alt="" />
                            <img className='w-32' src={img1} alt="" />
                            <img className='w-32' src={img1} alt="" />
                            <img className='w-32' src={img1} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuyPage;