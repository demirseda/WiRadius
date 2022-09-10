import React, { Component, useRef } from "react";
import "../../assets/css/Features.css";
import $ from 'jquery';
import axios from "axios";
import {  Link} from "react-router-dom";

class Features extends Component {

  constructor(props)
  {
    super(props);
  
  }
  state = {
    features: []
  }
  
  componentDidMount(){

    axios.post('https://web.cetvel.com.tr/feature/getWiFeatureList')
    .then(res => {
      const features = res.data;
      this.setState({ features });
    })

      function isInViewport() {
        var elementTop = $('.features_property').offset().top;
        var elementBottom = elementTop + $('.features_property').outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
      };
      var windowWeight = $(window).width();
      if(windowWeight > 999){
        if(isInViewport){
          var blockWidth = $('.features_property').width();
          $('.features_property').animate({
            'scrollLeft': blockWidth * 8
          }, 50000);
          $('.features_property').hover(function (){
            $('.features_property').stop();
          });
          $('.features_property').mouseleave(function (){
            $('.features_property').animate({
              'scrollLeft': blockWidth * 8
            }, 50000);
          });
        }
      }
  }
  render() {
    
    return (
      <div ref={this.myRef} className="features">
       
        <div className="features_property">

        {this.state.features.map((obj, index) => {
          var href = "ozellik-detay/"+obj.url;     
          return (
            <>
              <Link to={href}  className="feature_slider"  value={obj.id} key={index} >
                <div className="feature_block" >
                  <div className="feature_block_left">
                    <h3> {obj.title} </h3>
                    <p> {(obj.description).substring(0,250) + '...'} </p>
                  </div>
                  <div className="feature_block_right">
                    <img alt="test" src={ obj.full_path } />
                  </div>
                </div>
              </Link>         
            </>
          );
          })}
         
        </div>
      </div>
    );
  }
}


export default Features;
