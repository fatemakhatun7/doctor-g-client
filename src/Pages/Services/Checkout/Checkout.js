import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Checkout = () => {
    const checkout = useLoaderData();
    const {title, money} = checkout;

    return (
        <div className='my-10 bg-rose-100 py-4 mx-6 border rounded-lg'>
            <div>
                <h2 className='text-center text-cyan-900 text-2xl font-bold'>Are you sure to book <br />
                an Appointment?</h2>
                <h2 className='text-center text-lg font-semibold my-5'>Please complete your payment 
                    <span className='mx-2 text-xl text-purple-800 font-bold'>{money}</span>to get 
                    <span className='mx-2 text-xl text-purple-800 font-bold'>{title}</span> 
                    service.
                </h2>
                <div className='flex justify-center'>
                    <Link to='/' 
                    onClick={()=> {toast.success("You have successfully completed your payment. I'll contact with you soon. Thank You.")}} 
                    className=" btn btn-active btn-secondary">Pay Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Checkout;