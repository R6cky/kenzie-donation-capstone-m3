import { StyledDashboardCard } from "./style";

export const DashboardCard = () => {
  return (
    <StyledDashboardCard>
      <div className="product-image">
        <img src="" alt="img" />
      </div>
      <div className="product-category">
        <span>Descrição</span>
        <h4>categorias</h4>
      </div>
      <div className="product-description"></div>
      <div className="product-buttons">
        <button>ver</button>
        <button>doar</button>
      </div>
    </StyledDashboardCard>
  );
};
