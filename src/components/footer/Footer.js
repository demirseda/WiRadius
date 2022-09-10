import React from 'react';
import "../../assets/css/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='footer_div'>
        <div className='footer'>
            <div className='footer_info'>
                <div className='contact_info footer_height'>
                    <div className='cetvel_logo footer_title'>WiRadius</div>
                    <div className='address'>
                        <p>Sultan Orhan Mah. İlyasbey Cad. 1117 Sk. </p>
                        <p>No:6 K:2 Gebze – KOCAELİ</p>
                    </div>
                    <div className='phone_numbers'>
                        <span className='phone1'><i className='bx bx-phone' ></i> 0 262 644 66 63</span>
                        <span className='phone2'><i className='bx bx-mobile-alt' ></i> 0 850 532 23 61</span>
                    </div>
                    <div className='mail'><i className='bx bxl-gmail' ></i>yazilim@wiradius.com</div>
                </div>
                <div className='footer_right'>
                    <div className='contract_info footer_height'>
                        <div className='footer_title'> <h4>WiRadius</h4> </div>
                        <ul>
                            <li><a> Kullanım Kılavuzu</a></li>
                            <li><a> Veri Güvenliği </a></li>
                            <li><a> Kullanıcı Sözleşmesi ve Gizlilik </a></li>
                            <li><a> Kişisel Verilerin Korunması ve İşlenmesine İlişkin Aydınlatma Metni</a></li>
                            <li><a> Çerez Politikası </a></li>
                        </ul>
                    
                    </div>
                    <div className='footer_features footer_height'>
                        <div className='footer_title'> Kategoriler </div>
                        <ul>
                            <li><a href='/'>Anasayfa</a></li>
                            <li><a href='/ozellikler'>Özellikler</a></li>
                            <li><a href='/demo'>Demo</a></li>
                            <li><a href='/blog'>Blog</a></li>
                            <li><a href='/help'>Sık Sorulan Sorular</a></li>
                            <li><a href='/contact'>Bize Ulaşın</a></li>
                        </ul>
                    </div>
                    <div className='social_media footer_height'>
                        <div className='footer_title'> Bizi Takip Edin </div>
                        <div className='footer_icons'>
                            <a className='footer_facebook_icon'><i className='bx bxl-facebook' ></i></a>
                            <a className='footer_twitter_icon'><i className='bx bxl-twitter' ></i></a>
                            <a className='footer_instagram_icon'><i className='bx bxl-instagram' ></i></a>
                            <a className='footer_youtube_icon'><i className='bx bxl-youtube' ></i></a>
                        </div>
                        <div className='footer_apply'>
                            <div className='google_play'> <img src= {require('../../assets/images/google_play1.png')}></img> </div>
                        </div>
                    </div>
                </div>

            </div>
            
            <div className='footer_copyright'>
                <span>Copyrights © 2022 WiRadius | Cetvel Ön Muhasebe Platformu</span>
                <div className='footer_info_small'>
                    <a href='#'>Hakkımızda</a> 
                    <a href='#'>Gizlilik Politikası</a>
                    <a href='/help'>Destek</a>
                </div>
            </div>

        </div>
    </div>
  );
}
export default Footer;