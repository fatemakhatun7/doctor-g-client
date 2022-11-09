import React from 'react';
import useTitle from '../../../hooks/useTitle';
import DoctorDetails from '../DoctorDetails/DoctorDetails';
import MentalHealth from '../MentalHealth/MentalHealth';
import Review from '../Review/Review';
import Slider from '../Slider/Slider';
import WhenVisit from '../WhenVisit/WhenVisit';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Slider></Slider>
            <MentalHealth></MentalHealth>
            <WhenVisit></WhenVisit>
            <DoctorDetails></DoctorDetails>
            <Review></Review>
        </div>
    );
};

export default Home;