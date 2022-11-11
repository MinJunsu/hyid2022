import type { NextPage } from "next";
import useMobile from "../hooks/mobile";
import React from "react";
import Index from "@components/desktop";
// import { viewCount } from "./api";

const HomePage: NextPage = () => {
  const mobile = useMobile();

  // const getViewCount = () => {
  //   return axios.get("/api/").then((res) => res.data);
  // };
  // const { data, isLoading } = useQuery<viewCount>(["viewCount"], getViewCount);
  // console.log(data);
  // return <MobileHome />;

  return (
    <div className="WebView">
      <Index />
    </div>
  );
};

export default HomePage;
