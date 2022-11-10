import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import {  Form, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const AddReview = () => {
    useTitle("Add review")
    const {user} = useContext(AuthContext);
    const addReview = useLoaderData();
    const {title, _id} = addReview;
    const [review, setReview] = useState({});
    const navigate = useNavigate();

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(review);

        fetch('https://doctor-g-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Successfully added your review.');
                e.target.reset();
                navigate('/')
            }
        })
    }

    const handleInputBlur = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newReview = {...review}
        newReview[field] = value;
        setReview(newReview);
    }

    return (
        <div className='my-10 bg-rose-100 py-4 mx-6 border rounded-lg'>
            <div>
                <p className='text-center text-lg font-semibold my-5'>Add a Review for <span className='mx-2 text-xl text-purple-800 font-bold'>{title}</span> </p>
            </div>
            <div className='hero my-10 bg-rose-100 py-4 mx-6 border rounded-lg'>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={handleSubmit} className='card-body'>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Your name</span>
                            </label>
                            <input onBlur={handleInputBlur} type="text" name="name" placeholder="Your name" className="input input-bordered input-info max-w-xs mb-2" required/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                 <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleInputBlur} type="email" name="email" placeholder="Your email" value={user.email} className="input input-bordered input-info max-w-xs mb-2" readOnly/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                 <span className="label-text">Service id</span>
                            </label>
                            <input onBlur={handleInputBlur} type="text" name="service_id" placeholder="Service id" defaultValue={_id} className="input input-bordered input-info max-w-xs mb-2" readOnly/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                 <span className="label-text">Service name</span>
                            </label>
                            <input onBlur={handleInputBlur} type="text" name="title" placeholder="Service title" defaultValue={title} className="input input-bordered input-info max-w-xs mb-2" readOnly/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input onBlur={handleInputBlur} type="number" step="0.1" min='0' max='5' name="rating" placeholder="rate out of 5" className="input input-bordered input-info max-w-xs mb-2" required/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">
                                    Description
                                </span>
                            </label>
                            <input onBlur={handleInputBlur} type="text" name="description" placeholder="Write your experience here" className="input input-bordered input-info max-w-xs mb-2" required/>
                        </div>
                    <div className='form-control'>
                        <button className="btn btn-active btn-secondary">
                            Submit
                        </button>
                    </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;