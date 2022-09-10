import React, { useEffect, useState} from "react";
import "../../assets/css/Blog.css";
import axios from "axios";
import Moment from 'moment';
import 'moment/locale/tr';
import { useParams } from "react-router-dom";

const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

function BlogDetail(){
  const { blog_id, blog_url  } = useParams();

  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.post("https://web.cetvel.com.tr/blog_detail/getWiBlogDetail", {blog_url: blog_url, blog_id: blog_id})
    .then(response => {
      setPost(response.data);
               
    });
  }, []);
 
    return (
      
      <div className="blog_detail">
        {posts.map((obj, index) => {
          return(
          <>
          <div className="blogDetail_header_bgColor" key={index}>
            <div className="blogDetail_header">

              <div className="blogDetail_header_right">
                <h4>{obj.title}</h4>
                
                <span className="member_detail_date">{Moment(obj.date).format("DD MMMM YYYY" )}</span>
              </div>
            </div>
          </div>
          <div className="blogDetail_body" key={index}>
            <p className="blogDetail_text">{obj.summary}</p>
            <p className="blogDetail_text">
              {renderHTML(obj.detail_content)}
            </p>       
           
          </div>
          </>
          );
        })}
      </div>
    );
}
export default BlogDetail;

