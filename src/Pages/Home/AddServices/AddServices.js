import React from 'react';

const AddServices = () => {
    return (
        <div className='mb-5 bg-rose-100 py-4 mx-6 border rounded-lg'>
            <div className='my-5 text-center'>
                <h2 className='text-4xl font-bold text-cyan-900'>
                    Do you want me to add<br />
                    more services ?
                </h2>
            </div>
            <div className='mb-5 text-center'>
                <h2 className='text-xl font-bold'>
                    Let me know your requirements. Please click the button below and add what services you want with details. I'll happily accept your opinion and notify you updates.
                </h2>
            </div>
            <div className='my-5 text-center'>
                <button className='btn btn-active btn-secondary'>
                    Add Services
                </button>
            </div>
        </div>
    );
};

export default AddServices;