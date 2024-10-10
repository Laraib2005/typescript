import React from 'react'
import Navbar from "../app/component/Navbar"
import Banner from './component/Banner'
import Card from './component/Card'
import Carousel from './component/Carousel'
import Offer from './component/Offer'
import ProductList from './component/ProductList'
import Progressor from './component/progressor'
import Footer from './component/Footer'
import Deals from './component/Deals'

export default function App(){
  return (
    <div className='bg-gradient-to-r from-black to-slate-700 min-h-screen'>
      <Navbar/>
      <Banner/>
      <Carousel/>
    <ProductList/>
    <Progressor/>
    <Offer/>
    <Deals/>
    <Card/>
    <Footer/>
    </div>
  );
};
