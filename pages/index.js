import React from 'react'

import {
  Cart,
  Footer,
  FooterBanner,
  HeroBanner,
  Layout,
  Navbar,
  Product,
} from '../components'

const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className='products-heading'>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>

      <div className='products-container'>
        {['item1', 'item2'].map(item => item)}
      </div>

      <Footer />
    </>
  )
}

export default Home