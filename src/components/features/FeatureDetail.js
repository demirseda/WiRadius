import axios from "axios";
import React,{ useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";




 function FeatureTest(){

  const { detailURL, detailID } = useParams();

  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.post("https://web.cetvel.com.tr/feature_detail/getWiFeatureDetail", {feature_url: detailURL, feature_id: detailID})
    .then(response => {
      setPost(response.data);
            
    });
  }, []);
 
 
  return (
    <div className='feature_detail'>

      {posts.map((obj) => {
        return(
        
          <div className='feature_header' key={obj.id}>

            <div className='feature_header_left' key={obj.id}>
              <h4> {obj.title} </h4>
              <p> {obj.description} </p>
              <div className='feature_header_button'>
                <Link to="/demo" className='btn btn-fill'>Ücretsiz Dene</Link>
                <span> WiRadius Sistemini ücretsiz denemek için tıklayınız.  </span>
              </div>
            </div>
            <div className='feature_header_right'>
              <img src={ obj.full_path }/>
            </div>
          </div>
        ) 
      })}
      {posts.map((obj) => {
        return(
        <div className='feature_body' key={obj.id}>          
            {obj.data[0].map((v, k) => {
              return(
                <div className='feature_body_block' key={k}>
                  <span className='feature_body_icon'><i className={v.icon_class}></i></span>
                  <h3>{v.packet_name}</h3>
                  <p>{v.module_description}</p>
                </div>
              )
            })} 
        </div>
       )        
      })}
    </div>
  )
}
export default FeatureTest;