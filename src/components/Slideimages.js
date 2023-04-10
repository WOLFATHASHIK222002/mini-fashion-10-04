import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide0 from "../img/slide0.jpg";
import slide1 from "../img/slide1.jpg";
import Myvideo from "../img/videoplay.mp4";
import "./Sample.css";
const Imageslide = () => {
  return (
    <>
      <div>
        <h1 className="webfirst">
          All Item <h1 className="offer-40">Up to 40% off</h1>
          <h2 className="men">
            <p>MEN</p>FASHION
          </h2>
        </h1>
      </div>

      <div className="contimg">
        <div className="slidemain">
          <video autoPlay muted loop src={Myvideo}></video>
          {/*   <Carousel className="carousel slide" data-ride="carousel">
            <Carousel.Item interval={1000} className="slide1">
              <img
                className="d-block w-100 myimg"
                src={slide0}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500} className="slide1">
              <img
                className="d-block w-100 myimg"
                src={slide1}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel> */}
        </div>
        <br></br>
        <br></br>
      </div>
    </>
  );
};
export default Imageslide;
