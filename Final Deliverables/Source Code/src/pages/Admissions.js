import React from 'react';
import './Admissions.css';
import i1 from './img21.jpg'
import i2 from './centralpark.jpg'
import i3 from './hudson.jpg'
import Bcc from './Bcc'
import '../App.css';

function Admissions() {
    return (
        <div>
           
            <div className="topic">   
                <h1>DASHBOARD</h1>  
            </div>
            <br></br>
            <h2>What is a Dashboard?</h2>
            <p>____________________________________________________________________________________________________________________________________</p>
            <div className = "dash">
                <div className = "dashp">
            <p>        A data dashboard is a tool many businesses use to track, analyze, and display data—usually to gain insight into the overall wellbeing of an organization, department, or specific process.</p>
            <h3>Why data dashboards are important?</h3> 
            
            <p>
            Dashboards connect all kinds of different metrics, data sources, APIs, and services to help companies extract relevant information from those sources and display it in user-friendly ways. Like a car’s dashboard, data dashboards organize and display important information at a glance to help you understand your company’s most valuable data and unearth answers to crucial questions.<br></br>

By connecting dashboards to specific metrics or key performance indicators (KPIs), you gain vital business intelligence and the ability to dive deep into specific pieces of information to continually monitor success. Just like in a car, dashboards indicate how far along you are on your journey and how long it may take to get where you want to go.
            </p>
            <p>_______________________________________________________________</p>
            <h3>Here is the the dashbaord of A new hint to-Transportation Bike share System.</h3>
            <p>____________________</p>
            <p>***Please enter into full screen Mode to make the use of Dashboard fully.***</p>
            <p>____________________</p>
            <br></br>
            <h3>1. Dashboard One</h3>
            <iframe src="https://eu2.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FMain%2BDashboard1&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018486218b83_00000002" width="320" height="200" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <h3>2.Dashboard Two</h3>
            <iframe src="https://eu2.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FMain%2BDashboard%2B2&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018486767419_00000000" width="320" height="200" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            </div>
            
            <img src={i1} width="50%" height="50%" />
            </div>

            </div>
    
            
    );
}

export default Admissions;
