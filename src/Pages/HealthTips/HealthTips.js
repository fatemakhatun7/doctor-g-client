import React from 'react';
import useTitle from '../../hooks/useTitle';

const HealthTips = () => {
    useTitle("Health-tips")
    
    return (
        <div className='my-10'>
            <div className='mb-10'>
                <p className='text-3xl font-bold text-center text-cyan-900'>Mental Health Tips</p>
            </div>
            <div className='m-5 bg-rose-100 py-4 mx-6 border rounded-lg'>
                <ul className='list-disc px-10 sm:px-44 md:px-64 lg:px-96 text-sm sm:text-lg font-bold'>
                    <li>Get closer to nature</li>
                    <li>Making plans for things we enjoy</li>
                    <li>Learn to understand and manage your feelings</li>
                    <li>Talk to someone you trust for support</li>
                    <li>Avoid drugs or alcohol</li>
                    <li>Practice forgiveness</li>
                    <li>Better money management and free from dept problems</li>
                    <li>Sleep 8 hours</li>
                    <li>Keep moving</li>
                    <li>Eat healthy food</li>
                    <li>Be curious and open minded to new experiences</li>
                </ul>
            </div>
        </div>
    );
};

export default HealthTips;