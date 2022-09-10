import React, { Component, useState } from 'react';
import { ParallaxProvider } from "react-scroll-parallax";
import Fade from "react-reveal/Fade";
import Card from "./card/Card";
import Prices from "./prices/Prices";
import NewSlider from "./slider/newSlider";
import Modal from "./modal/Modal";
import Features from "./features/Features";
class Home extends Component {
  render() {
   
    return <div>
        <NewSlider/>
        <Card/> 
          <div className='home_features' fullWidth={true} textDirection="toutContent w-full my-0 mx-auto py-20 sm:py-0 flex flex-col-reverse sm:flex-row-reverse text-left bg-purple">
            <div className='homeFeatures_left'>
              <img src={ 'img/call_center.png' } ></img>
            </div>
            <div className='homeFeatures_right'>
              <h4>Çağrı Merkezi, Santral entegrasyonu çok yakında hizmetinizde !</h4>
              <p>Çağrı Merkezi, Santral entegrasyonu çok yakında hizmetinizde !</p>
            </div>
          </div>    
        <Features/>
     
    </div>;
  }
}
export default Home;