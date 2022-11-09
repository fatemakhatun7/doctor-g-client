import React from 'react';
import { Link } from 'react-router-dom';

const AddServices = () => {
    return (
        <div className='mb-5 bg-rose-100 py-4 mx-6 border rounded-lg'>
            <div className='my-5 text-center'>
                <h2 className='text-lg sm:text-3xl font-bold text-cyan-900'>
                    Do you want me to add<br />
                    more services ?
                </h2>
            </div>
            <div className='mb-5 text-center'>
                <h2 className='text-sm sm:text-lg font-semibold sm:font-semibold px-10 sm:px-20 md:px-32 lg:px-56'>
                    Let me know your requirements. Please click the button below and add what services you want with details. I'll happily accept your opinion and notify you updates.
                </h2>
            </div>
            <div className='my-5 text-center'>
                <Link to='/addServices' className='btn btn-active btn-secondary'>
                    Add Services
                </Link>
            </div>
        </div>
    );
};

export default AddServices;