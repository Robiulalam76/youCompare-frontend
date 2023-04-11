import React, { useState } from 'react';
import QuoteFilter from './QuoteFilter';
import QuoteCard from './QuoteCard';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';


const sortItems = ["Best Price", "Low Price", "Medium Price"]
const Quotes = () => {
    const [sortItem, setSortItem] = useState(false)
    const [selectedSortItem, setSelectedSortItem] = useState("Best Price")

    const hanldeSelectSortItems = (data) => {
        setSelectedSortItem(data)
        setSortItem(false)
    }
    return (
        <div className='max-w-[1440px] mx-auto bg-[#F6F7F8] py-6 px-4'>

            <div className='flex flex-col md:flex-row lg:items-center gap-4 mt-6 mb-2'>
                <h1 className='text-2xl font-bold text-green-600'>Hi Nahid!</h1>
                <p className='text-black font-semibold'>We Found 4 Quotes for Your Toyota Acura 1.6 Limited</p>
            </div>

            <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-6'>
                <QuoteFilter />

                <div className='w-full grid grid-cols-1 gap-6 '>
                    <div className='grid lg:grid-cols-2 gap-2'>

                        <div className='flex items-center gap-2 w-full'>
                            <span className='text-gray-700 font-bold'>Sort By: </span>
                            <div className='relative mb-2'>
                                <div onClick={() => setSortItem(!sortItem)}
                                    className='w-36 h-10 border shadow flex justify-between px-2 items-center'>
                                    <p className='text-gray-600'>{selectedSortItem}</p>
                                    {
                                        sortItem ? <IoMdArrowDropup className='text-xl' /> : <IoMdArrowDropdown className='text-xl' />
                                    }
                                </div>
                                {
                                    sortItem && <div className='absolute z-50 top-10 border shadow w-full max-h-44 overflow-y-auto'>
                                        {
                                            sortItems.map(w => (
                                                <button onClick={() => hanldeSelectSortItems(w)} className='w-full h-10 flex justify-start items-center bg-white hover:bg-gray-100 px-4'>
                                                    <h1>{w}</h1>
                                                </button>
                                            ))
                                        }
                                    </div>
                                }
                            </div>
                        </div>

                        {/* <div className='flex-grow flex items-center gap-2 w-full'>
                                <img className='w-6' src="" alt="" />
                                <span>This Offer Will Be Expire in:
                                    <span className='text-[#046BFF] font-bold'>24:50:23</span></span>
                            </div> */}

                        <div className='flex items-center justify-start md:justify-end gap-2 w-full'>
                            <span className='text-gray-700 font-bold'>Visualize as: </span>
                            <div className='flex justify-between items-center h-12 w-56 px-2 border shasow rounded' >
                                <div className='flex items-center gap-2'>
                                    <input type="checkbox" name="bestPrice" id="bestPrice" />
                                    <label htmlFor="bestPrice">Best Price</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type="checkbox" name="compare" id="compare" />
                                    <label htmlFor="compare">Compare</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <QuoteCard />
                    <QuoteCard />
                    <QuoteCard />
                    <QuoteCard />
                </div>
            </div>
        </div>
    );
};

export default Quotes;