import React from 'react'
import Nav from './component/Nav'
import Carosal from './component/Carosal'
import Filter from './component/Filter'
import Category from './component/Category'
import Footer from './component/Footer'

export default function page() {
  return (
    <>
    <Nav/>
    <Carosal />
    <Filter/>
    <Category/>
    <Category/>
    <Footer/>
    
    </>
  )
}
