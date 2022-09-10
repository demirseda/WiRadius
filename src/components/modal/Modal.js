import React, {useState} from 'react';
import "../../assets/css/Modal.css";

function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }
  return (
    <div>

        <a  onClick={toggleModal} className="btn btn-fill  btn-modal" style={{position: "fixed", right: "20px", bottom: "20px"}}>Başvuru Yap</a>    

        {modal && (
            <div className='modal'>
                <div onClick={toggleModal} className='overlay'></div>
                <div className='modal_content'>
                    <div className='modal_header'>
                        <h4>Bilgilerinizi Giriniz</h4>
                        <a onClick={toggleModal} className='close_modal'><i className='bx bx-x'></i></a>
                    </div>
                    <p>Aşağıdaki formu doldurarak başvuruda bulunabilirsiniz</p>
                    <form>
                        <div className='modal_block'>
                            <label>İsim</label>
                            <input type="text" placeholder='İsminizi Giriniz'></input>
                        </div>
                        <div className='modal_block'>
                            <label>Soyisim</label>
                            <input type="text" placeholder='Soyisminizi Giriniz'></input>
                        </div>
                        <div className='modal_block'>
                            <label>Email Adresi</label>
                            <input type="text" placeholder='mailadresiniz@example.com'></input>
                        </div>
                        <div className='modal_block'>
                            <label>Telefon Numarası</label>
                            <input type="text" placeholder='0 (555) 000-0000'></input>
                        </div>
                        <div className='submit_btn'>
                            <a className='btn btn-fill'>Başvuru Yap</a>
                        </div>
                    </form>
                </div>
            </div>
        )}
        
    </div>
  );
}
export default Modal;