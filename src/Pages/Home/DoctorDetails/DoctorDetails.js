import React from 'react';

const DoctorDetails = () => {
    return (
        <div className='mb-5 bg-rose-100 py-4 mx-6 border rounded-full'>
            <div className='my-2 sm:my-10 text-lg sm:text-3xl font-bold text-center text-cyan-900'>
                <h1>All treatment provide by</h1>
            </div>
            <div className='flex justify-center mb-5'>
                <div className='flex justify-center mr-5'>
                    <img className='w-36 rounded-full' src="https://i.ibb.co/Kq5tb3s/doctor.jpg" alt="" />
                </div>
                <div className='my-auto text-sm sm:text-lg text-semibold sm:font-bold'>
                    <p>Dr. Jalaluddin</p>
                    <p>CEO of <span className='text-rose-900'>Doctor</span><span className='text-green-900 ml-1'>G</span></p>
                    <p>Works at Dhaka Medical College Hospital</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;