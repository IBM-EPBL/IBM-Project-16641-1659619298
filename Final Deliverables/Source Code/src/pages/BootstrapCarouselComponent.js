import React from "react";
import { Carousel } from 'react-bootstrap';
import i2 from './img27.webp'
import i3 from './img26.webp'
import i4 from './img1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';
class BootstrapCarouselComponent extends React.Component {
    render() {
        return (
            <div>
                <div className='container-fluid' >
                    <div className="row">
                        <div className="col-sm-12">
                            <center><b><h1>REVIEW</h1></b></center>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel className="r">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={i2} height="500px" width="500px"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Peter</h3>
                                        <p>One of the best and cheaper ways to hang around New York. There are a lot of bicycles and a huge range of docks around the city. I think 30minutes rides are ok to go from one place to another.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={i3} height="500px" width="500px"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Angelina</h3>
                                        <p>We always get citi bikes and now with the improved app and a network of cycle lanes seeing Manhattan has never been easier. Simply down load the app, create an account and off you go. Brilliant !</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={i4} width="500px" height="500px"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>CITIBIKE</h3>
                                        <p>One of the best and cheaper ways to hang around New York. There are a lot of bicycles and a huge range of docks around the city. I think 30minutes rides are ok to go from one place to another.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
export default BootstrapCarouselComponent;
