import React from 'react';
import PoliciesCards from './PoliciesCards';

const Policies = () => {
    return (
        <div>
            <h1 className='font-bold text-xl text-left text-sky-900 mb-2'>Manage and View Your Policy</h1>
            <PoliciesCards />
        </div>
    );
};

export default Policies;