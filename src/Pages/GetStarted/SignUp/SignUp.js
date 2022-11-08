import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const SignUp = () => {
    const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                navigate(from, { replace: true })
                toast.success('You have successfully created your account.')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleGoogleSignin = () => {
        signInWithGoogle().then(result => {
          console.log(result.user);
          navigate(from, { replace: true });
          toast.success('You have successfully created your account.');
        })
      }

    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Sign Up now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered"  required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                            <div className="form-control mt-6">
                                <button className="btn btn-info">Submit</button>
                            </div>
                                
                            </div>
                            <div className='text-red-600 font-bold'>{error}</div>
                            <div className='m-3'>
                                <p>Already have an account? Please <Link to='/signin' className='text-red-900 font-bold text-xl link link-hover'>SignIn</Link></p>
                            </div>
                        </Form>
                        <div className='border-b mb-3'>
                            <p className='text-center'>Or,</p>
                        </div>
                        <button onClick={handleGoogleSignin} className="btn btn-outline">Sign in with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;