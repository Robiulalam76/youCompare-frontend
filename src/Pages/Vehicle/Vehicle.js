import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import arrowDown from '../../accets/icons/arrow-down.svg'
import BrandDropdown from '../../components/Dropdowns/VehicleDropdowns/BrandDropdown';
import DropdownValues from '../../components/Dropdowns/VehicleDropdowns/DropdownValues';
import ModelDropdown from '../../components/Dropdowns/VehicleDropdowns/ModelDropdown';
import YearDropdown from '../../components/Dropdowns/VehicleDropdowns/YearDropdown';
import { car } from '../../utils/jsonData/Car';
import { truck } from '../../utils/jsonData/Track';
import { Van } from '../../utils/jsonData/Van';

const vehicleItems = [
    { id: '1', title: 'Car' },
    { id: '2', title: 'Track' },
    { id: '3', title: 'Van' }
]

const types = ["Third Perty", "Comprehensive"]
const typeOfUseItems = ["Commercial", "Private"]

const Vehicle = () => {
    const carItems = car;
    const truckItems = truck;
    const vanItems = Van;
    const [showItems, setShowItems] = useState(0)
    const [selectedVehicle, setSelectedVehicle] = useState({ id: '1', title: 'Car' })
    const [selectedYear, setSelectedYear] = useState('')
    const [seletedModel, setSeletedModel] = useState('')
    const [selectedBrand, setSelectedBrand] = useState('')
    const [items, setItems] = useState([])

    const [selectedType, setSelectedType] = useState("")
    const [selectedTypeofUse, setSelectedTypeofUse] = useState("")

    const hanldeSelectWarranty = (data) => {
        setSelectedVehicle(data)
        setShowItems(0)
    }

    const handleBrand = (brand) => {
        setSelectedBrand(brand)
        setShowItems(0)
        if (selectedVehicle?.title === "Car") {
            const getData = carItems?.filter(i => i?.Brand === brand)
            setItems(getData);
        }
        else if (selectedVehicle?.title === "Track") {
            const getData = truckItems?.filter(i => i?.Brand === brand)
            setItems(getData);
        }
        else if (selectedVehicle?.title === "Van") {
            const getData = vanItems?.filter(i => i?.Brand === brand)
            setItems(getData);
        }
    }

    return (

        <section className='relative bg-whtie px-4 min-h-screen'>
            <div className='max-w-[1440px] mx-auto pb-12'>

                <div className='w-full md:w-[800px] mx-auto'>
                    <h1 className='text-xl font-bold text-rose-600 text-center my-3'>Need Vehicle insurance for family?
                        Great! Let's get started
                    </h1>
                </div>

                <form action="" className='grid grid-cols-1 gap-2 max-w-[700px] mx-auto' >

                    <div className='h-fit w-full p-2 hover:bg-sky-50 flex flex-col justify-center items-start rounded-md cursor-pointer'>
                        <span className='text-sm text-sky-600 mb-1'>Vehicles</span>
                        <div className='relative w-full'>
                            <div onClick={() => setShowItems(showItems === 1 ? 0 : 1)}
                                className='w-full h-8 border border-gray-300 hover:border-sky-600 focus:outline-none flex justify-between px-2 items-center'>
                                <p className='text-gray-600 text-sm'>{selectedVehicle?.title}</p>
                                <img className='w-5' src={arrowDown} alt="" />
                            </div>
                            {
                                showItems === 1 && <DropdownValues
                                    values={vehicleItems} handleSelect={hanldeSelectWarranty} />
                            }
                        </div>
                    </div>


                    <div className='h-fit w-full p-2 hover:bg-sky-50 flex flex-col justify-center items-start rounded-md cursor-pointer'>
                        <span className='text-sm text-sky-600 mb-1'>Year</span>
                        <div className='relative w-full'>
                            <div onClick={() => setShowItems(showItems === 2 ? 0 : 2)}
                                className='w-full h-8 border border-gray-300 hover:border-sky-600 focus:outline-none flex justify-between px-2 items-center'>
                                <p className='text-gray-600 text-sm'>{selectedYear ? selectedYear : 'Year'}</p>
                                <img className='w-5' src={arrowDown} alt="" />
                            </div>
                            {
                                showItems === 2 && <YearDropdown
                                    values={
                                        selectedVehicle.title === "Car" && carItems || selectedVehicle.title === "Track" && truckItems || selectedVehicle.title === "Van" && vanItems
                                    } handleYear={setSelectedYear} />
                            }
                        </div>
                    </div>


                    <div className='h-fit w-full p-2 hover:bg-sky-50 flex flex-col justify-center items-start rounded-md cursor-pointer'>
                        <span className='text-sm text-sky-600 mb-1'>Brand</span>
                        <div className='relative w-full'>
                            <div onClick={() => setShowItems(showItems === 3 ? 0 : 3)}
                                className='w-full h-8 border border-gray-300 hover:border-sky-600 focus:outline-none flex justify-between px-2 items-center'>
                                <p className='text-gray-600 text-sm'>{selectedBrand ? selectedBrand : 'Brand'}</p>
                                <img className='w-5' src={arrowDown} alt="" />
                            </div>
                            {
                                showItems === 3 && <BrandDropdown
                                    values={
                                        selectedVehicle.title === "Car" && carItems || selectedVehicle.title === "Track" && truckItems || selectedVehicle.title === "Van" && vanItems
                                    } handleSelect={handleBrand} />
                            }
                        </div>
                    </div>



                    <div className='h-fit w-full p-2 hover:bg-sky-50 flex flex-col justify-center items-start rounded-md cursor-pointer'>
                        <span className='text-sm text-sky-600 mb-1'>Model</span>
                        <div className='relative w-full'>
                            <div onClick={() => setShowItems(showItems === 4 ? 0 : 4)}
                                className='w-full h-8 border border-gray-300 hover:border-sky-600 focus:outline-none flex justify-between px-2 items-center'>
                                <p className='text-gray-600 text-sm'>{selectedBrand ? selectedBrand : 'Model'}</p>
                                <img className='w-5' src={arrowDown} alt="" />
                            </div>
                            {
                                showItems === 4 && <ModelDropdown
                                    values={items} handleSelect={setSeletedModel} />
                            }
                        </div>
                    </div>

                    <div className='h-fit w-full p-2 hover:bg-sky-50 flex flex-col justify-center items-start rounded-md cursor-pointer'>
                        <span className='text-sm text-sky-600 mb-1'>Model Details</span>
                        <select className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none' name="modelDetails" id="modelDetails" placeholder='Model Details' >
                            <option className='' value="218i Active Tourer Sedan - 4 Cylinder">218i Active Tourer Sedan - 4 Cylinder</option>
                            <option className='' value="218i Convertible - 4 Cylinder">218i Convertible - 4 Cylinder</option>
                            <option className='' value="218i Coupe - 4 Cylinder">218i Coupe - 4 Cylinder</option>
                            <option className='' value="220D Sedan - 4 Cylinder">220D Sedan - 4 Cylinder</option>
                            <option className='' value="220i Convertible - 4 Cylinder">220i Convertible - 4 Cylinder</option>
                        </select>
                    </div>

                    {/* <div className='flex items-center gap-4'>
                        <input className='cursor-pointer ' type="checkbox" name="accept" id="accept" />
                        <span className='cursor-pointer text-xl text-blue-900 font-bold' htmlFor="accept">My car is not in the list</span>
                    </div> */}

                    <div className='h-fit w-full p-2 hover:bg-sky-50 flex flex-col justify-center items-start rounded-md cursor-pointer'>
                        <span className='text-sm text-sky-600 mb-1'>When was your car first registered?</span>
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

                            <select className='text-sm col-span-2 w-full md:w-80 h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none' name="- Please Select -" id="- Please Select -">
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



                            <select className='text-sm text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none' name="- Please Select -" id="- Please Select -">
                                <option className='' value="2023">2023</option>
                                <option className='' value="2024">2024</option>
                            </select>
                        </div>
                    </div>

                    <div className='h-fit w-full p-2 hover:bg-sky-50 flex flex-col justify-center items-start rounded-md cursor-pointer'>
                        <span className='text-sm text-sky-600 mb-1'>In which city do you want to register this car?</span>
                        <select className='text-sm w-full h-8 rounded-none px-2 border border-gray-300 hover:border-sky-600 focus:outline-none' name="carYear" id="carYear" placeholder='Car Year' >
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

                    <div className='grid md:grid-cols-2 gap-4 md:hover:bg-sky-50 md:p-2 md:rounded-md'>
                        <div className='h-fit w-full flex flex-col justify-center items-start hover:bg-sky-50 md:bg-transparent p-2 md:p-0 rounded-md cursor-pointer'>
                            <span className='text-sm text-sky-600 mb-1'>Type of Insurance</span>
                            <div className='flex items-center gap-4'>
                                {
                                    types?.map((type, i) => (
                                        <button key={i} onClick={() => setSelectedType(type)}
                                            className={`text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl ${type === selectedType ? "border border-sky-600 bg-sky-600 text-white" : "border border-gray-300 bg-white text-gray-500"}`}>
                                            <span>{type}</span>
                                        </button>
                                    ))
                                }
                            </div>
                        </div>

                        <div className='h-fit w-full flex flex-col justify-center items-start hover:bg-sky-50 md:bg-transparent p-2 md:p-0 rounded-md cursor-pointer'>
                            <span className='text-sm text-sky-600 mb-1'>Type of Use</span>
                            <div className='flex items-center gap-4'>
                                {
                                    typeOfUseItems?.map((type, i) => (
                                        <button key={i} onClick={() => setSelectedTypeofUse(type)}
                                            className={`text-sm flex justify-center items-center min-w-[60px] w-fit px-2 h-8 rounded-3xl ${type === selectedTypeofUse ? "border border-sky-600 bg-sky-600 text-white" : "border border-gray-300 bg-white text-gray-500"}`}>
                                            <span>{type}</span>
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    {/* <div className='h-fit w-full p-2 hover:bg-sky-50 flex flex-col justify-center items-start rounded-md cursor-pointer'>
                        <span className='text-sm text-sky-600 mb-1'>Is this car GCC spec AND unmodified?</span>
                        <div className='flex items-center gap-5 mt-6'>
                            <button className='w-20 h-20 rounded-full bg-blue-900 flex justify-center items-center'>
                                <span className='text-white font-bold'>NO</span>
                            </button>
                            <button className='w-20 h-20 rounded-full bg-gray-200 border border-blue-900 flex justify-center items-center'>
                                <span className='text-blue-900 font-bold'>YES</span>
                            </button>
                        </div>
                    </div>

                    <div className='h-fit w-full p-2 hover:bg-sky-50 flex flex-col justify-center items-start rounded-md cursor-pointer'>
                        <span className='text-sm text-sky-600 mb-1'>Is the current policy of this car fully comprehensive?</span>
                        <div className='flex items-center gap-5 mt-6'>
                            <button className='w-20 h-20 rounded-full bg-blue-900 flex justify-center items-center'>
                                <span className='text-white font-bold'>NO</span>
                            </button>
                            <button className='w-20 h-20 rounded-full bg-gray-200 border border-blue-900 flex justify-center items-center'>
                                <span className='text-blue-900 font-bold'>YES</span>
                            </button>
                        </div>
                    </div>


                    <div className='h-fit w-full p-2 hover:bg-sky-50 flex flex-col justify-center items-start rounded-md cursor-pointer'>
                        <span className='text-sm text-sky-600 mb-1'>Is the current policy of this car fully comprehensive?</span>
                        <div className='flex items-center gap-5 mt-6'>
                            <button className='w-20 h-20 rounded-full bg-blue-900 flex justify-center items-center'>
                                <span className='text-white font-bold'>NO</span>
                            </button>
                            <button className='w-20 h-20 rounded-full bg-gray-200 border border-blue-900 flex justify-center items-center'>
                                <span className='text-blue-900 font-bold'>YES</span>
                            </button>
                        </div>
                    </div>


                    <div className='h-fit w-full p-2 hover:bg-sky-50 flex flex-col justify-center items-start rounded-md cursor-pointer'>
                        <span className='text-sm text-sky-600 mb-1'>Does the current policy of this car include agency repair?</span>
                        <div className='flex items-center gap-5 mt-6'>
                            <button className='w-20 h-20 rounded-full bg-blue-900 flex justify-center items-center'>
                                <span className='text-white font-bold'>NO</span>
                            </button>
                            <button className='w-20 h-20 rounded-full bg-gray-200 border border-blue-900 flex justify-center items-center'>
                                <span className='text-blue-900 font-bold'>YES</span>
                            </button>
                        </div>
                    </div> */}

                    <Link to='/driver' className='w-full h-10 bg-rose-600 hover:bg-rose-700 duration-300 flex justify-center items-center border-b-4 border-rose-900 mt-6'>
                        <span className='font-bold text-white'>Continue</span>
                    </Link>

                </form>
            </div>
        </section>
    );
};

export default Vehicle;