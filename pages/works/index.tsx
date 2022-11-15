import Axios from "axios";
import {
  dehydrate,
  DehydratedState,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import { CategoryWithWorks } from "@pages/api/category";
import type { NextPage } from "next";
import MobileWorks from "@components/mobile/works";
import useMobile from "@hooks/mobile";
import Works from "@components/desktop/works";

interface ServerSideProps {
  dehydratedState: DehydratedState;
  category: string;
  keyword: string;
}

const getCategory = () => {
  return Axios.get(
    "https://jqjb7fpthe.execute-api.ap-northeast-2.amazonaws.com/prod/category"
  ).then((res) => res.data);
};

const WorksPage: NextPage<ServerSideProps> = (
  { category, keyword },
  context
) => {
  const mobile = useMobile();
  const isCategory = Boolean(category === "true");
  const nowCategory = category?.toLowerCase() || "all";

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
        nowCategory={nowCategory}
        keyword={keyword}
        isCategory={isCategory}
      />
    );
  else return <Works categories={data!} />;
};

export async function getServerSideProps(context: {
  query: { category: string; keyword: string };
}) {
  const category = context.query.category || null;
  const keyword = context.query.keyword || null;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["category"], getCategory);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      category,
    },
  };
}

export default WorksPage;
