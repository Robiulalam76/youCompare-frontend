import React from 'react';
import { HiShare } from "react-icons/hi"
import { MdDownloadForOffline } from "react-icons/md"
import { IoMdAdd } from "react-icons/io"

const PolicyDocuments = () => {
    return (
        <div className='p-2 md:px-4 lg:px-6'>
            <div className='w-full h-10 flex justify-between items-center mb-2'>
                <span className='text-black font-bold'>Documents</span>
                <button className='flex justify-center items-center gap-2 text-sm w-40 h-8 text-white bg-primary hover:bg-darkPrimary duration-300'>
                    <IoMdAdd className='text-xl' />
                    <span>Add Document</span>
                </button>
            </div>
            <div className='w-full overflow-x-auto cursor-pointer'>
                <table
                    className="min-w-full border text-center text-sm">
                    <thead className="border-b text-sm bg-slate-400 text-white overflow-hidden">
                        <tr>
                            <th
                                scope="col"
                                className="py-1 text-xs font-normal">
                                #
                            </th>
                            <th
                                scope="col"
                                className="py-1 text-xs font-normal text-left">
                                Document Name
                            </th>
                            <th
                                scope="col"
                                className="py-1 text-xs font-normal">
                                Policy NO
                            </th>
                            <th scope="col" className="py-1 text-xs font-normal">
                                Category
                            </th>
                            <th scope="col" className="py-1 text-xs font-normal">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b text-xs bg-white">
                            <td
                                className="whitespace-nowrap border-r px-2 py-1 font-medium">
                                1
                            </td>
                            <td
                                className="whitespace-nowrap border-r px-2 py-1 text-left">
                                new_document_name.pdf
                            </td>
                            <td
                                className="whitespace-nowrap border-r px-2 py-1">
                                41545
                            </td>
                            <td
                                className="whitespace-nowrap border-r px-2 py-1">
                                Health
                            </td>
                            <td className="whitespace-nowrap px-2 py-1">
                                <div className='flex items-center justify-center gap-4 text-xs'>
                                    <button className='w-7 h-7 flex justify-center items-center bg-slate-100 hover:bg-primary text-primary hover:text-white text-xl rounded-full'>
                                        <MdDownloadForOffline />
                                    </button>
                                    <button className='w-7 h-7 flex justify-center items-center bg-slate-100 hover:bg-primary text-rose-500 hover:text-white rounded-full'>
                                        <HiShare />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b text-xs bg-white">
                            <td
                                className="whitespace-nowrap border-r px-2 py-1 font-medium">
                                1
                            </td>
                            <td
                                className="whitespace-nowrap border-r px-2 py-1 text-left">
                                new_document_name.pdf
                            </td>
                            <td
                                className="whitespace-nowrap border-r px-2 py-1">
                                41545
                            </td>
                            <td
                                className="whitespace-nowrap border-r px-2 py-1">
                                Health
                            </td>
                            <td className="whitespace-nowrap px-2 py-1">
                                <div className='flex items-center justify-center gap-4 text-xs'>
                                    <button className='w-7 h-7 flex justify-center items-center bg-slate-100 hover:bg-primary text-primary hover:text-white text-xl rounded-full'>
                                        <MdDownloadForOffline />
                                    </button>
                                    <button className='w-7 h-7 flex justify-center items-center bg-slate-100 hover:bg-primary text-rose-500 hover:text-white rounded-full'>
                                        <HiShare />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b text-xs bg-white">
                            <td
                                className="whitespace-nowrap border-r px-2 py-1 font-medium">
                                1
                            </td>
                            <td
                                className="whitespace-nowrap border-r px-2 py-1 text-left">
                                new_document_name.pdf
                            </td>
                            <td
                                className="whitespace-nowrap border-r px-2 py-1">
                                41545
                            </td>
                            <td
                                className="whitespace-nowrap border-r px-2 py-1">
                                Health
                            </td>
                            <td className="whitespace-nowrap px-2 py-1">
                                <div className='flex items-center justify-center gap-4 text-xs'>
                                    <button className='w-7 h-7 flex justify-center items-center bg-slate-100 hover:bg-primary text-primary hover:text-white text-xl rounded-full'>
                                        <MdDownloadForOffline />
                                    </button>
                                    <button className='w-7 h-7 flex justify-center items-center bg-slate-100 hover:bg-primary text-rose-500 hover:text-white rounded-full'>
                                        <HiShare />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b text-xs bg-white">
                            <td
                                className="whitespace-nowrap border-r px-2 py-1 font-medium">
                                1
                            </td>
                            <td
                                className="whitespace-nowrap border-r px-2 py-1 text-left">
                                new_document_name.pdf
                            </td>
                            <td
                                className="whitespace-nowrap border-r px-2 py-1">
                                41545
                            </td>
                            <td
                                className="whitespace-nowrap border-r px-2 py-1">
                                Health
                            </td>
                            <td className="whitespace-nowrap px-2 py-1">
                                <div className='flex items-center justify-center gap-4 text-xs'>
                                    <button className='w-7 h-7 flex justify-center items-center bg-slate-100 hover:bg-primary text-primary hover:text-white text-xl rounded-full'>
                                        <MdDownloadForOffline />
                                    </button>
                                    <button className='w-7 h-7 flex justify-center items-center bg-slate-100 hover:bg-primary text-rose-500 hover:text-white rounded-full'>
                                        <HiShare />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b text-xs bg-white">
                            <td
                                className="whitespace-nowrap border-r px-2 py-1 font-medium">
                                1
                            </td>
                            <td
                                className="whitespace-nowrap border-r px-2 py-1 text-left">
                                new_document_name.pdf
                            </td>
                            <td
                                className="whitespace-nowrap border-r px-2 py-1">
                                41545
                            </td>
                            <td
                                className="whitespace-nowrap border-r px-2 py-1">
                                Health
                            </td>
                            <td className="whitespace-nowrap px-2 py-1">
                                <div className='flex items-center justify-center gap-4 text-xs'>
                                    <button className='w-7 h-7 flex justify-center items-center bg-slate-100 hover:bg-primary text-primary hover:text-white text-xl rounded-full'>
                                        <MdDownloadForOffline />
                                    </button>
                                    <button className='w-7 h-7 flex justify-center items-center bg-slate-100 hover:bg-primary text-rose-500 hover:text-white rounded-full'>
                                        <HiShare />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PolicyDocuments;