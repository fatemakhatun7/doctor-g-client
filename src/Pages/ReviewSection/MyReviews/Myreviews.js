import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import MyReviewCard from '../MyReviewCard/MyReviewCard';

const Myreviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://doctor-g-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('Do you want to delete this review?');
        if (proceed) {
            fetch(`https://doctor-g-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jwt-token')}`
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

    const handleStatusUpdate = id => {
        fetch(`https://doctor-g-server.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('jwt-token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(rvw => rvw._id !== id);
                    const approving = reviews.find(rvw => rvw._id === id);
                    approving.status = 'Approved'

                    const newReviews = [approving, ...remaining];
                    setReviews(newReviews);
                    toast.success("Review updated successfully")
                }
            })
    }

    return (
        <div className='my-10 mx-5'>
            <div className='mb-10 bg-rose-100 py-4 mx-6 border rounded-lg'>
                <p className='py-3 text-lg sm:text-3xl font-bold text-center text-cyan-900'>All Reviews</p>
            </div>
            {
                reviews.length >0 ?
                    <div>
                    {
                        reviews.map(review => <MyReviewCard
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}
                            handleStatusUpdate={handleStatusUpdate}
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