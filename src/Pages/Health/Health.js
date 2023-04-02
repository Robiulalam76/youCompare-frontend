import React from 'react';
import { Link } from 'react-router-dom';

const Health = () => {
    return (
        <section className='relative bg-whtie min-h-screen'>
            <div className='max-w-[1440px] mx-auto pb-12'>
                <div className='w-full md:w-[800px] mx-auto mt-16'>
                    <h1 className='font-bold text-rose-600 text-center mb-6'>Need health insurance for family?
                        Great! Let's get started</h1>
                </div>

                <form action="" className='grid grid-cols-1 gap-2 max-w-[700px] mx-auto' >

                    <div className='h-fit w-full p-2 hover:bg-sky-50 flex flex-col justify-center items-start rounded-md'>
                        <span className='text-sm text-sky-600 mb-1'>What's your full name?</span>
                        <input className='text-sm w-full h-8 rounded-none px-2 border-gray-300 hover:border-sky-600 focus:outline-none focus:border-green-600' type="text" placeholder='eg. John Doe' />
                    </div>

                    <div className='h-fit w-full p-2 bg-sky-50 rounded-md'>
                        <h1 className='font-bold text-left text-rose-600 text-2xl py-2'>Member 1</h1>
                        <div className='grid grid-cols-1 gap-4'>


                            <div className='flex flex-col justify-center items-start'>
                                <span className='text-sm text-sky-600 mb-1'>What's their relationship to you?</span>
                                <select className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none' name="- Relationship -" id="- Relationship -">
                                    <option className='' value="Child">Child</option>
                                    <option className='' value="Spouse">Spouse</option>
                                    <option className='' value="Parent">Parent</option>
                                </select>
                            </div>

                            <div className='flex flex-col justify-center items-start'>
                                <span className='text-sm text-sky-600 mb-1'>Please select member's date of birth?</span>
                                <input className='text-sm w-full h-8 rounded-none px-2 border-gray-300 hover:border-sky-600 focus:outline-none focus:border-green-600' type="date" placeholder='Select Your Date' />
                            </div>

                            <div className='flex flex-col justify-center items-start'>
                                <span className='text-sm text-sky-600 mb-1'>What's their gender?</span>
                                <select className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none' name="- Gender -" id="- Gender -">
                                    <option className='' value="Male">Male</option>
                                    <option className='' value="Female (Married)">Female (Married)</option>
                                    <option className='' value="Female (Single)">Female (Single)</option>
                                </select>
                            </div>

                            <div className='flex flex-col justify-center items-start'>
                                <span className='text-sm text-sky-600 mb-1'>What's their nationality?</span>
                                <select className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none' name="- Please Select -" id="- Please Select -">
                                    <option className='' value="Afghan">Afghan</option>
                                    <option className='' value="Albanian">Albanian</option>
                                    <option className='' value="Algerian">Algerian</option>
                                    <option className='' value="American">American</option>
                                    <option className='' value="Andorran">Andorran</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div className='h-fit w-full p-2 bg-sky-50 flex flex-col justify-center items-center gap-3 cursor-pointer rounded-md'>
                        <img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png" alt="" />
                        <h1 className='text-center font-bold text-blue-900'>Add another member</h1>
                    </div>



                    <div className='h-fit w-full p-2 hover:bg-sky-50 flex flex-col justify-center items-start rounded-md'>
                        <span className='text-sm text-sky-600 mb-1'>When do you want to start your insurance ?</span>
                        <div className='grid grid-cols-4 gap-2 md:gap-4'>
                            <select className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none' name="- Please Select -" id="- Please Select -">
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

                            <select className='text-sm col-span-2 w-full md:w-80 h-8 rounded-none px-3 border border-gray-300 hover:border-sky-600 focus:outline-none' name="- Please Select -" id="- Please Select -">
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



                            <select className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none' name="- Please Select -" id="- Please Select -">
                                <option className='' value="2023">2023</option>
                                <option className='' value="2024">2024</option>
                                <option className='' value="2025">2025</option>
                                <option className='' value="2026">2026</option>
                                <option className='' value="2027">2027</option>
                                <option className='' value="2028">2028</option>
                            </select>
                        </div>
                    </div>


                    <div className='h-fit w-full p-2 hover:bg-sky-50 flex flex-col justify-center items-start rounded-md'>
                        <span className='text-sm text-sky-600 mb-1'>When do you want to start your insurance ?</span>
                        <div className='flex items-center justify-between gap-4 w-full'>
                            <div className='p-1 w-14 h-8 rounded-none px-3 border-gray-300 hover:border-sky-600 border' >
                                <img className='w-full h-full' src="https://cdn-icons-png.flaticon.com/128/206/206626.png" alt="" />
                            </div>
                            <input className='flex-grow text-sm w-full h-8 rounded-none px-2 border-gray-300 hover:border-sky-600 focus:outline-none focus:border-green-600' type="number" placeholder='465216365' />
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <input className='cursor-pointer w-4 h-4' type="checkbox" name="accept" id="accept" />
                        <span className='cursor-pointer text-sky-600' htmlFor="accept">I am happy to receive email and/or sms communications regarding updates to my quotes and policies</span>
                    </div>


                    <Link to='/driver' className='w-full h-10 bg-rose-600 hover:bg-rose-700 duration-300 flex justify-center items-center border-b-4 border-rose-900'>
                        <span className='font-bold text-white'>One more step...</span>
                    </Link>

                </form>
            </div>



            {/* <div className='h-fit w-full p-2 hover:bg-sky-50 flex flex-col justify-center items-start rounded-md'>
                        <span className='text-sm text-sky-600 mb-1'>Which emirates is your visa issued from?</span>
                        <select className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none' name="city" id="city">
                            <option className='' value="Dhaka">Dhaka</option>
                            <option className='' value="Thakurgaon">Thakurgaon</option>
                            <option className='' value="Rangpur">Rangpur</option>
                            <option className='' value="Chottrogram">Chottrogram</option>
                        </select>
                    </div> */}

            {/* <div className='h-fit w-full p-2 hover:bg-sky-50 flex flex-col justify-center items-start rounded-md'>
                        <span className='text-sm text-sky-600 mb-1'>What's your email address?</span>
                        <input className='text-sm w-full h-8 rounded-none px-2 border-gray-300 hover:border-sky-600 focus:outline-none focus:border-green-600' type="text" placeholder='your@gmail.com' />
                    </div> */}

        </section>
    );
};

export default Health;