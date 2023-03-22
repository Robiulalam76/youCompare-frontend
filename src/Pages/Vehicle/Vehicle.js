import React from 'react';
import { Link } from 'react-router-dom';
import SmallTabs from '../../SmallTabs/SmallTabs';

const Vehicle = () => {
    return (
        <section className='relative bg-whtie px-4 min-h-screen'>
            <div className='max-w-[1440px] mx-auto py-12'>
                <SmallTabs />
                <div className='w-full md:w-[800px] mx-auto'>
                    <h1 className='text-3xl font-bold text-rose-600 text-center mb-6'>Need health insurance for family?
                        Great! Let's get started</h1>
                </div>

                <form action="" className='grid grid-cols-1 gap-4 max-w-[700px] mx-auto' >

                    <div className='md:h-44 h-fit w-full p-2 md:p-5 hover:bg-blue-50 flex flex-col justify-center items-start rounded-md'>
                        <label className='text-xl font-semibold text-blue-900' htmlFor="">Car Year</label>
                        <select className='w-full h-14 rounded-none px-3 border border-gray-400 hover:border-blue-600 focus:outline-none' name="carYear" id="carYear" placeholder='Car Year' >
                            <option className='' value="2020">2020</option>
                            <option className='' value="2021">2021</option>
                            <option className='' value="2022">2022</option>
                            <option className='' value="2023">2023</option>
                            <option className='' value="2024">2024</option>
                            <option className='' value="2025">2025</option>
                            <option className='' value="2026">2026</option>
                        </select>
                    </div>

                    <div className='md:h-44 h-fit w-full p-2 md:p-5 hover:bg-blue-50 flex flex-col justify-center items-start rounded-md'>
                        <label className='text-xl font-semibold text-blue-900' htmlFor="">Is your car brand new?</label>
                        <div className='flex items-center gap-5 mt-6'>
                            <button className='w-20 h-20 rounded-full bg-blue-900 flex justify-center items-center'>
                                <span className='text-white font-bold'>NO</span>
                            </button>
                            <button className='w-20 h-20 rounded-full bg-gray-200 border border-blue-900 flex justify-center items-center'>
                                <span className='text-blue-900 font-bold'>YES</span>
                            </button>
                        </div>
                    </div>

                    <div className='md:h-44 h-fit w-full p-2 md:p-5 hover:bg-blue-50 flex flex-col justify-center items-start rounded-md'>
                        <label className='text-xl font-semibold text-blue-900' htmlFor="">Are you buying your first Car?</label>
                        <div className='flex items-center gap-5 mt-6'>
                            <button className='w-20 h-20 rounded-full bg-blue-900 flex justify-center items-center'>
                                <span className='text-white font-bold'>NO</span>
                            </button>
                            <button className='w-20 h-20 rounded-full bg-gray-200 border border-blue-900 flex justify-center items-center'>
                                <span className='text-blue-900 font-bold'>YES</span>
                            </button>
                        </div>
                    </div>

                    <div className='md:h-44 h-fit w-full p-2 md:p-5 hover:bg-blue-50 flex flex-col justify-center items-start rounded-md'>
                        <label className='text-xl font-semibold text-blue-900' htmlFor="">Make</label>
                        <select className='w-full h-14 rounded-none px-3 border border-gray-400 hover:border-blue-600 focus:outline-none' name="carYear" id="carYear" placeholder='Car Year' >
                            <option className='' selected value="Make">Make</option>
                            <option className='' value="Abarth">Abarth</option>
                            <option className='' value="Alfa Romeo">Alfa Romeo</option>
                            <option className='' value="Aston Martin">Aston Martin</option>
                            <option className='' value="Audi">Audi</option>
                            <option className='' value="BAIC">BAIC</option>
                            <option className='' value="BMW">BMW</option>
                        </select>
                    </div>

                    <div className='md:h-44 h-fit w-full p-2 md:p-5 hover:bg-blue-50 flex flex-col justify-center items-start rounded-md'>
                        <label className='text-xl font-semibold text-blue-900' htmlFor="">Model</label>
                        <select className='w-full h-14 rounded-none px-3 border border-gray-400 hover:border-blue-600 focus:outline-none' name="Model" id="Model" placeholder='Model' >
                            <option className='' value="1 Series">1 Series</option>
                            <option className='' value="2 Series">2 Series</option>
                            <option className='' value="3 Series">3 Series</option>
                            <option className='' value="4 Series">4 Series</option>
                            <option className='' value="5 Series">5 Series</option>
                            <option className='' value="6 Series">6 Series</option>
                            <option className='' value="7 Series">7 Series</option>
                            <option className='' value="8 Series">8 Series</option>
                            <option className='' value="9 Series">9 Series</option>
                            <option className='' value="10 Series">10 Series</option>
                        </select>
                    </div>

                    <div className='md:h-44 h-fit w-full p-2 md:p-5 hover:bg-blue-50 flex flex-col justify-center items-start rounded-md'>
                        <label className='text-xl font-semibold text-blue-900' htmlFor="">Model Details</label>
                        <select className='w-full h-14 rounded-none px-3 border border-gray-400 hover:border-blue-600 focus:outline-none' name="modelDetails" id="modelDetails" placeholder='Model Details' >
                            <option className='' value="218i Active Tourer Sedan - 4 Cylinder">218i Active Tourer Sedan - 4 Cylinder</option>
                            <option className='' value="218i Convertible - 4 Cylinder">218i Convertible - 4 Cylinder</option>
                            <option className='' value="218i Coupe - 4 Cylinder">218i Coupe - 4 Cylinder</option>
                            <option className='' value="220D Sedan - 4 Cylinder">220D Sedan - 4 Cylinder</option>
                            <option className='' value="220i Convertible - 4 Cylinder">220i Convertible - 4 Cylinder</option>
                        </select>
                    </div>

                    <div className='flex items-center gap-4'>
                        <input className='cursor-pointer ' type="checkbox" name="accept" id="accept" />
                        <label className='cursor-pointer text-xl text-blue-900 font-bold' htmlFor="accept">My car is not in the list</label>
                    </div>

                    <div className='md:h-44 h-fit w-full p-2 md:p-5 hover:bg-blue-50 flex flex-col justify-center items-start rounded-md'>
                        <label className='text-xl font-semibold text-blue-900' htmlFor="">When was your car first registered?</label>
                        <div className='grid grid-cols-4 gap-2 md:gap-4'>
                            <select className='w-full h-14 rounded-none px-3 border border-gray-400 hover:border-blue-600 focus:outline-none' name="- Please Select -" id="- Please Select -">
                                <option className='' value="1">1</option>
                                <option className='' value="2">2</option>
                                <option className='' value="3">3</option>
                                <option className='' value="4">4</option>
                                <option className='' value="5">5</option>
                                <option className='' value="6">6</option>
                                <option className='' value="7">7</option>
                                <option className='' value="8">8</option>
                                <option className='' value="9">9</option>
                                <option className='' value="10">10</option>
                                <option className='' value="11">11</option>
                                <option className='' value="12">12</option>
                                <option className='' value="13">13</option>
                                <option className='' value="14">14</option>
                                <option className='' value="15">15</option>
                                <option className='' value="16">16</option>
                                <option className='' value="17">17</option>
                                <option className='' value="18">18</option>
                                <option className='' value="19">19</option>
                                <option className='' value="20">20</option>
                                <option className='' value="21">21</option>
                                <option className='' value="22">22</option>
                                <option className='' value="23">23</option>
                                <option className='' value="24">24</option>
                                <option className='' value="25">25</option>
                                <option className='' value="26">26</option>
                                <option className='' value="27">27</option>
                                <option className='' value="28">28</option>
                                <option className='' value="29">29</option>
                                <option className='' value="30">30</option>
                            </select>

                            <select className='col-span-2 w-full md:w-80 h-14 rounded-none px-3 border border-gray-400 hover:border-blue-600 focus:outline-none' name="- Please Select -" id="- Please Select -">
                                <option className='' value="January">January</option>
                                <option className='' value="February">February</option>
                                <option className='' value="March">March</option>
                                <option className='' value="April">April</option>
                                <option className='' value="May">May</option>
                                <option className='' value="June">June</option>
                                <option className='' value="July">July</option>
                                <option className='' value="August">August</option>
                                <option className='' value="September">September</option>
                                <option className='' value="October">October</option>
                                <option className='' value="November">November</option>
                                <option className='' value="December">December</option>
                            </select>



                            <select className='w-full h-14 rounded-none px-3 border border-gray-400 hover:border-blue-600 focus:outline-none' name="- Please Select -" id="- Please Select -">
                                <option className='' value="2023">2023</option>
                                <option className='' value="2024">2024</option>
                            </select>
                        </div>
                    </div>

                    <div className='md:h-44 h-fit w-full p-2 md:p-5 hover:bg-blue-50 flex flex-col justify-center items-start rounded-md'>
                        <label className='text-xl font-semibold text-blue-900' htmlFor="">In which city do you want to register this car?</label>
                        <select className='w-full h-14 rounded-none px-3 border border-gray-400 hover:border-blue-600 focus:outline-none' name="carYear" id="carYear" placeholder='Car Year' >
                            <option className='' value="Dubai">Dubai</option>
                            <option className='' value="Sharjah">Sharjah</option>
                            <option className='' value="Abu Dhabi">Abu Dhabi</option>
                            <option className='' value="Ajman">Ajman</option>
                            <option className='' value="Ras Al Khaimah">Ras Al Khaimah</option>
                            <option className='' value="Fujairah">Fujairah</option>
                            <option className='' value="Umm Al Quwain">Umm Al Quwain</option>
                            <option className='' value="Al Ain">Al Ain</option>
                        </select>
                    </div>

                    <div className='md:h-44 h-fit w-full p-2 md:p-5 hover:bg-blue-50 flex flex-col justify-center items-start rounded-md'>
                        <label className='text-xl font-semibold text-blue-900' htmlFor="">Is this car GCC spec AND unmodified?</label>
                        <div className='flex items-center gap-5 mt-6'>
                            <button className='w-20 h-20 rounded-full bg-blue-900 flex justify-center items-center'>
                                <span className='text-white font-bold'>NO</span>
                            </button>
                            <button className='w-20 h-20 rounded-full bg-gray-200 border border-blue-900 flex justify-center items-center'>
                                <span className='text-blue-900 font-bold'>YES</span>
                            </button>
                        </div>
                    </div>

                    <div className='md:h-44 h-fit w-full p-2 md:p-5 hover:bg-blue-50 flex flex-col justify-center items-start rounded-md'>
                        <label className='text-xl font-semibold text-blue-900' htmlFor="">Is the current policy of this car fully comprehensive?</label>
                        <div className='flex items-center gap-5 mt-6'>
                            <button className='w-20 h-20 rounded-full bg-blue-900 flex justify-center items-center'>
                                <span className='text-white font-bold'>NO</span>
                            </button>
                            <button className='w-20 h-20 rounded-full bg-gray-200 border border-blue-900 flex justify-center items-center'>
                                <span className='text-blue-900 font-bold'>YES</span>
                            </button>
                        </div>
                    </div>


                    <div className='md:h-44 h-fit w-full p-2 md:p-5 hover:bg-blue-50 flex flex-col justify-center items-start rounded-md'>
                        <label className='text-xl font-semibold text-blue-900' htmlFor="">Is the current policy of this car fully comprehensive?</label>
                        <div className='flex items-center gap-5 mt-6'>
                            <button className='w-20 h-20 rounded-full bg-blue-900 flex justify-center items-center'>
                                <span className='text-white font-bold'>NO</span>
                            </button>
                            <button className='w-20 h-20 rounded-full bg-gray-200 border border-blue-900 flex justify-center items-center'>
                                <span className='text-blue-900 font-bold'>YES</span>
                            </button>
                        </div>
                    </div>


                    <div className='md:h-44 h-fit w-full p-2 md:p-5 hover:bg-blue-50 flex flex-col justify-center items-start rounded-md'>
                        <label className='text-xl font-semibold text-blue-900' htmlFor="">Does the current policy of this car include agency repair?</label>
                        <div className='flex items-center gap-5 mt-6'>
                            <button className='w-20 h-20 rounded-full bg-blue-900 flex justify-center items-center'>
                                <span className='text-white font-bold'>NO</span>
                            </button>
                            <button className='w-20 h-20 rounded-full bg-gray-200 border border-blue-900 flex justify-center items-center'>
                                <span className='text-blue-900 font-bold'>YES</span>
                            </button>
                        </div>
                    </div>

                    <Link to='/qoutes' className='w-full h-16 bg-rose-600 hover:bg-rose-700 duration-300 flex justify-center items-center border-b-4 border-rose-900'>
                        <span className='text-2xl font-bold text-white'>Continue</span>
                    </Link>

                </form>
            </div>
        </section>
    );
};

export default Vehicle;