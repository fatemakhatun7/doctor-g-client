import React from 'react';

const MentalHealth = () => {
    return (
        <div className='mb-5 bg-rose-100 py-4 mx-6 border rounded-lg'>
            <div className='flex justify-center'>
                <img className='w-64 rounded-full' src="https://i.ibb.co/Sc2QGwL/mental-Health.jpg" alt="" />
            </div>
            <div className='my-5 text-center'>
                <h2 className='text-4xl font-bold text-black'>Mental Health</h2>
            </div>
            <div className='mx-5 sm:mx-15 md:mx-20 lg:mx-30'>
                <p className='text-lg font-semibold'>Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.Over the course of your life, if you experience mental health problems, your thinking, mood, and behavior could be affected.</p>
            </div>
        </div>
    );
};

export default MentalHealth;