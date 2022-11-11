import type { NextPage } from "next";
import useMobile from "../hooks/mobile";
import React from "react";
import MobileHome from "../components/mobile";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Index from "../components/Desktop/main/index";
// import { viewCount } from "./api";

const Home: NextPage = () => {
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

export default Home;
