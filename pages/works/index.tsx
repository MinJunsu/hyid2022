import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CategoryWithWorks } from "@pages/api/category";
import MobileWorks from "@components/mobile/works";
import type { NextPage } from "next";

const WorksPage: NextPage = () => {
  const getCategory = () => {
    return Axios.get("/api/category").then((res) => res.data);
  };
  const { data, isLoading } = useQuery<CategoryWithWorks[]>(
    ["category"],
    getCategory
  );

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div>
      <MobileWorks categories={data!} />
      {/*<Id categories={data!} />*/}
    </div>
  );
};

export default WorksPage;
