
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Cetvel_Navbar from "./components/navbar/Navbar";
import AboutUs from "./components/aboutus/AboutUs";
import Contact from "./components/contact/Contact";
import Demo from "./components/demo/Demo";
import Features from "./components/features/Features";
import FeatureDetail from "./components/features/FeatureDetail";
import Blog from "./components/blog/Blog";
import BlogDetail from "./components/blog/BlogDetail";
import Footer from "./components/footer/Footer";
import Home from "./components/Home";
import ScrollToTop from "./components/scrollToTop";
import {  BrowserRouter as Router,  Routes,  Route, Navigate} from "react-router-dom";
import Prices from "./components/prices/Prices";
import Faq from "./components/faq/Faq";
import NotFound from "./components/errorPage/NotFound";


import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      
          <title>WiRadius</title>
          <meta content='Cetvel App' />
          <meta name="description" content='Cetvel Description için girilecek alanıdır' />
  
        <Router>
          <Cetvel_Navbar/>
          <ScrollToTop/>
          <Routes>
            <Route exact path = "/" element={<Home/>}></Route>
            <Route exact path = "/about_us" element={<AboutUs/>}></Route>
            <Route path = "/ozellikler" element={<Features/>}></Route>
            <Route path = "/demo" element={<Demo/>}></Route>
            <Route path = "/prices" element={<Prices/>}></Route>
            <Route path = "/blog" element={<Blog/>}></Route>
            <Route path = "/contact" element={<Contact/>}></Route>
            <Route path = "/blog-detay/:blog_url" element={<BlogDetail/>}></Route>
            <Route path = "/help" element={<Faq/>}></Route>
            <Route path = "/ozellik-detay/:detailURL" element={<FeatureDetail/>}> </Route>
            <Route path = "/ozellikler/ozellik-detay/:detailURL" element={<FeatureDetail/>}> </Route>
            <Route path = "/404-not-found" element={<NotFound/>}></Route>
            <Route path = "*" element={<Navigate replace to="/404-not-found" />} > </Route>
          </Routes>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
