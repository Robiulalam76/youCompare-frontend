import React, { useState } from 'react';
import { MdPayment, MdPolicy } from "react-icons/md"
import { BiMessageSquareAdd } from "react-icons/bi"
import { GoNote } from "react-icons/go"
import { FaStackExchange } from "react-icons/fa"
import { Link } from 'react-router-dom';
import AddPolicyModal from './AddPolicyModal';
const items = [
    {
        _id: "1",
        title: "Policy Summary",
        description: "View Your Policy Details", url: "portal/policies/details", img: <MdPolicy />
    },
    {
        _id: "2",
        title: "Documents",
        description: "View or Download Your Documents", url: "portal/policies/documents", img: <MdPayment />
    }
]

const PoliciesCards = () => {
    const [openAddPolicyModal, setOpenAddPolicyModal] = useState(false)
    return (
        <div className='w-full mx-auto cursor-pointer grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8'>
            {
                items.map(item => <Link to={`/${item?.url}`}
                    className='flex flex-col justify-center items-center gap-2 w-full h-44 border shadow-md shadow-blue-200 hover:shadow-sky-400 p-3 bg-slate-50 rounded-2xl'>
                    <span className='text-6xl text-gray-500'>
                        {item?.img}
                    </span>
                    <h1 className='text-center text-primary font-bold text-xl'>{item.title}</h1>
                    <p className='text-gray-500 font-normal text-center text-sm'>{item.description}</p>
                </Link>
                )
            }
            <button
                className='flex flex-col justify-center items-center gap-2 w-full h-44 border shadow-md shadow-blue-200 hover:shadow-sky-400 p-3 bg-slate-50 rounded-2xl'>
                <span className='text-6xl text-gray-500'>
                    <FaStackExchange />
                </span>
                <h1 className='text-center text-primary font-bold text-xl'>Make a Change</h1>
                <p className='text-gray-500 font-normal text-center text-sm'>To Drivers, Addresses, and Vehicles</p>
            </button>


            <button onClick={() => setOpenAddPolicyModal(true)}
                className='flex flex-col justify-center items-center gap-2 w-full h-44 border shadow-md shadow-blue-200 hover:shadow-sky-400 p-3 bg-slate-50 rounded-2xl'>
                <span className='text-6xl text-gray-500'>
                    <BiMessageSquareAdd />
                </span>
                <h1 className='text-center text-primary font-bold text-xl'>Add To Policy</h1>
                <p className='text-gray-500 font-normal text-center text-sm'>Add a Car, Home or Van to Your Policy</p>
            </button>


            <button
                className='flex flex-col justify-center items-center gap-2 w-full h-44 border shadow-md shadow-blue-200 hover:shadow-sky-400 p-3 bg-slate-50 rounded-2xl'>
                <span className='text-6xl text-gray-500'>
                    <MdPayment />
                </span>
                <h1 className='text-center text-primary font-bold text-xl'>Payments</h1>
                <p className='text-gray-500 font-normal text-center text-sm'>View or Edits Payment Details</p>
            </button>
            <button
                className='flex flex-col justify-center items-center gap-2 w-full h-44 border shadow-md shadow-blue-200 hover:shadow-sky-400 p-3 bg-slate-50 rounded-2xl'>
                <span className='text-6xl text-gray-500'>
                    <GoNote />
                </span>
                <h1 className='text-center text-primary font-bold text-xl'>Claim</h1>
                <p className='text-gray-500 font-normal text-center text-sm'>Make a Claim or see Existing Claim</p>
            </button>

            {
                openAddPolicyModal && <AddPolicyModal openAddPolicyModal={openAddPolicyModal} setOpenAddPolicyModal={setOpenAddPolicyModal} />
            }
        </div>
    );
};

export default PoliciesCards;