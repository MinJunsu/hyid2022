import type { NextPage } from "next";
import useMobile from "@hooks/mobile";
import MobileWorkDetail from "@components/mobile/works/detail";
import WorksDetail from "@components/desktop/works/[id]";
import Axios from "axios";
import axios from "axios";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { WorkWithStudentsAndImages } from "@pages/api/works/[id]";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// interface ServerSideProps {
//   dehydratedState: DehydratedState;
//   id: string;
// }

const getWork = (id: string) => {
  if (!id) return null;
  return Axios.get(
    `https://3x2tglbd1a.execute-api.ap-northeast-2.amazonaws.com/prod/works/${id}`
  ).then((res) => res.data);
};

export interface Like {
  isLiked: boolean;
  likeCount: number;
}

const getLike = (id: string) => {
  if (!id) return { isLiked: false, likeCount: 0 };
  return axios
    .get(
      `https://3x2tglbd1a.execute-api.ap-northeast-2.amazonaws.com/prod/works/${id}/like`
    )
    .then((res) => res.data);
};

const WorksDetailPage: NextPage = () => {
  const mobile = useMobile();
  const queryClient = new QueryClient();
  const router = useRouter();
  const [id, setId] = useState<string>("");
  useEffect(() => {
    setId(router.query.id as string);
  }, [router.isReady, router.query.id]);

  const { data: work, isLoading: workLoading } =
    useQuery<WorkWithStudentsAndImages | null>(["work", id], () => getWork(id));

  const { data: workLike, isLoading: workLikeLoading } = useQuery<Like>(
    ["like", id],
    () => getLike(id)
  );

  const mutation = useMutation(
    (id: number) =>
      fetch(
        `https://3x2tglbd1a.execute-api.ap-northeast-2.amazonaws.com/prod/works/${id}/like/create`
      ),
    {
      onMutate: () => {
        queryClient.refetchQueries(["like", id]);
      },
    }
  );

  if (!id) {
    return <div></div>;
  }

  if (workLike && workLikeLoading) {
    return <div></div>;
  }

  if (mobile)
    return (
      <MobileWorkDetail work={work!} like={workLike!} mutation={mutation} />
    );
  else return <WorksDetail work={work!} like={workLike!} mutation={mutation} />;
};

// export async function getInitialProps(context: { params: { id: string } }) {
//   const id = context.params.id;
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery(["work", id], () => getWork(id));
//   await queryClient.prefetchQuery(["like", id], () => getLike(id));
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//       id,
//     },
//   };
// }

export default WorksDetailPage;
