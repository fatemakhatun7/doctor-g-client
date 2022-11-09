import React from 'react';
import { useLoaderData } from 'react-router-dom';
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
    useTitle("Home")

    return (
        <div>
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