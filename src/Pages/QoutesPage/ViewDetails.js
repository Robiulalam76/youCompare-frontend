import React, { useState } from 'react';
import QuoteSummary from './QuoteSummary';
import ViewDetailsModal from '../../Modals/ViewDetailsModals/ViewDetailsModal';

const tabs = ["Summary"]

const ViewDetails = () => {
    const [openModal, setOpenModal] = useState(false)
    const [selectedTab, setSelectedTab] = useState("Summary")
    return (
        <div className='p-4 mt-4'>
            <div className='h-12 w-full flex flex-col-reverse md:flex-row md:justify-between md:items-center border-b-2 border-slate-300'>
                <div className="grid grid-cols-2 w-fit items-center h-12 gap-2 bg-slate-50 rounded-md">
                    {
                        tabs?.map((tab, i) => (
                            <button key={i} onClick={() => setSelectedTab(tab)}
                                className={`w-28 h-12 transition-all duration-300 ease-linear font-bold
                            ${selectedTab === tab ? "border-b-4 border-primary text-primary" : "border-b-4 border-white"}`}
                            >
                                <span>{tab}</span>
                            </button>
                        ))
                    }
                    <button onClick={() => setOpenModal(true)}
                        className={`w-28 h-12 transition-all duration-300 ease-linear font-bold
                            ${selectedTab === "Details" ? "border-b-4 border-primary text-primary" : "border-b-4 border-white"}`}
                    >
                        <span>Details</span>
                    </button>
                </div>

                <span className='text-orange-500 text-sm font-semibold'>Best Selling Option in <span className='font-bold'>Salama Insurance</span></span>
            </div>

            {
                selectedTab === "Summary" && <QuoteSummary />
            }

            {
                openModal && <ViewDetailsModal closeModal={setOpenModal} />
            }

        </div>
    );
};

export default ViewDetails;