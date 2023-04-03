import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import img1 from '../../../accets/icons/home.png'
import img2 from '../../../accets/icons/qoute.png'
import img3 from '../../../accets/icons/claim.png'
import img4 from '../../../accets/icons/policy.png'
import img5 from '../../../accets/icons/help.png'
import search from '../../../accets/icons/search.png'
import arrowDown from '../../../accets/icons/arrow-down.svg'
import UserPortalSidebar from './UserPortalSidebar';

const items = [
    { title: "Customer’s Panel", url: "customer-panel" },
    { title: "Broker’s Panel", url: "broker-panel" },
    { title: "Agent’s Panel", url: "agent-panel" },
    { title: "Insurar Panel", url: "insurar-panel" },
]

const UserPortalLayout = ({ children }) => {
    const { pathname } = useLocation()
    const [showItems, setShowItems] = useState(0)

    // console.log(pathname.length);
    return (
        <main className='bg-gradient-to-r from-blue-100 via-purple-100 to-sky-100 min-h-screen'>

            <div className='relative flex justify-between w-full min-h-screen'>
                <UserPortalSidebar />

                <div className='flex-grow w-full h-full p-2 md:px-4 lg:px-6 pt-24'>
                    {children}
                </div>
            </div>

        </main>
    );
};

export default UserPortalLayout;