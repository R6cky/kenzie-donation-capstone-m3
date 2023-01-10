import React from 'react'
import { StyledDivCardButtons, StyledDivCardInfo, StyledDivDescription, StyledFigureCard, StyledSectionCard } from './style'
import coat from "../../assets/moletom.png"

const ProductCard = () => {
  return (
    <StyledSectionCard>
        <StyledFigureCard>
            <img src={coat} alt="" />
        </StyledFigureCard>
        <StyledDivCardInfo>
            <StyledDivDescription>
                <h3>Descrição</h3>
                <span>Moletom em bom, para se esquentar no friozinho</span>
            </StyledDivDescription>
            <button>Roupas</button>
        </StyledDivCardInfo>
        <StyledDivCardButtons>
            <button>Ver</button>
            <button>Doar</button>
        </StyledDivCardButtons>
    </StyledSectionCard>
  )
}

export default ProductCard