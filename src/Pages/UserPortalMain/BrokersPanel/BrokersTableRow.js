import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs"
import { Link } from 'react-router-dom';

const BrokersTableRow = ({ item }) => {
    return (
        <tr className="bg-white w-full shadow border-b-8 border-slate-100 rounded-md" >
            <th scope="row" class="mt-2 px-6 py-2 text-xs font-medium text-gray-900 whitespace-nowrap">
                {item?.client}
            </th>
            <td class="mt-2 px-6 py-2 text-xs">
                {item?.bussiness_name}
            </td>
            <td class="mt-2 px-6 py-2 text-xs font-bold">
                {item?.coverages}
            </td>
            <td class="mt-2 px-6 py-2 text-xs">
                {item?.expiration}
            </td>
            <td class="mt-2 px-6 py-2 text-xs text-rose-600 font-bold">
                ${item?.premium}
            </td>
            <td class={`mt-2 px-6 py-2 text-xs ${item?.status === "active" ? "text-green-600" : "text-gray-900"}`}>
                {item?.status}
            </td>
            <td class="mt-2 px-6 py-2 text-xs cursor-pointer border-l flex items-center justify-between ">
                <Link to="/portal/my-agents/agent-details" className='w-16 px-2 h-6 flex justify-center items-center bg-gray-100 hover:bg-primary hover:text-white rounded-3xl text-xs'>View</Link>

                <BsThreeDotsVertical />
            </td>
        </tr>
    );
};

export default BrokersTableRow;