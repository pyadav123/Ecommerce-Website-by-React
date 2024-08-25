import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers.jsx'
import NewCollections from '../Components/NewCollecctions/NewCollections.jsx'
import NewsLetter from '../Components/NewsLetter/NewsLetter.jsx'

const Shop = () => {

  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter />
    </div>
  )
}

export default Shop
