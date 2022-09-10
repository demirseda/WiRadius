import React, { Component } from 'react';


class Slider extends Component {
  render() {
    return (
        <div>
            <div className='home_slider'>
                <div className='slide_left'>
                    <div className='slide_info_title'>
                        <h3>Daha Kolay Daha Hızlı</h3>
                    </div>
                    <div className='slide_info_text'>
                        <span>Bulut Tabanlı Ön Muhasebe Programı ile Artık Herşey Daha Kolay Daha Hızlı Heryerden Erişim Kolaylığı</span>
                        <span></span>
                    </div>
                    <div className='slide_info_buttons'>
                       <a href='#' className='btn btn-fill'>Ücretsiz Deneyin</a> 
                       <a href='#' className='btn btn-outline'>Detaylı Bilgi Alın</a>
                    </div>

                </div>
                <div className='slide_right'>
                    <img src={require('../../assets/images/home_image_1.png')}></img>
                </div>

                <div className='sliderMouse'><i className='bx bx-mouse'></i></div>
            </div>
        </div>
    );
  }
}
export default Slider;