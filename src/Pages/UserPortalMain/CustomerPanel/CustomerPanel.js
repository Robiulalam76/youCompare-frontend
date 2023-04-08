import React from 'react';
import CustomerProfile from './CustomerProfile';
import Policies from '../PoliciesPage/Policies';

const CustomerPanel = () => {
    return (
        <section>
            <div className='p-2 md:px-4 lg:px-6'>
                <CustomerProfile />



                <div className='mt-6'>
                    <Policies />
                </div>
            </div>
        </section>
    );
};

export default CustomerPanel;