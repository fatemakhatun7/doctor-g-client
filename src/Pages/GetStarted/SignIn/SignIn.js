import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const SignIn = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle("Sign_in")

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, {replace: true});
                toast.success('You have successfully logged in.')
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleGoogleSignin = () => {
        signInWithGoogle().then(result => {
          console.log(result.user)
          navigate(from, { replace: true })
        })
      }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Sign In now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleSubmit} className="card-body">
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
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forget password?</Link>
                                </label>
                            </div>
                            <div className='text-red-600 font-bold'>{error}</div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info">Submit</button>
                            </div>
                        </Form>
                        <div className='border-b mb-3'>
                            <p className='text-center'>Or,</p>
                        </div>
                        
                        <button onClick={handleGoogleSignin} className="btn btn-outline">Sign in with Google</button>
                        <div className='m-3'>
                            <p>Are you new in this website? please <Link to='/signup' className='link link-hover text-red-900 font-bold text-xl'>SignUp</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;