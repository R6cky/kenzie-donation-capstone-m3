import React from 'react'
import ProductCard from '../ProductCard'
import { StyledRequestsList } from './style'

const RequestProducts = () => {
    return (
        <StyledRequestsList>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </StyledRequestsList>
    )
}

export default RequestProducts