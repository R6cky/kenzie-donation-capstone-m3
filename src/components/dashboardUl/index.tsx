import { StyledDashboardList } from "./style";
import { useContext } from "react";
import { DashboardListContext } from "./contextList";
import ImageNotFount from "../../assets/image-not-found.jpg";
import { ModalContext } from "../../modais/modalContext";

export const DashboardList = () => {
  const { newListDonationFiltered, newListRequestFiltered }: any =
    useContext(DashboardListContext);
  const { getDonationAction, getRequestAction } = useContext(ModalContext)

  interface iDashboardListPosts {
    title: string;
    description: string;
    category: string;
    type: string;
    image: string;
    userId: number | string;
    id: number | string;
    data?: [];
  }
  return (
    <StyledDashboardList>
      <ul>
        {newListDonationFiltered.map((element: iDashboardListPosts) => {
          return (
            <li key={element.id}>
              <div className="product-image">
                {element.image !== "" ? (
                  <img src={element.image} alt="img" />
                ) : (
                  <img src={ImageNotFount} alt="img" />
                )}
              </div>
              <div className="product-category">
                <span>{element.title}</span>
                <h4>{element.category}</h4>
              </div>
              <div className="product-description">
                <p>{element.description}</p>
              </div>
              <div className="product-buttons">
                <button>Ver</button>
                <button onClick={() => getDonationAction(element)}>Pegar doação</button>
              </div>
            </li>

            // <DashboardCard element={element} key={element.id}/>
          );
        })}
      </ul>
      <div className="requests-title">
        <h3> Solicitações</h3>
      </div>
      <ul>
        {newListRequestFiltered.map((element: iDashboardListPosts) => {
          return (
            <li key={element.id}>
              <div className="product-image">
                {element.image !== "" ? (
                  <img src={element.image} alt="img" />
                ) : (
                  <img src={ImageNotFount} alt="img" />
                )}
              </div>
              <div className="product-category">
                <span>{element.title}</span>
                <h4>{element.category}</h4>
              </div>
              <div className="product-description">
                <p>{element.description}</p>
              </div>
              <div className="product-buttons">
                <button>Ver</button>
                <button onClick={() => getRequestAction(element)}>Doar</button>
              </div>
            </li>

            // <DashboardCard element={element} key={element.id}/>
          );
        })}
      </ul>
    </StyledDashboardList>
  );
};
