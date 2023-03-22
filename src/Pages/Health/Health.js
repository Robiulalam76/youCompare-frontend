import React from 'react';
import { Link } from 'react-router-dom';

const Health = () => {
    return (
        <section className='relative bg-whtie px-4 min-h-screen'>
            <div className='max-w-[1440px] mx-auto py-12'>
                <div className='w-full md:w-[800px] mx-auto'>
                    <h1 className='text-3xl font-bold text-rose-600 text-center mb-6'>Need health insurance for family?
                        Great! Let's get started</h1>
                </div>

                <form action="" className='grid grid-cols-1 gap-4 max-w-[700px] mx-auto' >

                    <div className='md:h-44 h-fit w-full p-2 md:p-5 hover:bg-blue-50 flex flex-col justify-center items-start rounded-md'>
                        <label className='text-xl font-semibold text-blue-900' htmlFor="">What's your full name?</label>
                        <input className='w-full h-14 rounded-none px-3 border-gray-400 hover:border-blue-600 focus:outline-none focus:border-green-600' type="text" placeholder='eg. John Doe' />
                    </div>

                    <div className='md:h-44 h-fit w-full p-2 md:p-5 hover:bg-blue-50 flex flex-col justify-center items-start rounded-md'>
                        <label className='text-xl font-semibold text-blue-900' htmlFor="">Which emirates is your visa issued from?</label>
                        <select className='w-full h-14 rounded-none px-3 border border-gray-400 hover:border-blue-600 focus:outline-none' name="city" id="city">
                            <option className='' value="Dhaka">Dhaka</option>
                            <option className='' value="Thakurgaon">Thakurgaon</option>
                            <option className='' value="Rangpur">Rangpur</option>
                            <option className='' value="Chottrogram">Chottrogram</option>
                        </select>
                    </div>

                    <div className='md:h-44 h-fit w-full p-2 md:p-5 hover:bg-blue-50 flex flex-col justify-center items-start rounded-md'>
                        <label className='text-xl font-semibold text-blue-900' htmlFor="">Is your salary more than AED 4,000 per month?</label>
                        <div className='flex items-center gap-5 mt-6'>
                            <button className='w-20 h-20 rounded-full bg-blue-900 flex justify-center items-center'>
                                <span className='text-white font-bold'>NO</span>
                            </button>
                            <button className='w-20 h-20 rounded-full bg-gray-200 border border-blue-900 flex justify-center items-center'>
                                <span className='text-blue-900 font-bold'>YES</span>
                            </button>
                        </div>
                    </div>


                    <div>
                        <div className='md:h-44 h-fit w-full p-2 md:p-5 hover:bg-blue-50 flex flex-col justify-center items-start runded-t'>
                            <label className='text-xl font-semibold text-blue-900' htmlFor="">Do you need insurance for yourself?</label>
                            <div className='flex items-center gap-5 mt-6'>
                                <button className='w-20 h-20 rounded-full bg-blue-900 flex justify-center items-center'>
                                    <span className='text-white font-bold'>NO</span>
                                </button>
                                <button className='w-20 h-20 rounded-full bg-gray-200 border border-blue-900 flex justify-center items-center'>
                                    <span className='text-blue-900 font-bold'>YES</span>
                                </button>
                            </div>
                        </div>


                        <div className='h-fit w-full p-5 bg-blue-50 rounded-md pt-6'>
                            <h1 className='font-bold text-left text-rose-600 text-2xl py-6'>Member 1</h1>




                            <div className='grid grid-cols-1 gap-4'>


                                <div className='flex flex-col justify-center items-start'>
                                    <label className='text-xl font-semibold text-blue-900' htmlFor="">What's their relationship to you?</label>
                                    <select className='w-full h-14 rounded-none px-3 border border-gray-400 hover:border-blue-600 focus:outline-none' name="- Relationship -" id="- Relationship -">
                                        <option className='' value="Child">Child</option>
                                        <option className='' value="Spouse">Spouse</option>
                                        <option className='' value="Parent">Parent</option>
                                    </select>
                                </div>

                                <div className='flex flex-col justify-center items-start'>
                                    <label className='text-xl font-semibold text-blue-900' htmlFor="">Please select member's date of birth?</label>
                                    <input className='w-full h-14 rounded-none px-3 border-gray-400 hover:border-blue-600 focus:outline-none focus:border-green-600' type="date" placeholder='Select Your Date' />
                                </div>

                                <div className='flex flex-col justify-center items-start'>
                                    <label className='text-xl font-semibold text-blue-900' htmlFor="">What's their gender?</label>
                                    <select className='w-full h-14 rounded-none px-3 border border-gray-400 hover:border-blue-600 focus:outline-none' name="- Gender -" id="- Gender -">
                                        <option className='' value="Male">Male</option>
                                        <option className='' value="Female (Married)">Female (Married)</option>
                                        <option className='' value="Female (Single)">Female (Single)</option>
                                    </select>
                                </div>

                                <div className='flex flex-col justify-center items-start'>
                                    <label className='text-xl font-semibold text-blue-900' htmlFor="">What's their nationality?</label>
                                    <select className='w-full h-14 rounded-none px-3 border border-gray-400 hover:border-blue-600 focus:outline-none' name="- Please Select -" id="- Please Select -">
                                        <option className='' value="Afghan">Afghan</option>
                                        <option className='' value="Albanian">Albanian</option>
                                        <option className='' value="Algerian">Algerian</option>
                                        <option className='' value="American">American</option>
                                        <option className='' value="Andorran">Andorran</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='h-fit w-full p-5 bg-blue-50 flex flex-col justify-center items-center gap-6 rounded-md'>
                        <img className='w-20 h-20' src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png" alt="" />
                        <h1 className='text-center font-bold text-xl text-blue-900'>Add another member</h1>
                    </div>



                    <div className='md:h-44 h-fit w-full p-2 md:p-5 hover:bg-blue-50 flex flex-col justify-center items-start rounded-md'>
                        <label className='text-xl font-semibold text-blue-900' htmlFor="">When do you want to start your insurance ?</label>
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
                                <option className='' value="2025">2025</option>
                                <option className='' value="2026">2026</option>
                                <option className='' value="2027">2027</option>
                                <option className='' value="2028">2028</option>
                            </select>
                        </div>
                    </div>


                    <div className='md:h-44 h-fit w-full p-2 md:p-5 hover:bg-blue-50 flex flex-col justify-center items-start rounded-md'>
                        <label className='text-xl font-semibold text-blue-900' htmlFor="">When do you want to start your insurance ?</label>
                        <div className='flex items-center justify-between gap-4 w-full'>
                            <div className='p-1 w-20 h-14 rounded-none px-3 border-gray-400 hover:border-blue-600 border' >
                                <img className='w-full h-full' src="https://cdn-icons-png.flaticon.com/128/206/206626.png" alt="" />
                            </div>
                            <input className='flex-grow w-full h-14 rounded-none px-3 border-gray-400 hover:border-blue-600 focus:outline-none focus:border-green-600' type="number" placeholder='465216365' />
                        </div>
                    </div>

                    <div className='md:h-44 h-fit w-full p-2 md:p-5 hover:bg-blue-50 flex flex-col justify-center items-start rounded-md'>
                        <label className='text-xl font-semibold text-blue-900' htmlFor="">What's your email address?</label>
                        <input className='w-full h-14 rounded-none px-3 border-gray-400 hover:border-blue-600 focus:outline-none focus:border-green-600' type="text" placeholder='your@gmail.com' />
                    </div>


                    <div className='flex items-center gap-4'>
                        <input className='cursor-pointer w-5 h-5' type="checkbox" name="accept" id="accept" />
                        <label className='cursor-pointer text-xl text-blue-900 font-bold' htmlFor="accept">I am happy to receive email and/or sms communications regarding updates to my quotes and policies</label>
                    </div>


                    <Link to='/driver' className='w-full h-16 bg-rose-600 hover:bg-rose-700 duration-300 flex justify-center items-center border-b-4 border-rose-900'>
                        <span className='text-2xl font-bold text-white'>One more step...</span>
                    </Link>

                </form>
            </div>
        </section>
    );
};

export default Health;