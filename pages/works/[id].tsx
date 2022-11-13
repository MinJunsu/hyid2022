import { useRouter } from "next/router";
import type { NextPage } from "next";
import useMobile from "@hooks/mobile";
import MobileWorkDetail from "@components/mobile/works/detail";
import WorksDetail from "@components/desktop/works/[id]";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { WorkWithStudentsAndImages } from "@pages/api/works/[id]";

const WorksDetailPage: NextPage = () => {
  const mobile = useMobile();
  const router = useRouter();
  const { id } = router.query;

  const getWork = () => {
    return Axios.get(`/api/works/${id}`).then((res) => res.data);
  };
  const { data, isLoading } = useQuery<WorkWithStudentsAndImages>(
    ["work", id],
    getWork
  );

  if (isLoading) {
    return <div></div>;
  }

  if (mobile) return <MobileWorkDetail work={data!} />;
  else return <WorksDetail />;
};

function getServerSideProps() {
  return {
    props: {},
  };
}

export default WorksDetailPage;
