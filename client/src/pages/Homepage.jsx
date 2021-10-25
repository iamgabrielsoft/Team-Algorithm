import React from 'react';
import Header  from "../components/Header";
import HomeSection from '../components/homePage/HomeSection';

export default function HomePage() {
    return (
        <>
            <Header visible={true}/>
            <HomeSection />
        </>
    );
}