import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import img1 from '../../../accets/icons/home.png'
// import img2 from '../../../accets/icons/qoute.png'
// import img3 from '../../../accets/icons/claim.png'
// import img4 from '../../../accets/icons/policy.png'
// import img5 from '../../../accets/icons/help.png'
// import search from '../../../accets/icons/search.png'
// import arrowDown from '../../../accets/icons/arrow-down.svg'
import PortalSidebar from './PortalSidebar';

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
        <main className='min-h-screen mx-auto bg-slate-100'>
            <div className=' h-10 bg-white w-full border-b-2 border-slate-100'>

            </div>

            <div className='relative flex justify-between w-full min-h-screen'>
                <PortalSidebar />

                <div className='relative flex-grow w-full h-full overflow-hidden'>
                    {children}
                </div>
            </div>

        </main>
    );
};

export default UserPortalLayout;