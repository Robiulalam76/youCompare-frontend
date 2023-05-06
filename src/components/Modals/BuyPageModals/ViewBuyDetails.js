import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../accets/logo1/NoPath@2x.png'
import img2 from '../../../accets/logo1/NoPath - Copy.png'
import arrowDown from '../../../accets/icons/arrow-down.svg'
import arrowRight from '../../../accets/icons/arrow-right.svg'
import paymentMethods from '../../../accets/images/payment-methods.png'

const ViewBuyDetails = ({ closeModal }) => {
    const [open, setOpen] = useState(false)
    const [selectCash, setSelectCash] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target);
    }


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

        <div className="flex justify-center items-center fixed z-50 w-full h-full top-0 left-0 bg-opacity-50 bg-gray-900 cursor-pointer md:py-4 p-4">
            <div ref={outSideRef}
                className="w-full md:w-[1000px] h-full md:h-fit max-h-full overflow-y-auto bg-white duration-300 shadow border rounded-xl p-4 md:p-6 mt-8">
                <h1 className='font-bold text-sky-600 text-xl mb-2'>Pay For Your Policy</h1>
                <div className='grid md:grid-cols-2 gap-4 mb-6'>
                    <div className='w-full h-full'>
                        <div className='w-full h-60 bg-gray-200 overflow-hidden'>
                            <img className='w-full h-full scale-105' src={paymentMethods} alt="paymentMethods" />
                        </div>
                        <div className='grid grid-cols-4 gap-3 mt-4'>
                            <img className='w-32' src={img1} alt="" />
                            <img className='w-32' src={img1} alt="" />
                            <img className='w-32' src={img1} alt="" />
                            <img className='w-32' src={img1} alt="" />
                        </div>
                    </div>


                    <form onSubmit={handleSubmit}>
                        <input className='w-full h-10 focus:outline-none px-4 mb-4' placeholder='Card Number' type="number" name='cardNumber' />
                        <div className='grid md:grid-cols-2 gap-4 mb-4'>
                            <input className='w-full h-10 focus:outline-none px-4' placeholder='MM/YY' type="date" name='date' />
                            <input className='w-full h-10 focus:outline-none px-4' placeholder='CVV' type="text" name='cvv' />
                        </div>
                        <input className='w-full h-10 focus:outline-none px-4 mb-4' placeholder='Card Holder Name' type="text" name='holderNumber' />

                        <div className='flex items-center gap-2 cursor-pointer bg-gray-200 h-10 px-4 mb-4 mt-4'>
                            <input onClick={() => setSelectCash(!selectCash)} type="checkbox" checked={selectCash ? true : false} name="cash" id="cash" />
                            <button onClick={() => setSelectCash(!selectCash)} className='text-[16px] text-gray-600' htmlFor="cash"><img src="" alt="" />Cash</button>
                        </div>
                        {
                            selectCash ? <Link to='/payment' type='submit' className='w-full cursor-pointer h-10 bg-primary text-white flex justify-center items-center font-bold border border-b-4 border-darkPrimary'>
                                <p>Pay Now (788 AED)</p>
                            </Link>
                                :
                                <button disabled className='w-full cursor-pointer h-10 bg-gray-400 text-white flex justify-center items-center font-bold border-b-2 border-gray-800'>
                                    <p>Pay Now (788 AED)</p>
                                </button>
                        }
                    </form>
                </div>

                {
                    open && <>
                        <div className='border shadow px-2 md:px-6'>
                            <div className='flex flex-col md:flex-row md:items-center md:gap-4 mt-2'>
                                <img className='w-32 h-12 md:h-20' src={img2} alt="" />
                                <div className='grid md:grid-cols-2 gap-4'>
                                    <div>
                                        <h1 className='text-black font-bold'>Salama Insurence - Thirt Perty Only</h1>
                                        <p className='text-gray-600 text-sm'>from May 24 2023 to june 24 2024</p>
                                    </div>
                                    <div>
                                        <h1 className='text-black font-bold'>Salama Insurence - Thirt Perty Only</h1>
                                        <p className='text-gray-600 text-sm'>from May 24 2023 to june 24 2024</p>
                                    </div>
                                </div>
                            </div>

                            <div className='mb-4'>
                                <h1 className='font-bold text-sky-600'>Policy</h1>
                                <hr className='mb-2' />

                                <div className='flex justify-between items-center gap-2 mb-2'>
                                    <h1 className='text-black text-left'>Salama Annual Premium</h1>
                                    <h1 className='text-right text-black font-bold'>AED 750</h1>
                                </div>
                                <div className='flex justify-between items-center gap-2 mb-2'>
                                    <h1 className='text-black text-left'>You Compare Admin Fee</h1>
                                    <h1 className='text-right text-black font-bold'>AED 40</h1>
                                </div>
                                <div className='flex justify-between items-center gap-2 mb-2'>
                                    <h1 className='text-black text-left'>Discount SMART40</h1>
                                    <h1 className='text-right text-black font-bold'>-AED 40</h1>
                                </div>
                                <div className='flex justify-between items-center gap-2 mb-2'>
                                    <h1 className='text-black text-left'>Subtotal</h1>
                                    <h1 className='text-right text-primary font-bold'>AED 750</h1>
                                </div>
                            </div>


                            <div className='mb-4'>
                                <h1 className='font-bold text-sky-600'>Add-ons</h1>
                                <hr className='mb-2' />

                                <div className='flex justify-between items-center gap-2 mb-2'>
                                    <h1 className='text-black text-left'>Personal Accident 24/7(free First Month) Monthly AED 11</h1>
                                    <h1 className='text-right text-sky-600 font-bold'>AED 0</h1>
                                </div>
                                <div className='flex justify-between items-center gap-2 mb-2'>
                                    <h1 className='text-black text-left'>Subtotal</h1>
                                    <h1 className='text-right text-primary font-bold'>AED 0</h1>
                                </div>
                            </div>


                            <div className='mb-4'>
                                <h1 className='font-bold text-sky-600'>Charity Donations (Licence no 4636)</h1>
                                <hr className='mb-2' />

                                <div className='flex justify-between items-center gap-2 mb-2'>
                                    <h1 className='text-black text-left'>Amount</h1>
                                    <h1 className='text-right text-black font-bold'>AED 0</h1>
                                </div>
                            </div>


                            <div className='mb-4'>
                                <h1 className='font-bold text-sky-600'>VAT</h1>
                                <hr className='mb-2' />

                                <div className='flex justify-between items-center gap-2 mb-2'>
                                    <h1 className='text-black text-left'>Salama premium Policy</h1>
                                    <h1 className='text-right text-black font-bold'>AED 38</h1>
                                </div>
                                <div className='flex justify-between items-center gap-2 mb-2'>
                                    <h1 className='text-black text-left'>Personal Accident 24/7(free First Month) Monthly AED 11</h1>
                                    <h1 className='text-right text-sky-600 font-bold'>AED 0</h1>
                                </div>
                                <div className='flex justify-between items-center gap-2 mb-2'>
                                    <h1 className='text-black text-left'>Subtotal</h1>
                                    <h1 className='text-right text-primary font-bold'>AED 38</h1>
                                </div>
                            </div>

                            <hr className='my-3' />
                            <h1 className='text-right font-bold pb-2'>Total <span className='text-primary'>AED 38</span></h1>


                            <div className='grid grid-cols-4 gap-3 mb-2'>
                                <img className='w-32' src={img1} alt="" />
                                <img className='w-32' src={img1} alt="" />
                                <img className='w-32' src={img1} alt="" />
                                <img className='w-32' src={img1} alt="" />
                            </div>

                        </div>
                    </>
                }

                <button onClick={() => setOpen(!open)}
                    className='flex justify-center items-center gap-4 my-4 bg-gray-200 hover:bg-sky-200 h-8 w-full'>
                    <span className='text-black'>View Details</span>
                    <img className='w-6' src={open ? arrowDown : arrowRight} alt="" />
                </button>
            </div>
        </div>
    );
};

export default ViewBuyDetails;