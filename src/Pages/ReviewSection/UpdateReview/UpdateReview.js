import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Form, Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const UpdateReview = ({handleUpdate}) => {
    useTitle("update review")
    const storedReview = useLoaderData();
    const [review, setReview] = useState(storedReview);
    
    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...review}
        newUser[field] = value;
        setReview(newUser);
    }

    return (
        <div className='my-10 bg-rose-100 py-4 mx-6 border rounded-lg'>
            <div>
                <p className='text-center text-lg font-semibold my-5'>Update Review</p>
            </div>
            <div className='hero my-10 bg-rose-100 py-4 mx-6 border rounded-lg'>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={handleUpdate} className='card-body'>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input onChange={handleInputChange} type="number" step="0.1" min='0' max='5' name="rating" placeholder="rate out of 5" className="input input-bordered input-info max-w-xs mb-2" required/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">
                                    Description
                                </span>
                            </label>
                            <input onChange={handleInputChange} type="text" name="description" placeholder="Write your experience here" className="input input-bordered input-info max-w-xs mb-2" required/>
                        </div>
                    <div className='form-control'>
                        <Link to='/' onClick={()=>{toast.success("Updated successfully")}} className="btn btn-active btn-secondary">
                            Submit
                        </Link>
                    </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default UpdateReview;