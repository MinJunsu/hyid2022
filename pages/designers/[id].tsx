import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import MobileDesignerDetail from "@components/mobile/designers/detail";
import type { NextPage } from "next";
import Designers from "@components/desktop/designer/[id]";
import useMobile from "@hooks/mobile";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { StudentWithWorksAndTags } from "../../type";

// interface ServerSideProps {
//   dehydratedState: DehydratedState;
//   id: string;
// }

const getStudentWorks = (id: string) => {
  if (!id) return null;
  return axios
    .get(
      `https://3x2tglbd1a.execute-api.ap-northeast-2.amazonaws.com/prod/students/${id}`
    )
    .then((res) => res.data);
};

const DesignersDetailPage: NextPage = () => {
  const mobile = useMobile();
  const router = useRouter();
  const [id, setId] = useState<string>("");
  useEffect(() => {
    setId(router.query.id as string);
  }, [router.isReady, router.query.id]);

  const { data, isLoading } = useQuery<StudentWithWorksAndTags | null>(
    ["student", id],
    () => getStudentWorks(id)
  );

  if (!id) {
    return <div></div>;
  }

  if (isLoading) {
    return <div></div>;
  }

  if (mobile) return <MobileDesignerDetail student={data!} />;
  return <Designers student={data!} />;
};

// export async function getInitialProps(context: { params: { id: string } }) {
//   const id = context.params.id;
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery(["student", id], () => getStudentWorks(id));
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//       id,
//     },
//   };
// }

export default DesignersDetailPage;
