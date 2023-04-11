import React, { useState } from 'react';
import AgentsTableRow from './AgentsTableRow';
import { AiOutlineSearch } from "react-icons/ai"
import CreateNewQuoteSidebar from './CreateNewQuoteSidebar';

const tabs = ["All", "Active", "Pending", "Drafts"]

const items = [
    { _id: "1", client: "Mr. John", bussiness_name: "Travel Insurance", coverages: "GL", expiration: "21/06/2028", premium: "54455", status: "active" },
    { _id: "2", client: "Mr. John", bussiness_name: "Travel Insurance", coverages: "GL", expiration: "21/06/2028", premium: "54455", status: "active" },
    { _id: "3", client: "Mr. John", bussiness_name: "Travel Insurance", coverages: "GL", expiration: "21/06/2028", premium: "54455", status: "active" },
    { _id: "4", client: "Mr. John", bussiness_name: "Travel Insurance", coverages: "GL", expiration: "21/06/2028", premium: "54455", status: "active" },
    { _id: "5", client: "Mr. John", bussiness_name: "Travel Insurance", coverages: "GL", expiration: "21/06/2028", premium: "54455", status: "active" },
]

const MyAgents = () => {
    const [selectedTab, setSelectedTab] = useState("All")
    const [openAddNewQoute, setOpenAddNewQoute] = useState(false)
    return (
        <section className='p-2 md:px-4 lg:px-6'>

            <div className='grid grid-cols-3 gap-4 '>
                <div className='flex flex-col items-center md:items-start justify-center md:justify-start w-full h-16 md:h-fit bg-white shadow rounded-md p-2 md:p-4'>
                    <h1 className='font-semibold md:text-xl text-black'>$512</h1>
                    <span className='text-xs text-gray-400 text-center md:text-left'>Many Transfer useing Bank</span>
                </div>
                <div className='flex flex-col items-center md:items-start justify-center md:justify-start w-full h-16 md:h-fit bg-white shadow rounded-md p-2 md:p-4'>
                    <h1 className='font-semibold md:text-xl text-black'>$53.412</h1>
                    <span className='text-xs text-gray-400 text-center md:text-left'>Premium This Month</span>
                </div>
                <div className='flex flex-col items-center md:items-start justify-center md:justify-start w-full h-16 md:h-fit bg-white shadow rounded-md p-2 md:p-4'>
                    <h1 className='font-semibold md:text-xl text-black'>6</h1>
                    <span className='text-xs text-gray-400 text-center md:text-left'>Active Clients</span>
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-4 w-fit md:w-full mt-8'>
                <div className='w-full h-10 grid grid-cols-4 gap-4 border-b-2'>
                    {
                        tabs.map((tab, i) => (
                            <button key={i} onClick={() => setSelectedTab(tab)}
                                className={`w-full h-10 text-sm
                            ${selectedTab === tab ? "border-b-2 border-sky-600" : ""}`}>
                                <span>{tab}</span>
                            </button>
                        ))
                    }
                </div>

                <div className='grid grid-cols-2 gap-4 md:w-full w-fit'>
                    <div className='relative w-full h-10 bg-gray-100 rounded-md text-sm'>
                        <input className='w-full h-full bg-transparent pl-8 focus:border-none text-sm rounded-md'
                            type="search" name="" id="" placeholder='Search for Agent' />

                        <AiOutlineSearch className='absolute top-2 left-2 text-xl text-gray-400' />
                    </div>

                    <button onClick={() => setOpenAddNewQoute(true)}
                        className='w-full h-10 rounded-md text-white text-sm bg-primary hover:bg-darkPrimary duration-300 flex justify-center items-center'>
                        <span>Create New Quote</span>
                    </button>

                </div>

            </div>

            <div className='w-full'>


                <div className="w-full overflow-x-auto my-6">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-900 uppercase bg-slate-300 w-full"
                        // style={{ borderCollapse: "separate", borderSpacing: "0 20px" }} 
                        >
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Client
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Bussiness
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Coverages
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Expiration
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Premium
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody className='w-full'>
                            {
                                items?.map(item => (
                                    <AgentsTableRow key={item?._id} item={item} />
                                ))
                            }

                        </tbody>
                    </table>
                </div>


            </div>

            {
                openAddNewQoute && <CreateNewQuoteSidebar openAddNewQoute={openAddNewQoute} setOpenAddNewQoute={setOpenAddNewQoute} />
            }

        </section>
    );
};

export default MyAgents;