import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";

interface iChildren {
  children: React.ReactNode;
}

interface iDashboardListPosts {
  title: string;
  content: string;
  category: string;
  type: string;
  image: string;
  userId: number;
  id: number;
  data: [];
}

export const DashboardListContext = createContext({} as any);

export const DashboardListProvider = ({ children }: iChildren) => {
  const [dashboardListPosts, setDashboardListPosts] = useState<any>(
    [] as iDashboardListPosts[]
  );
  const [dashboardListRequests, setDashboardListRequests] = useState(
    [] as iDashboardListPosts[]
  );
  console.log(dashboardListPosts);
  const [filterDonation, setFilterdonation] = useState("Todas as doações");

  const newListDonationFiltered = dashboardListPosts.filter((element: any) =>
    filterDonation === "Todas as doações"
      ? true
      : filterDonation === element.category
  );

  const newListRequestFiltered = dashboardListRequests.filter((element: any) =>
    filterDonation === "Todas as doações"
      ? true
      : filterDonation === element.category
  );
  useEffect(() => {
    const getPost = async () => {
      try {
        const request: iDashboardListPosts = await api.get("/donation");
        setDashboardListPosts(request.data);
      } catch (error) {
        console.error(error);
      }
    };

    getPost();
  }, []);

  useEffect(() => {
    const getRequests = async () => {
      try {
        const request: iDashboardListPosts = await api.get("/request");
        setDashboardListRequests(request.data);
      } catch (error) {
        console.error(error);
      }
    };
    getRequests();
  }, []);

  return (
    <DashboardListContext.Provider
      value={{
        dashboardListPosts,
        setDashboardListPosts,
        dashboardListRequests,
        setDashboardListRequests,
        setFilterdonation,
        filterDonation,
        newListDonationFiltered,
        newListRequestFiltered,
      }}
    >
      {children}
    </DashboardListContext.Provider>
  );
};
