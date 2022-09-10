import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    return (
      <div className='page_style'>
          <div className='page_top_image'>
            <img src={'img/errorPage/not_found_top.png'} />
          </div>
          <div className='notFound_page'>
           <div className='page_left'>
             <h3 className='oops'>OOPS...</h3>
             <h6 className='not_found_text'>Aradığınız Sayfa Bulunamadı. 404 Not Found </h6>
             <a href='/' className='btn btn-fill'> Anasayfaya Dön </a>               
           </div>
           <div className='page_right'>
             <img src={'img/errorPage/not_found.png'} />
           </div>
          </div>

          <div className='page_under_image'>
            <img src={'img/errorPage/not_found_under.png'} />
          </div> 
      </div>
    )
  }
}
