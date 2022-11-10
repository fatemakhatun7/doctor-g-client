import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const Reviews = () => {
    useTitle("reviews")

    const reviews = useLoaderData();

    return (
        <div className='my-10 mx-5'>
            <div className='mb-10 bg-rose-100 py-4 mx-6 border rounded-lg'>
                <p className='py-3 text-lg sm:text-3xl font-bold text-center text-cyan-900'>All Reviews</p>
            </div>
            {
                reviews.length >0 ?
                    <div>
                        {
                            reviews.map(singleReview=> 
                                <div key={singleReview._id}>
                                    <div className='mb-10 bg-rose-100 py-4 mx-6 border rounded-lg'>
                                        <div className='py-3 px-2 text-lg font-bold text-cyan-900'>
                                            <p>User name: <span className='text-md font-semibold text-dark-900'>{singleReview.name}</span></p>
                                            <p>Email: <span className='text-md font-semibold text-dark-900'>{singleReview.email}</span></p>
                                        </div>
                                        <div className='py-3 px-2 text-lg font-bold text-cyan-900'>
                                            <p>Service: <span className='text-md font-semibold text-dark-900'>{singleReview.title}</span></p>
                                        </div>
                                        <div className='py-3 px-2 text-lg font-bold text-cyan-900'>
                                            <p>Rating: <span className='text-md font-semibold text-dark-900'>{singleReview.rating}</span></p>
                                            <p>Review: <span className='text-md font-semibold text-dark-900'>{singleReview.description}</span></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                :
                    <div>
                        <p className='py-3 text-lg sm:text-3xl font-bold text-center text-cyan-900 mb-10'>No reviews found</p>
                        <div className='text-center'>
                            <p className='py-3 text-md sm:text-xl font-semibold text-center text-black-900 mb-2'>Select what service you want to review and</p>
                            <Link to='/services' className='btn btn-active btn-secondary'>add review</Link>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Reviews;