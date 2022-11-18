import React from 'react';
import './Scholarship.css'
import i1 from './img20.webp'
import ig1 from './img8.png'
import ig2 from './img9.png'
import ig3 from './img10.png'

function Scolarship() {
    return (
        <div className='Scolarship'>
            <div className="about">
                <div className="a1">
                    <h2><b>About CITIBIKE</b></h2>
                    
                    <p>_____________________________________________________________________________________________________</p>
                    <p align="justify">Citi Bike’s mission is to make urban mobility in New York City seamless, shareable and sustainable. What started off as an initiative to reduce traffic congestion and pollution in American cities, is now redefining urban mobility across the country.<br></br><br></br>

We are driven by three guiding principles of urban mobility – Accessibility, Availability, and Affordability.<br></br><br></br>

We are empowering residents in American cities to create a paradigm shift in the mobility industry, by making the urban commute more efficient and eco-friendly.<br></br><br></br>

Citi-Bike is a technology-driven mobility platform that enables Integrated Urban Mobility across public and private modes of transport. Using Micro Mobility Vehicles (MMVs) through a user-friendly mobile app, Citi-Bike enables first and last-mile connectivity that is seamless, shared and sustainable.<br></br><br></br>

We are an USA-based company with a founding team that is deeply passionate about creating positive social impact. This mindset is instilled in each and every member of our team, and we are dedicated to making a difference in the lives of people around us. So, if you are passionate about the challenges of urban mobility, chaotic congestion, and sustainable living, let’s have a conversation and make a difference together! <br></br><br></br>

<b>Be #Unstoppable</b></p>
                </div>
                <img src={i1} width="60%" height="60%" />
            </div>
        </div>
    );
}

export default Scolarship;

