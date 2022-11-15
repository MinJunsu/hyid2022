import axios from "axios";
import { DehydratedState, useQuery } from "@tanstack/react-query";
import { Student } from "@prisma/client";
import Designer from "../../components/desktop/designer";

import type { NextPage } from "next";
import useMobile from "@hooks/mobile";
import MobileDesigner from "@components/mobile/designers";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const getStudent = () => {
  return axios
    .get(
      "https://3x2tglbd1a.execute-api.ap-northeast-2.amazonaws.com/prod/students"
    )
    .then((res) => res.data);
};

interface ServerSideProps {
  dehydratedState: DehydratedState;
  keyword: string;
}

const DesignersPage: NextPage = () => {
  const mobile = useMobile();
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    setKeyword(router.query.keyword as string);
  }, [router.isReady, router.query.keyword]);

  const { data, isLoading } = useQuery<Student[]>(["students"], getStudent);

  if (isLoading) {
    return <div></div>;
  }

  if (mobile) return <MobileDesigner students={data!} keyword={keyword} />;
  else return <Designer students={data!} />;
};

// export async function getInitialProps(context: { query: { keyword: string } }) {
//   const keyword = context.query.keyword || "ALL";
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery(["students"], getStudent);
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//       keyword,
//     },
//   };
// }

export default DesignersPage;
