import React from 'react'
import ProductCard from '../ProductCard'
import { StyledDonationsList } from './style'

const DonationProducts = () => {
  return (
    <StyledDonationsList>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </StyledDonationsList>
  )
}

export default DonationProducts