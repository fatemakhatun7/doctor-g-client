import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const Report = () => {
    useTitle("Report")

    return (
        <div className='my-16'>
            <p className='text-center text-lg font-semibold mb-5'>Tell us about your problems below:</p>
            <div className='text-center'>
                <textarea className="textarea mb-2 border border-indigo-500" placeholder="what's the issue?"></textarea>
                <br />
                <Link to='/' onClick={()=>{toast.success("just got your report. you'll get a response soon. Thank you.")}} className="btn btn-active btn-secondary">Submit</Link>
            </div>
        </div>
    );
};

export default Report;