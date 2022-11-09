import React from 'react';
import { Link } from 'react-router-dom';

const ThreeServices = ({option}) => {
    const {image, title, description} = option;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-5">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to='/services' className="btn btn-primary">See all</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeServices;