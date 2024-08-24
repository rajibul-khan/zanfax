import React from 'react'
import Header from './component/Header'
import Carosal from './component/Carosal'
import Filter from './component/Filter'
import Category from './component/Category'
import Footer from './component/Footer'

export default function page() {
  return (
    <>
    <Header/>
    <Carosal />
    <Filter/>
    <Category/>
    <Category/>
    <Footer/>
    
    </>
  )
}
