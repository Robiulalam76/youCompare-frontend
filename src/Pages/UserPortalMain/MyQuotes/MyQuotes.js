import React, { useState } from 'react';
import MyQuoteCard from './MyQuoteCard';
import MyQuoteSidebar from './MyQuoteSidebar';
import { AiOutlineSearch } from "react-icons/ai"

const tabs = ["All Quotes", "Recently Added", "Featured"]

const quotes = [
    {
        _id: "1",
        title: "Title NO 1",
        img: "https://www.banksathi.com/wp-content/uploads/2021/02/erwe.png"
    },
    {
        _id: "2",
        title: "Title NO 2",
        img: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
    },
    {
        _id: "3",
        title: "Title NO 3",
        img: "https://www.bajajallianz.com/blog/wp-content/uploads/2021/03/types-of-car-insurance.jpg"
    },
    {
        _id: "4",
        title: "Title NO 4",
        img: "https://www.banksathi.com/wp-content/uploads/2021/02/bank-sathi-1.png"
    },
    {
        _id: "5",
        title: "Title NO 5",
        img: "https://www.chill.ie/images/insurance-news/large/what-is-cv-insurance-l-compressor.jpg"
    },
]

const MyQuotes = () => {
    const [selectedTab, setSelectedTab] = useState("All Quotes")
    const [selectedQuote, setSelectedQuote] = useState(null)

    return (
        <section className=''>
            <div className='grid md:grid-cols-4 overflow-hidden'>
                <div className={` p-2 md:px-4 lg:px-6 col-span-4`}>

                    <div className='grid md:grid-cols-2 gap-4'>

                        <div className="order-last md:order-first grid grid-cols-3 w-fit items-center px-2 h-12 bg-white rounded-md border sahdow-sm">
                            {
                                tabs?.map((tab, i) => (
                                    <button key={i} onClick={() => setSelectedTab(tab)}
                                        className={`w-28 h-8 rounded-md text-black text-xs transition-all duration-300 ease-linear
                            ${selectedTab === tab ? "bg-slate-100" : "bg-white"}`}
                                    >
                                        <span>{tab}</span>
                                    </button>
                                ))
                            }
                        </div>

                        <div className='relative w-full h-12 bg-white rounded-md text-sm'>
                            <input className='w-full h-full bg-transparent pl-8 focus:border-none text-sm rounded-md'
                                type="search" name="" id="" placeholder='Search for Quote' />

                            <AiOutlineSearch className='absolute top-4 left-2 text-xl text-gray-400' />
                        </div>

                    </div>




                    <div className='grid grid-cols-1 gap-4 mt-8'>

                        {
                            quotes?.map((qoute, i) => (
                                <MyQuoteCard key={i} selectedQuote={selectedQuote} setSelectedQuote={setSelectedQuote}
                                    data={qoute} />
                            ))
                        }

                    </div>
                </div>


                {
                    selectedQuote && < MyQuoteSidebar className="md:col-span-1 hidden md:block"
                        data={selectedQuote} setSelectedQuote={setSelectedQuote} />
                }

            </div>


        </section>
    );
};

export default MyQuotes;