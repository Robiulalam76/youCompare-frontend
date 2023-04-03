import React from 'react';
import SinglePolicyCard from '../../components/MyPolicyComponents/SinglePolicyCard';
import img from "../../accets/images/policy.png"

const MyPolicy = () => {
    return (
        <section className='w-full max-w-screen-sm mx-auto'>

            <a href={img} download={img} class="bg-sky-500 hover:bg-sky-600 text-white font-bold w-44 h-10 rounded flex items-center justify-center gap-4  mx-auto mr-0 text-right">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                <span>Download</span>
            </a>

            <img className='max-w-screen-sm mt-6 mx-auto' src={img} alt="" />
            {/* <div className='grid lg:grid-cols-2 gap-4'>
                <SinglePolicyCard />
                <SinglePolicyCard />
            </div> */}
        </section>
    );
};

export default MyPolicy;