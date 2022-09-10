import React, { Component } from 'react';
import "../../assets/css/AboutUs.css";

class AboutUs extends Component {
  render() {
    return( 
        <div className='aboutUs'>
            <div className='aboutUs_header'>
                <div className='aboutUs_header_left'>
                    <h4>Hakkımızda</h4>
                    <p className='cetvel_slogan'>Cetvel Bulut Ön Muhasebe Sloganı</p>
                    <div className='aboutUs_text' >
                        <p>
                            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
                        </p>
                        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.</p>
                    </div>
                </div>
                <div className='aboutUs_header_right'>
                    <img src={'img/aboutusImg/aboutus_image.jpg'} />
                </div>
            </div>
            <div className='aboutUs_body'>
                <div className='cetvel_mission'>
                    <div className='cetvel_mission_header'>
                        <i className='bx bx-compass'></i>
                        <h4>Misyonumuz</h4>
                    </div>
                    <div className='cetvel_mission_content'>
                        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.</p>
                    </div>
                </div>
                <div className='cetvel_vision'>
                    <div className='cetvel_vision_header'>
                        <i className='bx bx-show' ></i>
                        <h4>Visyonumuz</h4>
                    </div>
                    <div className='cetvel_vision_content'>
                        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.</p>
                    </div>
                </div>
            </div>

        </div>
    )
  }
}
export default AboutUs;