import type { NextPage } from "next";
import useMobile from "../hooks/mobile";
import React from "react";
import Home from "@components/desktop";
import MobileHome from "@components/mobile";
import axios from "axios";
import {
  dehydrate,
  DehydratedState,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import { ViewCount } from "../type";

const getViewCount = () => {
  return axios
    .get("https://3x2tglbd1a.execute-api.ap-northeast-2.amazonaws.com/prod")
    .then((res) => res.data);
};

interface ServerSideProps {
  dehydratedState: DehydratedState;
}

const HomePage: NextPage<ServerSideProps> = () => {
  const mobile = useMobile();

  const { data, isLoading } = useQuery<ViewCount>(["viewCount"], getViewCount);

  if (isLoading) {
    return <div></div>;
  }

  if (mobile) return <MobileHome viewCount={data!} />;
  else return <Home viewCount={data!} />;
};

export async function getInitialProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["viewCount"], getViewCount);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default HomePage;
