import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import banner from '../../accets/images/user-portal-banner.png'
import img1 from '../../accets/icons/qoute.png'
import img2 from '../../accets/icons/policy.png'
import img3 from '../../accets/icons/claim.png'
import car2 from '../../accets/icons/car.png'
import life from '../../accets/icons/life.png'
import health from '../../accets/icons/health.png'
import home from '../../accets/icons/home.png'
import arrowDown from '../../accets/icons/arrow-down.svg'
import { Button, Grid } from '@mui/material';

import LifePic from "../../accets/life.svg";
import TravelPic from "../../accets/driver.svg";
import car from "../../accets/car-image.svg";
import HealthPic from "../../accets/health.svg";

const insurances = [
    {
        title: "Auto Insurance",
        url: "vehicle",
        color: "#FFDFD2",
        image: car,
        description:
            "Auto insurance is designed to protect yourself and others agains many various risks",
    },
    {
        title: "Life Insurance",
        url: "life",
        color: "#D4E5FB",
        image: LifePic,
        description:
            "Prepare for your family's future in the case of an unexpected tragedy. Insurance helps you.",
    },
    {
        title: "Travel Insurance",
        url: "home/travel",
        color: "#FDEDC9",
        image: TravelPic,
        description:
            "Insurance plans that cover trip cancellation, travel medicines and many more from your loss.",
    },
    {
        title: "Health Insurance",
        url: "health",
        color: "#FFDAED",
        image: HealthPic,
        description:
            "Health is the most important thing that we should protect. Health insurance will take care.",
    },
];

const items = ["User", "broker", "Insurar"]

const UserPortal = () => {
    const { path, url } = useRouteMatch();
    const [showItems, setShowItems] = useState(0)
    return (
        <section>
            <div className='relative flex justify-center w-full h-96'>
                <img className='w-full h-96 object-fill' src={banner} alt="" />

                <div className='absolute -bottom-8 flex flex-col flex-wrap md:flex-row md:justify-center md:items-center gap-4 md:gap-6' >
                    <Link to='/user-portal/get-a-quote'
                        className="flex items-center justify-start pl-4 gap-4 rounded bg-white hover:bg-sky-500 text-black hover:text-white duration-150 shadow border hover:border-[#0029FF] w-52 h-16">
                        <div className='flex items-start justify-center gap-4'>
                            <img className='w-6 mt-2' src={img1} alt="" />
                            <div className='flex flex-col'>
                                <span className='font-bold text-xl'>GET A QUOTE</span>
                                <span className='text-sm'>or Advise</span>
                            </div>
                        </div>
                    </Link>
                    <Link to='/payment'
                        className="flex items-center justify-start pl-4 gap-4 rounded bg-white hover:bg-sky-500 text-black hover:text-white duration-150 shadow border hover:border-[#0029FF] w-52 h-16">
                        <div className='flex items-start justify-center gap-4'>
                            <img className='w-6 mt-2' src={img2} alt="" />
                            <div className='flex flex-col'>
                                <span className='font-bold text-xl'>MAKE</span>
                                <span className='text-sm'>A Payment</span>
                            </div>
                        </div>
                    </Link>
                    <Link to='/claim'
                        className="flex items-center justify-start pl-4 gap-4 rounded bg-white hover:bg-sky-500 text-black hover:text-white duration-150 shadow border hover:border-[#0029FF] w-52 h-16">
                        <div className='flex items-start justify-center gap-4'>
                            <img className='w-6 mt-2' src={img3} alt="" />
                            <div className='flex flex-col'>
                                <span className='font-bold text-xl'>SUBMIT</span>
                                <span className='text-sm'>A Claim</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>





            <div className='mt-16 w-full'>

                <div className='relative w-full md:w-72 mb-6'>
                    <div onClick={() => setShowItems(showItems === 1 ? 0 : 1)}
                        className='w-full h-10 border border-gray-500 hover:border-sky-600 focus:outline-none flex justify-between px-2 items-center'>
                        <p className='text-gray-600 text-sm'>Home</p>
                        <img className='w-5' src={arrowDown} alt="" />
                    </div>
                    {
                        showItems === 1 && <div className='absolute z-50 top-10 border-x border-b border-gray-400 hover:border-sky-600 focus:outline-none shadow w-full max-h-44 overflow-y-auto'>
                            {
                                items?.map(value => (
                                    <Link to={`/user-portal/${value.toLocaleLowerCase()}`} className='w-full h-10 flex justify-start items-center bg-white hover:bg-sky-100 text-sm px-4'>
                                        <h1>{value}</h1>
                                    </Link>
                                ))
                            }
                        </div>
                    }
                </div>

                <h1 className='font-bold text-xl text-left text-black mb-4'>Brows our available product</h1>

                <div>
                    <Grid container>
                        {insurances.map((insurance, i) => (
                            <Grid
                                item
                                style={{ marginTop: "1%" }}
                                lg={3}
                                xs={12}
                                md={6}
                                sm={6}
                                key={i}
                            >
                                <div>
                                    <Link className="Link" to={`${insurance.url}`}>
                                        <Button
                                            className="autoInsurance"
                                            style={{
                                                backgroundColor: insurance.color,
                                                margin: "1%",
                                                borderRadius: "15px",
                                            }}
                                            variant="text"
                                        >
                                            <div className="insuranceDiv">
                                                <img
                                                    style={{ height: "120px" }}
                                                    src={insurance.image}
                                                    alt=""
                                                />
                                                {/* <car /> */}
                                                <div className="insuranceDetails">
                                                    <h1
                                                        style={{ fontSize: "25px", padding: "0px 15px" }}
                                                        className="insurance"
                                                    >
                                                        {insurance.title}
                                                    </h1>
                                                    <p className="poppinFont" style={{ fontSize: "12px" }}>
                                                        {insurance.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Button>
                                    </Link>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>

            </div>
        </section>
    );
};

export default UserPortal;