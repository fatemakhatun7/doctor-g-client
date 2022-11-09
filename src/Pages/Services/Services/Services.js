import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import ServicesCard from './ServicesCard';

const Services = () => {
    const services = useLoaderData();
    useTitle("Services")
    
    return (
        <div className='my-10'>
            <div className='mb-10'>
                <p className='text-3xl font-bold text-center text-cyan-900'>All Services</p>
            </div>
            <div className='m-5 bg-rose-100 py-4 mx-6 border rounded-lg flex flex-wrap justify-around'>
                {
                    services.map(service => <ServicesCard 
                        key={service._id} 
                        service={service}
                        ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;