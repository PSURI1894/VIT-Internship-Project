

import React from 'react';
import ReactDOM from 'react-dom/client';
import {Navigate} from "react-router-dom";
import { createSearchParams,useSearchParams,useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
function H(){
    return (
        <div className='content'>
            <h1>FLY HIGH</h1>
            <Carousel className='custom-carousel'>
      <Carousel.Item>
            <img
                className="d-block w-100"
                src={require("./images/j.jpg")}
                alt="First slide"
                id="img_one"
            />

            <Carousel.Caption>
                <h3>Excellence</h3>
                <p>Discover the pinnacle of aviation excellence with our state-of-the-art aircraft.</p>
            </Carousel.Caption>
        
        
      </Carousel.Item>
      <Carousel.Item>
      <img
            className="d-block w-100"
            src={require("./images/i.jpg")}
            alt="Second slide"
            id="img_two"
            
          />
        
        <Carousel.Caption>
          <h3>Brilliance</h3>
          <p>Elevate your journey with unparalleled comfort and cutting-edge technology.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className="d-block w-100"
            src={require("./images/k.jpg")}
            alt="Third slide"
            id="img_three"
          />
        
        <Carousel.Caption>
          <h3>Futuristic</h3>
          <p>Experience the future of flight with our innovative and reliable fleet.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </div>
    );
}
export default H;