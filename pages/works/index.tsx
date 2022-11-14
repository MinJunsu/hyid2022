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
}

const getCategory = () => {
  return Axios.get("/api/category").then((res) => res.data);
};

const WorksPage: NextPage<ServerSideProps> = ({ category }, context) => {
  const mobile = useMobile();
  const isCategory = Boolean(category === "true");
  const keyword = category || "ALL";

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
        keyword={keyword}
        isCategory={isCategory}
      />
    );
  else return <Works categories={data!} isCategory={true} />;
};

export async function getServerSideProps(context: {
  query: { category: string };
}) {
  const category = context.query.category || null;
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
