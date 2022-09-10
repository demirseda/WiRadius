import React, { Component } from 'react';
import "../../assets/css/Prices.css";
import pricesData from "./pricesData";

class Prices extends Component {
  render() {
    return (
        <div>
            <div className='prices_page'>
                <div className='prices_header'>
                    <h3>Çeşitli Paketler Sayesinde İhtiyacınıza Göre Paket Seçimi Yapabilirsiniz</h3>
                    <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.</p>
                </div>

                <div className='prices_body'>
                    {pricesData.map((obj, index) => {

                        return(
                        <div className={`packet packet${index + 1}`} key={index}>
                            <div className='packet_header'>
                                <span className='packet_icon'><i className={obj.icon} ></i></span>
                                <h4> {obj.packet_name} </h4>
                                <span className='price'> {obj.prices} <span className='tl_icon'> {obj.prices_currecy} </span></span>
                            </div>
                            <div className='packet_content'>
                                <ul>
                                    {obj.features_list.map((val,key) => {
                                        return <li key={key}><i className={obj.feature_li_icon} ></i><span>{val}</span></li>
                                    })}
                                </ul>
                            </div>
                            <div className='packet_footer'>
                                <a className='btn_TryForFree'>Ücretsiz Deneyin</a>
                            </div>
                        </div>

                        )
                    })}
                </div>
            </div>
        </div>
    );
  }
}
export default Prices;