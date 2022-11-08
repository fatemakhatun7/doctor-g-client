import React from 'react';
import useTitle from '../../../hooks/useTitle';
import DoctorDetails from '../DoctorDetails/DoctorDetails';
import MentalHealth from '../MentalHealth/MentalHealth';
import Slider from '../Slider/Slider';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Slider></Slider>
            <MentalHealth></MentalHealth>
            <DoctorDetails></DoctorDetails>
        </div>
    );
};

export default Home;