import { StyledDashboard } from "./style"
import { DashboardHeader } from "../../components/dashboardHeader"
import { DashboardList } from "../../components/dashboardUl"

export const Dashboard: () => JSX.Element = () => {
    
    

   return(
        <StyledDashboard>
            <DashboardHeader/>
            <div className="list-post">
                <DashboardList/>
            </div>
            <div className="list-request">
                <DashboardList/>
            </div>
        </StyledDashboard>
   )
}
