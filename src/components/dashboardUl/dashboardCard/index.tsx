import { StyledDashboardCard } from "./style"



export const DashboardCard = () => {
    


   return(
        <StyledDashboardCard>
            <div className="product-image">
                  <img src="" alt="img" />
            </div>
            <div className="product-category">
                <span>Descrição</span>
                <h4>Categorias</h4>
            </div>
                <div className="product-description"></div>
                <div className="product-buttons">
                <button>Ver</button>
                <button>Doar</button>
            </div>
        </StyledDashboardCard>
   )
}
