import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CategoryWithWorks } from "@pages/api/category";
import type { NextPage } from "next";
import MobileWorks from "@components/mobile/works";
import useMobile from "@hooks/mobile";
import Works from "@components/desktop/works";
import { useRouter } from "next/router";

const WorksPage: NextPage = () => {
  const router = useRouter();
  const isCategory = Boolean((router.query.category as string) === "true");
  const keyword = (router.query.keyword as string) || "ALL";
  const mobile = useMobile();
  const getCategory = () => {
    return Axios.get("/api/category").then((res) => res.data);
  };
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
  else return <Works categories={data!} />;
};

function getServerSideProps() {
  return {
    props: {},
  };
}

export default WorksPage;
