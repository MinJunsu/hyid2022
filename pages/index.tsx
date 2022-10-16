import type { NextPage } from "next";
import Index from "../components/Desktop/work";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Category } from "@prisma/client";

const Home: NextPage = () => {
  const getCategory = () => {
    return Axios.get("/api/category").then((res) => res.data);
  };

  const { data, isLoading } = useQuery<Category[]>(["category"], getCategory);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div>
      <Index categories={data!} />
    </div>
  );
};

export default Home;
