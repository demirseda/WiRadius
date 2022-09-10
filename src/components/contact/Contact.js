import React, { Component } from 'react';
import "../../assets/css/Contact.css";
import "../../App.css";
import axios from "axios";
import Modal from 'react-awesome-modal';
class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {
      fullname: '',
      mail_address: '',
      phone_number: '',
      description: '',
      store: window.origin,
    }
  }
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value })  
  }

  submitHandler = e =>{
    if(!this.state.fullname || !this.state.mail_address || !this.state.phone_number || !this.state.description)
      return false;
    
    e.preventDefault()
    axios.post("https://web.cetvel.com.tr/contact/getWiContact", this.state).then(response => {
      if(response.data['status'] == 'danger'){
        this.setState({openWarningModal: true});
      }
      else if(response.data['status'] == 'success'){
        this.setState({openSuccessModal: true});
      }
    })

  }
  closeModal() {
    this.setState({
      openWarningModal : false,
      openSuccessModal: false
    });
}

  render() {
    const {fullname, mail_address, phone_number, description, store} = this.state

    return (
    <div className='contact'>
        <div className='contact_left'>
          <div className='contact_text'>
            <h3>İletişim</h3>
            <p>Aşağıdaki iletişim kanallarından bizimle iletişime geçebilirsiniz.</p>
          </div>
          <div className='contact_mail'>
            <i className='bx bxl-gmail'></i>
            <div className='contact_mail_info'>
              <h4>Mail</h4>
              <p>Takım arkadaşlarımız size yardım etmek için burada.</p>
              <span><b>yazilim@wiradius.com</b></span>
            </div>
          </div>

          <div className='contact_phone'>
            <i className='bx bx-phone'></i>
            <div className='contact_phone_info'>
              <h4>Telefon</h4>
              <p>Takım arkadaşlarımız size yardım etmek için burada.</p>
              <span><b>0 262 644 66 63</b></span>
            </div>
          </div>

          <div className='contact_location'>
            <i class='bx bx-map'></i>
            <div className='contact_location_info'>
              <h4>Ofis</h4>
              <p>Tanışmak için ofisimize bekleriz.</p>
              <span><b>Sultan Orhan Mah. İlyasbey Cad. 1117 Sk. No:6 K:2 Gebze – KOCAELİ</b></span>
            </div>
          </div>

        </div>
        <div className='contact_right'>
          <div className='contact_right_first_div'>
            <div className='contact_right_info'>
              <h3>İletişime Geçin</h3>
              <p>WiRadius hakkında detaylı bilgi almak için bizimle iletişime geçebilirsiniz.</p>
            </div>
            <form onSubmit = {this.submitHandler} >
            <input type="hidden" class="hide" name="store" value={store}></input>
              <div className='contact_block'>
                <label>Ad Soyad *</label>
                <input type="text" id='contact_name' name='fullname' value={fullname} placeholder='İsminizi Giriniz' onChange = {this.changeHandler}></input>
              </div>
              <div className='contact_block'>
                <label>Email Adresi *</label>
                <input type="text" id='contact_mail' name='mail_address' value={mail_address} placeholder='mailadresiniz@example.com' onChange = {this.changeHandler} ></input>
              </div>
              <div className='contact_block'>
                <label>Telefon Numarası *</label>
                <input type="phone" maxLength={11} id='contact_phone' name='phone_number' value={phone_number} placeholder='Telefon Numaranızı Giriniz' onChange = {this.changeHandler}></input>
              </div>
              <div className='contact_block'>
                <label>Size nasıl yardımcı olabiliriz? *</label>
                <textarea id="contact_text" name='description' value={description} placeholder='Proje hakkında görüşlerinizi belirtebilirsiniz' onChange = {this.changeHandler}> </textarea>
              </div>
              <div className='submit_btn'>
                <button type='submit' className='btn contact_submit_btn' >Gönder</button>
              </div>
            </form>
          </div>
        </div>
        <section>
          <Modal visible={this.state.openWarningModal} width="500" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
              <div className='warning_modal'>
                <div className='warning_modal_content'>
                  <span><i className='bx bx-error' ></i></span>
                  <p>Daha önce tarafımıza yapmış olduğunuz başvuru tarafımıza ulaşmıştır. En kısa sürede geri dönüş sağlanacaktır.</p>
                </div>
                <button className='btn btn-primary btn-fill btn_close_modal' onClick={() => this.closeModal()}>Kapat</button>
              </div>
          </Modal>
        </section> 
        <section>
          <Modal visible={this.state.openSuccessModal} width="500" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
              <div className='success_modal'>
                <div className='success_modal_content'>
                  <span><i className='bx bx-check-circle'></i></span>
                  <p> Başvurunuz alınmıştır. En kısa sürede tarafınıza geri dönüş sağlanacaktır. </p>
                </div>
                <button className='btn btn-primary btn-fill btn_close_modal' onClick={() => this.closeModal()}>Kapat</button>
              </div>
          </Modal>
        </section> 
    </div>
    );
  }
}
export default Contact;