import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CategoryWithWork } from "./api/category";
import MobileWorks from "../components/mobile/works";
import WorksPage from "../components/Desktop/works";
import Index from "../components/Desktop/work";

function Works() {
  const getCategory = () => {
    return Axios.get("/api/category").then((res) => res.data);
  };
  const { data, isLoading } = useQuery<CategoryWithWork[]>(
    ["category"],
    getCategory
  );

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div>
      {/*<MobileWorks categories={data!} />*/}
      <Index categories={data!} />
    </div>
  );
}

export default Works;
