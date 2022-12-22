import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import AddServices from '../AddServices/AddServices';
import DoctorDetails from '../DoctorDetails/DoctorDetails';
import MentalHealth from '../MentalHealth/MentalHealth';
import Review from '../Review/Review';
import Slider from '../Slider/Slider';
import ThreeServices from '../ThreeServices/ThreeServices';
import WhenVisit from '../WhenVisit/WhenVisit';

const Home = () => {
    const options = useLoaderData();
    const {user} = useContext(AuthContext)
    useTitle("Home")

    return (
        <div>
            <div className='mt-10 mx-5'>
                {
                    user?.uid ?
                        <>
                            <div className="flex justify-center text-xl font-bold bg-red-100 p-10 border rounded-lg">
                                <p>Hello, <span className='text-purple-900 text-3xl'>{user.displayName}.</span> <br/> Welcome to Doctor G.<br/> Your Mental Solution.</p>
                            </div>
                        </>
                        :
                        <>
                            <div className="flex justify-center text-xl font-bold bg-red-100 p-10 border rounded-lg">
                                <p>Are You <span className='text-purple-900 text-3xl'>New </span> to this Website? <br/> Please Sign Up to explore more.<br/> Already have an account? please Sign in.</p>
                            </div>
                        </>
                }
            </div>
            <Slider></Slider>
            <MentalHealth></MentalHealth>
            <WhenVisit></WhenVisit>
            <div className='m-5 bg-rose-100 py-10 mx-6 border rounded-lg flex flex-wrap justify-around'>
                {
                    options.map(option => <ThreeServices 
                        key={option._id} 
                        option={option}
                        ></ThreeServices>)
                }
            </div>
            <DoctorDetails></DoctorDetails>
            <AddServices></AddServices>
            <Review></Review>
        </div>
    );
};

export default Home;