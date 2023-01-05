import { StyledDashboardHeader } from "./style"



export const DashboardHeader: () => JSX.Element = () => {
    


   return(
        <StyledDashboardHeader>
            <div className="area-menu">
               <span><img src="" alt="logo" /></span>
               <div><img src="" alt="menu" /></div>
            </div>
            <div className="product-category">
               <div><img src="" alt="Roupas" /></div>
               <div><img src="" alt="brinquedos" /></div>
               <div><img src="" alt="Móveis" /></div>
               <div><img src="" alt="Electro" /></div>
            </div>
        </StyledDashboardHeader>
   )
}
