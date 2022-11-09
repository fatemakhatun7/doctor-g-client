import React from 'react';

const WhenVisit = () => {
    return (
        <div className='mb-5 bg-rose-100 py-4 mx-6 border rounded-lg'>
            <h2 className='my-10 text-lg sm:text-3xl font-bold text-center text-cyan-900'>When should you visit <br />
            <span className='text-rose-900'>Doctor</span><span className='text-green-900 ml-1'>G </span> ?
            </h2>
            <ol className='text-sm sm:text-md font-semibold sm:font-bold'>
                <li className='text-center'>Showing symptoms of a significant mental health condition.</li>
                <li className='text-center'>Having difficulty coping with problems.</li>
                <li className='text-center'>Addictions or Substance Abuse.</li>
                <li className='text-center'>Problems Adjusting to Life Changes.</li>
                <li className='text-center'>Unexplained Mood Swings.</li>
                <li className='text-center'>Phobias</li>
                <li className='text-center'>Inability to Control Emotions.</li>
                <li className='text-center'>Changes in Sleeping Patterns</li>
                <li className='text-center'>Changes in Performance at School or Work.</li>
                <li className='text-center'>Withdrawal from Social Situations.</li>
                <li className='text-center'>Unexplained Physical Illnesses.</li>
                <li className='text-center'>Excessive Anxiety, Worry or Sadness.</li>
                <li className='text-center'>Frequent Nightmares or Temper Tantrums.</li>
                <li className='text-center'>Suicidal Thoughts</li>
            </ol>
        </div>
    );
};

export default WhenVisit;