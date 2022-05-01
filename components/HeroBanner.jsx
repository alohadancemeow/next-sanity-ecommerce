import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>Small Text</p>
        <h3>Mid text</h3>
        <img src="" alt="headphones" className='hero-banner-image' />

        <div>
          <Link href='/product/ID'>
            <button type='button'>Button text</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>desc</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner