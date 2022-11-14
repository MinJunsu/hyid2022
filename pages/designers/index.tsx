import axios from "axios";
import {
  dehydrate,
  DehydratedState,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import { Student } from "@prisma/client";
import Designer from "../../components/desktop/designer";

import type { NextPage } from "next";
import useMobile from "@hooks/mobile";
import MobileDesigner from "@components/mobile/designers";

const getStudent = () => {
  return axios.get("/api/students").then((res) => res.data);
};

interface ServerSideProps {
  dehydratedState: DehydratedState;
  keyword: string;
}

const DesignersPage: NextPage<ServerSideProps> = ({ keyword }, context) => {
  const mobile = useMobile();

  const { data, isLoading } = useQuery<Student[]>(["students"], getStudent);

  if (isLoading) {
    return <div></div>;
  }

  if (mobile) return <MobileDesigner students={data!} keyword={keyword} />;
  else return <Designer students={data!} />;
};

export async function getServerSideProps(context: {
  query: { keyword: string };
}) {
  // console.log(context);
  const keyword = context.query.keyword || null;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["students"], getStudent);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      keyword,
    },
  };
}

export default DesignersPage;
