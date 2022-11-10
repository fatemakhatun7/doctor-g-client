import React from 'react';

const MyReviewCard = ({ review, handleDelete, handleStatusUpdate }) => {
    const {_id, name, email, title, rating, description} = review;
    
    return (
        <div>
            <div className='mb-10 bg-rose-100 py-4 mx-6 border rounded-lg'>
                <div className='py-3 px-2 text-lg font-bold text-cyan-900'>
                    <p>User name: <span className='text-md font-semibold text-dark-900'>{name}</span></p>
                    <p>Email: <span className='text-md font-semibold text-dark-900'>{email}</span></p>
                </div>
                <div className='py-3 px-2 text-lg font-bold text-cyan-900'>
                    <p>Service: <span className='text-md font-semibold text-dark-900'>{title}</span></p>
                </div>
                <div className='py-3 px-2 text-lg font-bold text-cyan-900'>
                    <p>Rating: <span className='text-md font-semibold text-dark-900'>{rating}</span></p>
                    <p>Review: <span className='text-md font-semibold text-dark-900'>{description}</span></p>
                </div>
                <div>
                    <button onClick={() => handleStatusUpdate(_id)} className="btn btn-primary">Edit</button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;