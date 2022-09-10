import React,{ Component, useEffect, useState } from 'react';
import axios from 'axios';
import '../../assets/css/Slider.css';
import { Link } from "react-router-dom";

/*const [activeIndex, setActiveIndex] = useState(0);*/
class NewSlider extends Component {
 
    constructor(props) {
        super(props);
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.moveDot = this.moveDot.bind(this);
        this.autoSlide = this.autoSlide.bind(this);
    }

    state = {
        slideIndex: 1,
        setSlideIndex: 1,
        sliders: []
    }
    
    nextSlide(){
       
       
        if(this.state.slideIndex !== this.state.sliders.length)
        {
            this.setState({ slideIndex: this.state.slideIndex+1 });
        }
        else if (this.state.slideIndex === this.state.sliders.length){
            this.setState({ slideIndex: 1 });
        }
    }
     prevSlide(){
        if(this.state.slideIndex !== 1){
            this.setState({ slideIndex: this.state.slideIndex - 1 });
        }
        else if(this.state.slideIndex === 1){
            this.setState({ slideIndex: this.state.sliders.length });
        }
      
    }
    moveDot(index) {
        this.setState({ slideIndex: index });
    }
    autoSlide(){
        setInterval(()=>{
            this.nextSlide()
        },10000)
    }
    componentDidMount(){
        this.autoSlide();
        axios.post(`https://web.cetvel.com.tr/slider/getWiSlider`)
          .then(res => {
                            
            const sliders = res.data;
            this.setState({ sliders });
          })
    }

    render(){

        
        return (
            <div className='container_slider'>
                
                <a className='btnPrev' onClick={this.prevSlide}><i className='bx bx-chevron-left'></i></a>
                <a className='btnNext' onClick={this.nextSlide}><i className='bx bx-chevron-right'></i></a>
                
                    {this.state.sliders.map((obj, index) => {

                        //console.log(index);
                        return(
                            
                            <div key={obj.id} className={this.state.slideIndex === index + 1 ? " slide-active-anim slide"+this.state.slideIndex : "slide "}>
                                <div className='home_slider'>
                                    <div className='slide_left'>
                                        <div className='slide_info_title animation_left '>
                                            <h3>{obj.slider_title}</h3>  
                                        </div>
                                        <div className='slide_info_text animation_left '>
                                            <span>{obj.slider_description}</span>
                                        </div>
                                        <div className='slide_info_buttons animation_left'>
                                            <Link to='/demo' className='btn btn-fill'>Ücretsiz Deneyin</Link> 
                                            <Link to='/contact' className='btn btn-outline'>Detaylı Bilgi Alın</Link>
                                        </div>
                                    </div>
                                    <div className='slide_right animation_right'>
                                        <img src = {obj.full_path}/> 
                                    </div>

                                    
                                </div>
                                <div className='slider_footer'>
                                        <div className='slider_dots'>
                                            {Array.from({length: this.state.sliders.length}).map((item, index) => (
                                                <div key={index + 1} onClick={() => this.moveDot( index + 1 )} className={this.state.slideIndex === index + 1 ? "dot active" : "dot" } > </div>
                                            ))}
                                        </div>
                                        <div className='sliderMouse'><i className='bx bx-mouse'></i></div>
                                    </div>
                            </div>
                        )
                    })}              
                
            </div>
        );
    }
  }
  export default NewSlider;