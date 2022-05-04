import React from 'react'
import Img from 'next/image';

// sanity
import { client } from '../lib/client'
import { useNextSanityImage } from 'next-sanity-image';

import {
  FooterBanner,
  HeroBanner,
  Product,
} from '../components'

const Home = ({ productData, bannerData }) => {
  // console.log(productData);
  // console.log(bannerData);

  // const imageProps = useNextSanityImage(
  //   client,
  //   productData.image
  // );
  // console.log(imageProps);

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className='products-heading'>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>

      <div className='products-container'>
        {productData?.map(item => <Product key={item._id} product={item} />)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}

export default Home


// get data from sanity cms
export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]'
  const productData = await client.fetch(productQuery)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {
      productData,
      bannerData
    }
  }
}