import React, { useState } from 'react';
import img1 from '../../accets/logo1/NoPath - Copy (2).png'
import blueR from '../../accets/icons/blue-right.png'
import { AiFillCloseCircle } from "react-icons/ai"
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md"
import { Link } from 'react-router-dom';
import ViewDetails from '../../Modals/ViewDetailsModals/ViewDetails';

const QuoteCard = () => {
    const [open, setOpen] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    return (
        <div>
            <div className='w-full h-fit bg-white border cursor-pointer'>
                <div onClick={() => setOpen(!open)}
                    className='w-full h-24 flex items-center justify-between gap-2 bg-primary hover:bg-darkPrimary duration-300 text-white px-2'>
                    <button
                        className='w-10 h-full text-3xl flex justify-center items-center' >
                        {open ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                    </button>
                    <div className='flex-grow flex flex-col justify-center items-start gap-1 w-full'>
                        <img className='w-full max-w-[180px] h-8' src={img1} alt="" />
                        <span className='text-white text-sm text-left'>Salama Insurance Thirt Perty Only</span>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-1 w-full'>
                        <span className='text-white font-bold md:text-xl'>AED 770</span>
                        <span className='text-gray-200 text-sm'>AED 790</span>
                    </div>
                    <div className='flex items-center justify-center w-full'>
                        <span>12/08/2022</span>
                    </div>
                    <Link to="/buy" className='flex justify-center items-center w-full h-10 rounded-xl bg-white hover:bg-slate-100 text-primary font-bold text-sm'>
                        <span>Buy Now</span>
                    </Link>
                </div>
                {
                    open && (
                        <div className='w-full h-fit flex flex-col md:flex-row justify-between bg-slate-50'>
                            <div className='flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 py-4 px-2'>
                                <div className='w-full h-8 md:h-full grid grid-cols-3 md:text-center md:flex md:flex-col md:justify-center items-center gap-1 border-b md:border-b-0 md:border-r'>
                                    <span className='text-xs text-gray-800'>What is The Excess?</span>
                                    <AiFillCloseCircle className='text-xl text-rose-500' />
                                    <span className='text-xs text-gray-800'>No Repairs</span>
                                </div>
                                <div className='w-full h-8 md:h-full grid grid-cols-3 md:text-center md:flex md:flex-col md:justify-center items-center gap-1 border-b md:border-b-0 md:border-r'>
                                    <span className='text-xs text-gray-800'>Who Will Repaire My Car?</span>
                                    <AiFillCloseCircle className='text-xl text-rose-500' />
                                    <span className='text-xs text-gray-800'>No Repairs</span>
                                </div>
                                <div className='w-full h-8 md:h-full grid grid-cols-3 md:text-center md:flex md:flex-col md:justify-center items-center gap-1 border-b md:border-b-0 md:border-r'>
                                    <span className='text-xs text-gray-800'>Fre Registration Service</span>
                                    <AiFillCloseCircle className='text-xl text-rose-500' />
                                    <span className='text-xs text-gray-800'>No Repairs</span>
                                </div>
                                <div className='w-full h-8 md:h-full grid grid-cols-3 md:text-center md:flex md:flex-col md:justify-center items-center gap-1 border-b md:border-b-0 md:border-r'>
                                    <span className='text-xs text-gray-800'>Thirt Perty Demage Limit</span>
                                    <span className='text-xs text-gray-800 font-bold'>2 Million</span>
                                    <span className='text-xs text-gray-800'>AED</span>
                                </div>
                                <div className='w-full h-8 md:h-full grid grid-cols-3 md:text-center md:flex md:flex-col md:justify-center items-center gap-1 border-b md:border-b-0'>
                                    <span className='text-xs text-gray-800'>Roadside Assistance</span>
                                    <img className='w-4' src={blueR} alt="" />
                                    <span className='text-xs text-gray-800 font-bold'>G0LD</span>
                                </div>
                            </div>
                            <div className='bg-slate-500 flex flex-col justify-center items-center gap-2 w-full md:w-56 py-4 px-2'>
                                <h1 className='text-white font-bold text-center text-xl'>$452,00</h1>
                                <button onClick={() => setOpenModal(true)} className='flex justify-center items-center w-fit px-4 h-10 rounded-md bg-primary hover:bg-darkPrimary duration-200 text-white font-bold'>
                                    <span>View Details</span>
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>

            {
                openModal && <ViewDetails closeModal={setOpenModal} />
            }
        </div>
    );
};

export default QuoteCard;