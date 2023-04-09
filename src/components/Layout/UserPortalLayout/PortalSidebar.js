import React, { useEffect, useRef, useState } from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { TbBlockquote } from 'react-icons/tb';
import { RiBilliardsLine } from 'react-icons/ri';
import { CgMenuLeft } from 'react-icons/cg';
import { SiIobroker } from 'react-icons/si';
import { MdAdminPanelSettings } from 'react-icons/md';

import { FaUsers } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const items = [
    // { title: "Admin Panel", url: "admin-panel", icon: <MdAdminPanelSettings /> },
    { title: "Cutomer-panel", url: "customer-panel", icon: <FaUsers /> },
    { title: "My Agents", url: "my-agents", icon: <BsFillPersonLinesFill /> },
    { title: "My Quotes", url: "my-quotes", icon: <TbBlockquote /> },
    { title: "Brokers Panel", url: "brokers", icon: <SiIobroker /> },
    // { title: "Billing", url: "billing", icon: <RiBilliardsLine /> },
    // { title: "Rafferans", url: "rafferans", icon: <FaUsers /> },
]

const PortalSidebar = () => {
    const { pathname } = useLocation()
    const [showItems, setShowItems] = useState(1)
    const [open, setOpen] = useState(false)

    // console.log(open);

    let closeRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!closeRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });
    return (
        <section ref={closeRef} className='bg-white h-screen relative'>

            <div className={`min-w-[170px] absolute md:static h-screen  z-30 left-0 top-0 duration-300 bg-white
            ${open ? "left-10 shadow" : "-left-[1800px] md:left-0 hidden md:block"}`
            }>
                <div className='relative w-full'>

                    {
                        showItems === 1 && <div className='flex flex-col items-center justify-start w-full max-h-44 overflow-y-auto mt-12 md:mt-2'>

                            {
                                items?.map(value => (
                                    <Link to={`/portal/${value?.url}`}
                                        // onClick={() => setShowItems(0)}
                                        className={`w-full h-10 flex justify-start items-center gap-3 text-sm px-2 
                                        ${pathname === `/portal/${value?.url}` ? "text-primary bg-slate-100" : "hover:text-primary hover:bg-sky-100"}`}>
                                        <span className='hidden md:block'>
                                            {value?.icon}
                                        </span>
                                        <h1>{value?.title}</h1>
                                    </Link>
                                ))
                            }
                        </div>
                    }
                </div>

            </div>

            <div className={`relative w-10 pt-[8px] md:hidden z-40 ${open ? "" : ""}`}>

                {
                    showItems === 1 && <div className='flex flex-col items-center justify-start w-full overflow-y-auto'>

                        <button
                            onClick={() => setOpen(!open)}
                            className={`w-full h-10 flex justify-center items-center border-b hover:text-primary hover:bg-sky-100 mb-1`}>
                            <CgMenuLeft />
                        </button>


                        {
                            items?.map(value => (
                                <Link to={`/portal/${value?.url}`}
                                    // onClick={() => setShowItems(0)}
                                    className={`w-full h-6 flex justify-center items-center
                    ${pathname === `/portal/${value?.url}` ? "text-primary bg-slate-100" : "hover:text-primary hover:bg-sky-100"}`}>
                                    {value?.icon}
                                </Link>
                            ))
                        }
                    </div>
                }
            </div>

        </section>
    );
};

export default PortalSidebar;