import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
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