import axios from "axios";
import {
  dehydrate,
  DehydratedState,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import MobileDesignerDetail from "@components/mobile/designers/detail";
import { StudentWithWorksAndTags } from "@pages/api/students/[id]";
import type { NextPage } from "next";
import Designers from "@components/desktop/designer/[id]";
import useMobile from "@hooks/mobile";

interface ServerSideProps {
  dehydratedState: DehydratedState;
  id: string;
}

const getStudentWorks = (id: string) => {
  return axios.get(`/api/students/${id}`).then((res) => res.data);
};

const DesignersDetailPage: NextPage<ServerSideProps> = ({ id }) => {
  const mobile = useMobile();

  const { data, isLoading } = useQuery<StudentWithWorksAndTags>(
    ["student", id],
    () => getStudentWorks(id)
  );

  if (isLoading) {
    return <div></div>;
  }

  if (mobile) return <MobileDesignerDetail student={data!} />;
  return <Designers student={data!} />;
};

export async function getServerSideProps(context: { params: { id: string } }) {
  const id = context.params.id;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["student", id], () => getStudentWorks(id));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id,
    },
  };
}

export default DesignersDetailPage;
