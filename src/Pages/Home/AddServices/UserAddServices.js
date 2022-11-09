import React from 'react';
import useTitle from '../../../hooks/useTitle';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const UserAddServices = () => {
    useTitle("Add-services")
    return (
        <div className='my-16'>
            <p className='text-center text-lg font-semibold mb-5'>Add your desired service details below:</p>
            <div className='text-center'>
                <input type="text" placeholder="add title" className="input input-bordered input-info w-30 max-w-xs mb-2" />
                <br />
                <textarea className="textarea mb-2 border border-indigo-500" placeholder="add description"></textarea>
                <br />
                <Link to='/' onClick={()=>{toast.success("Successfully received your request. you'll get a response soon. Thank you.")}} className="btn btn-active btn-secondary">Submit</Link>
            </div>
        </div>
    );
};

export default UserAddServices;