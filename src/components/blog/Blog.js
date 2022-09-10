import React, { Component } from 'react';
import "../../assets/css/Blog.css";
import axios from "axios";
import Moment from 'moment';
import 'moment/locale/tr';
import {Link} from "react-router-dom";

class Blog extends Component {

    state = {
        lastIndex: 1, 
        blogs: []
    }
    componentDidMount(){

        axios.post('https://web.cetvel.com.tr/blog/getWiBlogList')
        .then(res => {
            const blogs = res.data;
            const blogsLength = 0;
            this.setState({lastIndex: blogsLength});
            this.setState({blogs});
        })
    }
  render() {
    return (
        <div className='blog'>
            {this.state.blogs.map((obj, i) => { 
                return(
                <div className='blog_header' key={obj.id}>
                    {this.state.lastIndex === i ?(
                    <>
                        <div className='new_blog_left'>
                            <img src={obj.full_path }></img>
                        </div>
                        <div className='new_blog_right'>
                            <span className='newBlog_date'>{Moment(obj.start_date).format("DD MMMM YYYY" )} </span>
                            <h4> { obj.title } </h4>
                            <p> { obj.summary } </p>
                            <Link to = {"/blog-detay/"+obj.url} className='btn btn-fill'>Devamını Oku</Link>
                        </div>
                    </>
                    ): null }
                </div>
                )
                })}
            <div className='blog_card'>
                {this.state.blogs.map((obj, i) => {
                    return (
                    <>
                    {this.state.lastIndex === i ? (null) : (
                    <Link to = {"/blog-detay/"+obj.url} className='blog_body' key={obj.id}>
                        <div className='blog_image'>
                            <img src = {obj.full_path}/> 
                        </div>
                        <div className='blog_conent_width'>
                            <div className='blog_title'>
                                <h4> {obj.title} </h4>
                            </div>
                            <div className='blog_content'>
                                <p>
                                    { (obj.summary).substring(0,150) + '...' }
                                </p>
                                <div className='block_detail_hover'>
                                    <div className='block_detail_hover_content'>
                                        <Link to = {"/blog-detay/"+obj.url} className='btn btn-fill btn_ready_continue'>Devamını Oku</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='blog_date'>
                                <span> { Moment(obj.start_date).format("DD MMMM YYYY" ) }  </span>
                            </div>
                        </div>
                    </Link>
                    )}
                    </>
                    )
                })}
            </div>
        </div>
    );
  }
}
export default Blog;