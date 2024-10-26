import React from 'react';
import NavBar from "../NavBar";
import Awards from "./Awards";
import Stats from "./Stats.js";
import Pricing from "./Pricing.js";
import Education from "./Education.js";
import OpenAccount from "../OpenAccount.js";
import Footer from "../Footer.js";
import Hero from "./Hero";

function HomePage() {
    return (
        <>
            <NavBar/>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            <Footer/>


        </>
    );
}

export default HomePage;
