import type { NextPage } from "next";
import useMobile from "@hooks/mobile";
import MobileWorkDetail from "@components/mobile/works/detail";
import WorksDetail from "@components/desktop/works/[id]";
import Axios from "axios";
import axios from "axios";
import {
  dehydrate,
  DehydratedState,
  QueryClient,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { WorkWithStudentsAndImages } from "@pages/api/works/[id]";

interface ServerSideProps {
  dehydratedState: DehydratedState;
  id: string;
}

const getWork = (id: string) => {
  return Axios.get(
    `https://jqjb7fpthe.execute-api.ap-northeast-2.amazonaws.com/prod/works/${id}`
  ).then((res) => res.data);
};

const getLike = (id: string) => {
  return axios
    .get(
      `https://jqjb7fpthe.execute-api.ap-northeast-2.amazonaws.com/prod/works/${id}/like`
    )
    .then((res) => res.data);
};

export interface Like {
  isLiked: boolean;
  likeCount: number;
}

const WorksDetailPage: NextPage<ServerSideProps> = ({ id }, context) => {
  const mobile = useMobile();
  const queryClient = new QueryClient();

  const { data: work, isLoading: workLoading } =
    useQuery<WorkWithStudentsAndImages>(["work", id], () => getWork(id));

  const { data: workLike, isLoading: workLikeLoading } = useQuery<Like>(
    ["like", id],
    () => getLike(id)
  );

  const mutation = useMutation(
    (id: number) =>
      fetch(
        `https://jqjb7fpthe.execute-api.ap-northeast-2.amazonaws.com/prod/works/${id}/like/create`
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["like", id]);
      },
    }
  );

  if (workLike && workLikeLoading) {
    return <div></div>;
  }

  if (mobile)
    return (
      <MobileWorkDetail work={work!} like={workLike!} mutation={mutation} />
    );
  else return <WorksDetail work={work!} like={workLike!} mutation={mutation} />;
};

export async function getServerSideProps(context: { params: { id: string } }) {
  const id = context.params.id;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["work", id], () => getWork(id));
  await queryClient.prefetchQuery(["like", id], () => getLike(id));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id,
    },
  };
}

export default WorksDetailPage;
