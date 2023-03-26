import React from 'react';
import SinglePolicyCard from '../../components/MyPolicyComponents/SinglePolicyCard';

const MyPolicy = () => {
    return (
        <section>
            <div className='grid lg:grid-cols-2 gap-4'>
                <SinglePolicyCard />
                <SinglePolicyCard />
            </div>
        </section>
    );
};

export default MyPolicy;