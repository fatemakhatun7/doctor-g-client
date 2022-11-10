import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import MyReviewCard from '../MyReviewCard/MyReviewCard';

const Myreviews = () => {
    useTitle("My reviews")
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://doctor-g-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Do you want to delete this review?');
        if (proceed) {
            fetch(`https://doctor-g-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully');
                        const remaining = reviews.filter(rvw => rvw._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    const handleUpdate = id => {
        fetch(`https://doctor-g-server.vercel.app/reviews/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ reviews })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(rvw => rvw._id !== id);
                    const newReviews = [...remaining];
                    setReviews(newReviews);
                    toast.success("updated successfully")
                }
            })
    }

    return (
        <div className='my-10 mx-5'>
            <div className='mb-10 bg-rose-100 py-4 mx-6 border rounded-lg'>
                <p className='py-3 text-lg sm:text-3xl font-bold text-center text-cyan-900'>My Reviews</p>
            </div>
            {
                reviews.length >0 ?
                    <div>
                    {
                        reviews.map(review => <MyReviewCard
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                        ></MyReviewCard>)
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

export default Myreviews;