import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const {title, image, p, description, total_patient, money, rating, badge} = serviceDetails;
    useTitle("Service_Details")

    return (
        <div className='my-20 bg-rose-100 py-4 mx-6 border rounded-lg'>
            <div className='flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl mb-5">
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img className='h-64' src={image} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{p}</p>
                    <p>{description}</p>
                    <p>
                        <span className='font-semibold'>Total Patient: </span>
                        <span className='text-xl font-medium text-green-700'>{total_patient}</span>
                    </p>
                    <div className='flex justify-between font-medium'>
                        <p>
                            <span className='font-semibold'>Rating: </span>
                            <span className='text-xl font-medium text-green-700'>{rating}</span>
                        </p>
                        <p>
                            <span className='font-semibold'>Badge: </span>
                            <span className='text-xl font-medium text-green-700'>{badge}</span>
                        </p>
                    </div>
                    <div className='flex justify-between mt-5'>
                        <div className="card-actions">
                            <button className="btn btn-primary">{money}</button>
                        </div>
                        <Link to={`/services/checkout/${serviceDetails._id}`} className="card-actions">
                            <button className="btn btn-primary">Book an Appointment 
                            <FaArrowRight className='ml-3'></FaArrowRight></button>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
            <div className='mt-10 flex justify-center'>
                <h2 className='text-center text-cyan-900 text-2xl font-bold'>Do you want to review 
                <span className='mx-2 text-xl text-purple-800 font-bold'>{title}</span> 
                    service?</h2>
            </div>
            <div className='flex justify-center m-5'>
                <Link
                 className=" btn btn-active btn-secondary">review now</Link>
            </div>
        </div>
    );
};

export default ServiceDetails;