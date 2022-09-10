import React, { Component } from 'react';
import "../../assets/css/Demo.css";

class Demo extends Component {
  render() {
    return (
      <div className='demo_page'>
          <h3>WiRadius Demo sistemini aşağıdaki erişim bilgilerini kullanarak test edebilirsiniz.</h3>
          <div className='demo_card'>
              <div className='crm_demo demo_info'>
                <div className='demo_title'> Yönetim Portalı </div>
                  <a href='https://crm.wiradius.com' title='Tıklayınız' target="_blank"> crm.wiradius.com </a>
                  <p>Kullanıcı Adı: <span>demo</span> </p>
                  <p>Şifre: <span>demo</span> </p>
                  <p>Yönetim Portalı Mobil Uygulama ( Android ) : <a href='https://wiradius.com/downloads/CRM_Demo.apk' title='Tıklayınız' target="_blank">WiRadius Mobile APP</a> </p>

              </div>
              <div className='oim_demo demo_info'>
                <div className='demo_title'> Online İşlem Merkezi </div>
                  <a href='https://demo-oim.wiradius.com/login' title='Tıklayınız' target="_blank"> demo-oim.wiradius.com </a>
                  <p>Kullanıcı Adı: <span>demo</span> </p>
                  <p>Şifre: <span>demo</span> </p>
                  <p>Online İşlem Merkezi Mobil Uygulama ( Android ) : <a href='https://wiradius.com/downloads/OIM_Demo.apk' target="_blank">OIM Demo Mobile APP</a> </p>
              </div>
          </div>

          <h4 className='note'>NOT: Demo hesap yetkisi kısıtlanmış hesaptır. Yapılan işlemler sonrasında kayıp olabilir.</h4>
      </div>
    )
  }
}
export default Demo;
