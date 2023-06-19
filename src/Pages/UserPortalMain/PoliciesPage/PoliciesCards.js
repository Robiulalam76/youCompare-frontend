import React, { useState } from "react";
import { MdPayment, MdPolicy } from "react-icons/md";
import { BiMessageSquareAdd } from "react-icons/bi";
import { GoNote } from "react-icons/go";
import { FaStackExchange } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddPolicyModal from "./AddPolicyModal";
const items = [
  {
    _id: "1",
    title: "Policy Summary",
    description: "View Your Policy Details",
    url: "portal/policies/details",
    img: <MdPolicy />,
  },
  {
    _id: "2",
    title: "Documents",
    description: "View or Download Your Documents",
    url: "portal/policies/documents",
    img: <MdPayment />,
  },
];

const PoliciesCards = () => {
  const [openAddPolicyModal, setOpenAddPolicyModal] = useState(false);
  return (
    <div className="w-full mx-auto cursor-pointer grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8">
      {items.map((item) => (
        <Link
          to={`/${item?.url}`}
          className="flex flex-col justify-center items-center gap-2 w-full h-44 border shadow-md shadow-blue-200 hover:shadow-sky-400 p-3 bg-slate-50 rounded-2xl"
        >
          <span className="text-6xl text-gray-500">{item?.img}</span>
          <h1 className="text-center text-primary font-bold text-xl">
            {item.title}
          </h1>
          <p className="text-gray-500 font-normal text-center text-sm">
            {item.description}
          </p>
        </Link>
      ))}
      <Link
        to="/portal/my-quotes"
        className="flex flex-col justify-center items-center gap-2 w-full h-44 border shadow-md shadow-blue-200 hover:shadow-sky-400 p-3 bg-slate-50 rounded-2xl"
      >
        <span className="text-6xl text-gray-500">
          <FaStackExchange />
        </span>
        <h1 className="text-center text-primary font-bold text-xl">
          Make a Change
        </h1>
        <p className="text-gray-500 font-normal text-center text-sm">
          To Drivers, Addresses, and Vehicles
        </p>
      </Link>

      <button
        onClick={() => setOpenAddPolicyModal(true)}
        className="flex flex-col justify-center items-center gap-2 w-full h-44 border shadow-md shadow-blue-200 hover:shadow-sky-400 p-3 bg-slate-50 rounded-2xl"
      >
        <span className="text-6xl text-gray-500">
          <BiMessageSquareAdd />
        </span>
        <h1 className="text-center text-primary font-bold text-xl">
          Add To Policy
        </h1>
        <p className="text-gray-500 font-normal text-center text-sm">
          Add a Car, Home or Van to Your Policy
        </p>
      </button>

      <button className="flex flex-col justify-center items-center gap-2 w-full h-44 border shadow-md shadow-blue-200 hover:shadow-sky-400 p-3 bg-slate-50 rounded-2xl">
        <span className="text-6xl text-gray-500">
          <MdPayment />
        </span>
        <h1 className="text-center text-primary font-bold text-xl">Payments</h1>
        <p className="text-gray-500 font-normal text-center text-sm">
          View or Edits Payment Details
        </p>
      </button>
      <Link
        to="/portal/my-quotes"
        className="flex flex-col justify-center items-center gap-2 w-full h-44 border shadow-md shadow-blue-200 hover:shadow-sky-400 p-3 bg-slate-50 rounded-2xl"
      >
        <span className="text-6xl text-gray-500">
          <GoNote />
        </span>
        <h1 className="text-center text-primary font-bold text-xl">Claim</h1>
        <p className="text-gray-500 font-normal text-center text-sm">
          Make a Claim or see Existing Claim
        </p>
      </Link>
      <Link
        to="/portal/my-quotes"
        className="flex flex-col justify-center items-center gap-2 w-full h-44 border shadow-md shadow-blue-200 hover:shadow-sky-400 p-3 bg-slate-50 rounded-2xl"
      >
        <span className="text-6xl text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-12 h-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
            />
          </svg>
        </span>
        <h1 className="text-center text-primary font-bold text-xl">
          Renew Policy
        </h1>
        <p className="text-gray-500 font-normal text-center text-sm">
          Keeping You Covered and Protected
        </p>
      </Link>

      {openAddPolicyModal && (
        <AddPolicyModal
          openAddPolicyModal={openAddPolicyModal}
          setOpenAddPolicyModal={setOpenAddPolicyModal}
        />
      )}
    </div>
  );
};

export default PoliciesCards;
