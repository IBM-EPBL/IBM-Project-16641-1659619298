import './App.css';
//import i1 from './img1.png'
import React from 'react';
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapCarouselComponent from './pages/BootstrapCarouselComponent'

//import jwt_deocde from "jwt-decode";
/*
const App = () => {
  const googlebuttonref = useRef();
  const [user, setuser] = useState(false);
  const onGoogleSignIn = (user) => {
    let userCred = user.credential;
    let payload = jwt_deocde(userCred);
    console.log(payload);
    setuser(payload);
  };
  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID, // here's your Google ID
      callback: onGoogleSignIn,
      auto_select: false,
    });

    window.google.accounts.id.renderButton(googlebuttonref.current, {
      size: "medium",
    });
  });

*/

function App() {
    
    return (
        <div>
            <div className="c0">
                
            <Navbar />
            <div className="c1">
                <br></br>
                <h1>CITIBIKE</h1>
            </div> 
            <div className="campus">
            <div className="campustour">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/24dFuDx8P-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </div>
             <div className="campustour1">
             <iframe width="560" height="315" src="https://www.youtube.com/embed/BgfKGjPXbIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </div></div>
            <div>             
                <div className="t1"><h3> About CITIBIKE<br></br>_____________</h3></div>
                <div className="t2">
                Citibike’s mission is to make urban mobility in India seamless, shareable and sustainable. What started off as an initiative to reduce traffic congestion and pollution in US cities, is now redefining urban mobility across the country.

We are driven by three guiding principles of urban mobility – Accessibility, Availability, and Affordability.

We are empowering residents in Indian cities to create a paradigm shift in the mobility industry, by making the urban commute more efficient and eco-friendly.</div>
            </div>
            <div className="car">
            <BootstrapCarouselComponent /> </div>
        </div>
        
        </div>
    );
}

export default App;