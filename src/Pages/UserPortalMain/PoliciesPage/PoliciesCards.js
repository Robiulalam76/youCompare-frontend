import React from 'react';
import { MdPayment, MdPolicy } from "react-icons/md"
import { BiMessageSquareAdd } from "react-icons/bi"
import { GoNote } from "react-icons/go"
import { FaStackExchange } from "react-icons/fa"
import { Link } from 'react-router-dom';
const items = [
    { _id: "1", title: "Policy Summary", description: "View Your Policy Details", url: "details", img: <MdPolicy /> },
    { _id: "2", title: "Documents", description: "View or Download Your Documents", url: "documents", img: <MdPayment /> },
    { _id: "3", title: "Make a Change", description: "To Drivers, Addresses, and Vehicles", url: "", img: <FaStackExchange /> },
    { _id: "4", title: "Add To Policy", description: "Add a Car, Home or Van to Your Policy", url: "", img: <BiMessageSquareAdd /> },
    { _id: "5", title: "Payments", description: "View or Edits Payment Details", url: "", img: <MdPayment /> },
    { _id: "6", title: "Claim", description: "Make a Claim or see Existing Claim", url: "", img: <GoNote /> },
]

const PoliciesCards = () => {
    return (
        <div className='w-full mx-auto cursor-pointer grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
            {
                items.map(item => <Link to={`/portal/policies/${item?.url}`}
                    className='flex flex-col justify-center items-center gap-2 w-full h-44 border shadow-md shadow-blue-200 hover:shadow-sky-400 p-3 bg-slate-50 rounded-2xl'>
                    <span className='text-6xl'>
                        {item?.img}
                    </span>
                    <h1 className='text-center text-primary font-bold text-xl'>{item.title}</h1>
                    <p className='text-gray-500 font-normal text-center text-sm'>{item.description}</p>
                </Link>
                )
            }
        </div>
    );
};

export default PoliciesCards;