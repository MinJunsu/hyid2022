import Axios from "axios";
import Index from "../components/Desktop/work";
import { useQuery } from "@tanstack/react-query";
import { Category } from "@prisma/client";

function Works() {
  const getCategory = () => {
    return Axios.get("/api/category").then((res) => res.data);
  };
  const { data, isLoading } = useQuery<Category[]>(["category"], getCategory);
  return (
    <div>
      <Index categories={data!} />
    </div>
  );
}
export default Works;
