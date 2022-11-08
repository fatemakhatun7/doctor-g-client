import React from 'react';
import { Link } from 'react-router-dom';
import './SliderItems.css';

const SliderItems = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={image} alt="" className="w-full rounded-xl" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 right-16 top-2/4">
                    <h1 className='text-md sm:text-xl md:text-3xl lg:text-3xl font-bold text-white'>
                        Most Trusted , <br />
                        Reliable &<br />
                        Highly Effective <br />
                        Mental Health Support &<br />
                        Counselling
                    </h1>
                </div>
                <div className="absolute hidden md:flex lg:flex justify-end transform -translate-y-1/2 w-4/5 left-24 top-2/4 md:top-3/4">
                    <Link to='/services' className="btn btn-sm btn-outline btn-warning">See Our Services</Link>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default SliderItems;