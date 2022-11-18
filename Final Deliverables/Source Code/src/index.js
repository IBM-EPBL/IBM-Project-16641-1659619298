import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Admissions from './pages/Admissions';
import Courses from './pages/courses';
import PrepGuide from './pages/PrepGuide';
import Scolarship from './pages/Scolarship'; 




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
        <Router>
            
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="Scolarship" element={<Scolarship />} />
                <Route path="Admissions" element={<Admissions />} />
                <Route path="courses" element={<Courses />} />
                <Route path="PrepGuide" element={<PrepGuide />} />
                    
            </Routes>
        </Router>
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//Client ID : 871828463361-qlmf0kvfdsatvqmng8ma727t8d6jmkar.apps.googleusercontent.com
//CLient secret : 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