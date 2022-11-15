import Axios from "axios";
import { DehydratedState, useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import MobileWorks from "@components/mobile/works";
import useMobile from "@hooks/mobile";
import Works from "@components/desktop/works";
import { CategoryWithWorks } from "../../type";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface ServerSideProps {
  dehydratedState: DehydratedState;
  category: string;
  keyword: string;
}

const getCategory = () => {
  return Axios.get(
    "https://3x2tglbd1a.execute-api.ap-northeast-2.amazonaws.com/prod/category"
  ).then((res) => res.data);
};

const WorksPage: NextPage<ServerSideProps> = () => {
  const mobile = useMobile();
  const router = useRouter();
  const [isCategory, setIsCategory] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("all");
  const [keyword, setKeyword] = useState<string>("");
  useEffect(() => {
    setIsCategory(router.query.category === "true");
    setCategory(router.query.category as string);
  }, [router.isReady, router.query.category]);

  useEffect(() => {
    setKeyword(router.query.keyword as string);
  }, [router.isReady, router.query.keyword]);

  const { data, isLoading } = useQuery<CategoryWithWorks[]>(
    ["category"],
    getCategory
  );

  if (isLoading) {
    return <div></div>;
  }

  if (mobile)
    return (
      <MobileWorks
        categories={data!}
        nowCategory={category}
        keyword={keyword}
        isCategory={isCategory}
      />
    );
  else return <Works categories={data!} />;
};

// export async function getInitialProps(context: {
//   query: { category: string; keyword: string };
// }) {
//   const category = context.query.category || null;
//   const keyword = context.query.keyword || null;
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery(["category"], getCategory);
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//       category,
//     },
//   };
// }

export default WorksPage;
