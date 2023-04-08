import { Drawer } from 'antd';
import React from 'react';
import { BsGearFill } from "react-icons/bs"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { BiEditAlt } from "react-icons/bi"

const PolicyDetailsDrawer = ({ policy, setSelectedPolicy, open }) => {

    return (
        <Drawer
            placement='right'
            visible={open}
            closable={false}
            width='480px'
            onClose={() => setSelectedPolicy(null)}
        >

            <div className="pointer-events-auto w-full">
                <div className='w-full h-10 bg-primary text-white flex justify-between items-center px-2'>
                    <span>Nationwide</span>
                </div>
                <div className='bg-white w-full h-fit border-x border-b mb-4'>
                    <div className='w-full h-40 bg-slate-400 flex justify-center items-center'>
                        <div className='w-24 h-24 bg-slate-200 text-primary flex justify-center items-center border-4 border-primary'>
                            <BsGearFill className='text-5xl' />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 w-fit p-2'>

                        <div className='grid grid-cols-2 items-center gap-4'>
                            <div className='flex justify-between items-center gap-4 w-full'>
                                <span className='text-black text-sm'>Insurance Type</span>
                                <span className='text-gray-500'>:</span>
                            </div>
                            <span className='text-xs text-gray-500'>{policy?.insurance_type}</span>
                        </div>

                        <div className='grid grid-cols-2 items-center gap-4'>
                            <div className='flex justify-between items-center gap-4 w-full'>
                                <span className='text-black text-sm'>Effective Data</span>
                                <span className='text-gray-500'>:</span>
                            </div>
                            <span className='text-xs text-gray-500'>{policy?.effective_data}</span>
                        </div>

                        <div className='grid grid-cols-2 items-center gap-4'>
                            <div className='flex justify-between items-center gap-4 w-full'>
                                <span className='text-black text-sm'>Anniversary Data</span>
                                <span className='text-gray-500'>:</span>
                            </div>
                            <span className='text-xs text-gray-500'>{policy?.anniversary_data}</span>
                        </div>

                        <div className='grid grid-cols-2 items-center gap-4'>
                            <div className='flex justify-between items-center gap-4 w-full'>
                                <span className='text-black text-sm'>Policy Mode</span>
                                <span className='text-gray-500'>:</span>
                            </div>
                            <span className='text-xs text-gray-500'>{policy?.policy_mode}</span>
                        </div>

                    </div>

                </div>

                <div className='w-full h-10 bg-primary text-white flex justify-between items-center px-2'>
                    <span>Premium Details</span>
                </div>
                <div className='bg-white w-full h-fit border-x border-b mb-4 px-2'>
                    <div className='grid grid-cols-2 items-center gap-4 py-2'>
                        <div className='flex justify-between items-center gap-4 w-full'>
                            <span className='text-black text-sm'>Premium Anualized</span>
                            <span className='text-gray-500'>:</span>
                        </div>
                        <span className='text-xs text-gray-500'>${policy?.amount}</span>
                    </div>
                </div>

                <div className='w-full h-10 bg-primary text-white flex justify-between items-center px-2'>
                    <span>Covarage & Limits of Liablity</span>
                </div>
                <div className='bg-white w-full h-fit border-x border-b mb-4 p-2'>
                    <table
                        className="min-w-full border text-center font-light text-sm">
                        <thead className="border-b font-medium text-sm">
                            <tr>
                                <th
                                    scope="col"
                                    className="py-2 text-sm">
                                    Covarage Name
                                </th>
                                <th
                                    scope="col"
                                    className="py-2 text-sm">
                                    Amount
                                </th>
                                <th scope="col" className="py-2 text-sm">
                                    Limits
                                </th>
                                <th scope="col" className="py-2 text-sm">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b text-xs">
                                <td
                                    className="whitespace-nowrap border-r px-2 py-2 font-medium">
                                    {policy?.coverage_name}
                                </td>
                                <td
                                    className="whitespace-nowrap border-r px-2 py-2">
                                    {policy?.amount}
                                </td>
                                <td
                                    className="whitespace-nowrap border-r px-2 py-2">
                                    {policy?.limits}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2">
                                    <div className='flex items-center justify-center gap-4 text-xs'>
                                        <button className='w-7 h-7 flex justify-center items-center bg-slate-100 hover:bg-primary text-primary hover:text-white text-xl rounded-full'>
                                            <BiEditAlt />
                                        </button>
                                        <button className='w-7 h-7 flex justify-center items-center bg-slate-100 hover:bg-primary text-rose-500 hover:text-white text-xl rounded-full'>
                                            <RiDeleteBin5Fill />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </Drawer>
    );
};

export default PolicyDetailsDrawer;