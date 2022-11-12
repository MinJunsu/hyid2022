import type { NextPage } from "next";
import useMobile from "../hooks/mobile";
import React from "react";
import Home from "@components/desktop";
import MobileHome from "@components/mobile";
// import { viewCount } from "./api";

const HomePage: NextPage = () => {
  const mobile = useMobile();

  if (mobile) return <MobileHome />;
  else return <Home />;
};

export default HomePage;
