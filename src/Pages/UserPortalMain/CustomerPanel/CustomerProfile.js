import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiStar } from "react-icons/hi";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import bRight from "../../../accets/icons/blue-right.png";
import TotalQuotesChart from "./TotalQuotesChart";

const CustomerProfile = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-4 w-full">
      <div className="lg:col-span-1 w-full border rounded-3xl bg-white p-4">
        <BsThreeDotsVertical className="mx-auto mr-0" />

        <div>
          <img
            className="w-16 h-16 object-cover mx-auto"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
          <div className="flex justify-center items-center gap-2">
            <h1 className="text-center font-bold text-black text-xl">
              Robin Jhonson
            </h1>
            <img className="w-4" src={bRight} alt="" />
          </div>
          <div className="flex justify-center items-center gap-1 text-yellow-500 text-xl">
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
          </div>
        </div>

        <hr className="my-4" />

        <div className="grid grid-cols-1 gap-1 w-fit">
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="flex justify-between items-center w-full">
              <span className="text-black font-bold">Age</span>
              <span className="text-gray-500">:</span>
            </div>
            <span className="text-gray-500">35 Years</span>
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
            <div className="flex justify-between items-center w-full">
              <span className="text-black font-bold">City</span>
              <span className="text-gray-500">:</span>
            </div>
            <span className="text-gray-500">Thakurgaon</span>
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
            <div className="flex justify-between items-center w-full">
              <span className="text-black font-bold">State</span>
              <span className="text-gray-500">:</span>
            </div>
            <span className="text-gray-500">Rangpur</span>
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
            <div className="flex justify-between items-center w-full">
              <span className="text-black font-bold">Country</span>
              <span className="text-gray-500">:</span>
            </div>
            <span className="text-gray-500">Bangladesh</span>
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
            <div className="flex justify-between items-center w-full">
              <span className="text-black font-bold">Post Code</span>
              <span className="text-gray-500">:</span>
            </div>
            <span className="text-gray-500">5500</span>
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
            <div className="flex justify-between items-center w-full">
              <span className="text-black font-bold">Phone</span>
              <span className="text-gray-500">:</span>
            </div>
            <span className="text-gray-500">9805245115</span>
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
            <div className="flex justify-between items-center w-full">
              <span className="text-black font-bold">Email</span>
              <span className="text-gray-500">:</span>
            </div>
            <span className="text-gray-500">useremail@gmail.com</span>
          </div>
        </div>

        <hr className="my-4" />

        <div className="flex justify-center items-center gap-4">
          <button className="w-10 h-10 bg-gray-100 hover:bg-primary text-gray-600 hover:text-white rounded-full flex justify-center items-center text-xl">
            <BsFacebook />
          </button>
          <button className="w-10 h-10 bg-gray-100 hover:bg-primary text-gray-600 hover:text-white rounded-full flex justify-center items-center text-xl">
            <AiFillTwitterCircle />
          </button>
          <button className="w-10 h-10 bg-gray-100 hover:bg-primary text-gray-600 hover:text-white rounded-full flex justify-center items-center text-xl">
            <BsLinkedin />
          </button>
        </div>
      </div>

      <div className="lg:col-span-2 flex-grow border rounded-3xl bg-white p-4 w-full">
        <h1 className="font-bold text-xl text-left text-sky-900">
          Agent Details
        </h1>
        <hr className="my-4" />

        <span className="text-gray-500 font-normal">
          Our dedicated agent is here to assist you and provide you with the
          necessary support throughout the process. Don't hesitate to contact
          them for any assistance you may need.
        </span>

        <div className="w-fit mt-4">
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2 w-full">
                <img className="w-4" src={bRight} alt="" />
                <span className="text-black font-bold">Agency</span>
              </div>
              <span className="text-gray-500">:</span>
            </div>
            <span className="text-gray-500">All Amarical React Estate</span>
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2 w-full">
                <img className="w-4" src={bRight} alt="" />
                <span className="text-black font-bold">Agency License</span>
              </div>
              <span className="text-gray-500">:</span>
            </div>
            <span className="text-gray-500">8484656545455fg54</span>
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2 w-full">
                <img className="w-4" src={bRight} alt="" />
                <span className="text-black font-bold">Tax Number</span>
              </div>
              <span className="text-gray-500">:</span>
            </div>
            <span className="text-gray-500">8484656545455fg54</span>
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2 w-full">
                <img className="w-4" src={bRight} alt="" />
                <span className="text-black font-bold">Service Area</span>
              </div>
              <span className="text-gray-500">:</span>
            </div>
            <span className="text-gray-500">Dhaka, Bangladesh</span>
          </div>
        </div>

        <hr className="my-4" />

        <div>
          <span className="font-bold text-xl text-left text-sky-900 mb-2">
            Property Status
          </span>

          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center justify-center w-full h-fit border rounded-md shadow p-2">
              <span className="text-black text-center font-bold">
                Total Quotes
              </span>
              <span className="text-center font-bold text-black">1200</span>
              <div className="w-16 h-16 mx-auto">
                <TotalQuotesChart />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full h-fit border rounded-md shadow p-2">
              <span className="text-black text-center font-bold">
                Properties Sold
              </span>
              <span className="text-center font-bold text-black">900</span>
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto"></div>
            </div>

            <div className="flex flex-col items-center justify-center w-full h-fit border rounded-md shadow p-2">
              <span className="text-black text-center font-bold">
                Properties Rent
              </span>
              <span className="text-center font-bold text-black">300</span>
              <div className="w-16 h-16 bg-sky-600 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
