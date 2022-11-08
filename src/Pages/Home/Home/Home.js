import React from 'react';
import useTitle from '../../../hooks/useTitle';
import MentalHealth from '../MentalHealth/MentalHealth';
import Slider from '../Slider/Slider';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Slider></Slider>
            <MentalHealth></MentalHealth>
        </div>
    );
};

export default Home;