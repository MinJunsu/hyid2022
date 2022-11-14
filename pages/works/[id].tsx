import type { NextPage } from "next";
import useMobile from "@hooks/mobile";
import MobileWorkDetail from "@components/mobile/works/detail";
import WorksDetail from "@components/desktop/works/[id]";
import Axios from "axios";
import {
  dehydrate,
  DehydratedState,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import { WorkWithStudentsAndImages } from "@pages/api/works/[id]";

interface ServerSideProps {
  dehydratedState: DehydratedState;
  id: string;
}

const getWork = (id: string) => {
  return Axios.get(`/api/works/${id}`).then((res) => res.data);
};

const WorksDetailPage: NextPage<ServerSideProps> = ({ id }, context) => {
  const mobile = useMobile();

  const { data, isLoading } = useQuery<WorkWithStudentsAndImages>(
    ["work", id],
    () => getWork(id)
  );

  if (isLoading) {
    return <div></div>;
  }

  if (mobile) return <MobileWorkDetail work={data!} />;
  else return <WorksDetail work={data!} />;
};

export async function getServerSideProps(context: { params: { id: string } }) {
  const id = context.params.id;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["work", id], () => getWork(id));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id,
    },
  };
}

export default WorksDetailPage;
