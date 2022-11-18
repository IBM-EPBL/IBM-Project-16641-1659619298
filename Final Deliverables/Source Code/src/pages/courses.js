import React from 'react';
import './Admissions.css';
import './courses.css';
import i1 from './img3.png'
import i2 from './img4.png'
import i5 from './img5.png'
import i6 from './img6.png'
import i7 from './img7.png'
import i8 from './img8.png'
import i9 from './img9.png'
import i10 from './img10.png'
import './PrepGuide.css'

function Courses() {
    return (
        <div>
            <br></br><br></br><br></br>
            <div><h3>Data Visualizations 1 and 2</h3></div><br></br>
            <div  className="bala">
           <img src={i1} width="50%" height="50%"/>
           <img src={i2} width="50%" height="50%"/></div><br></br><br></br><br></br>
           <div>
            <h3>Data Visualizations 3 and 4</h3><br></br>
           </div>
           <div  className="bala2">
           <img src={i5} width="50%" height="50%"/>
           <img src={i6} width="50%" height="50%"/></div><br></br><br></br><br></br>
           <div>
            <h3>Data Visualizations 5 and 6</h3><br></br>
           </div>
           <div  className="bala3">
           <img src={i7} width="50%" height="50%"/>
           <img src={i8} width="50%" height="50%"/></div><br></br><br></br><br></br>
           <div>
            <h3>Data Visualizations 7 and 8</h3><br></br>
           </div>
           <div  className="bala3">
           <img src={i9} width="50%" height="50%"/>
           <img src={i10} width="50%" height="50%"/></div><br></br><br></br><br></br>

        </div>
    );
}

export default Courses;

