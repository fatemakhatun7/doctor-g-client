import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ThreeServices = ({option}) => {
    const {image, title, description} = option;
    return (
        <div>
            <div className="card w-64 sm:w-96 bg-base-100 shadow-xl mb-5">
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img className='h-40 sm:h-64' src={image} alt="" />
                    </PhotoView>
                </PhotoProvider>
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