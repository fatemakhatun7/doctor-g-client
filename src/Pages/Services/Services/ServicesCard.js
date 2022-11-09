import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
    const {title, image, description, total_patient, rating, badge} = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-5">
                <figure><img className='h-64' src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description.slice(0,50)}...</p>
                    <p>
                        <span className='font-semibold'>Total Patient: </span>
                        <span className='text-xl font-medium text-green-700'>{total_patient}</span>
                    </p>
                    <p>
                        <span className='font-semibold'>Rating: </span>
                        <span className='text-xl font-medium text-green-700'>{rating}</span>
                    </p>
                    <p>
                        <span className='font-semibold'>Badge: </span>
                        <span className='text-xl font-medium text-green-700'>{badge}</span>
                    </p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${service._id}`} className="btn btn-primary">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;