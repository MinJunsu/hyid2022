import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Student } from "@prisma/client";
import Designer from "../../components/desktop/designer";

import type { NextPage } from "next";
import useMobile from "@hooks/mobile";
import MobileDesigner from "@components/mobile/designers";
import { useRouter } from "next/router";

const DesignersPage: NextPage = () => {
  const router = useRouter();
  const mobile = useMobile();
  const getStudent = () => {
    return axios.get("/api/students").then((res) => res.data);
  };

  const { data, isLoading } = useQuery<Student[]>(["students"], getStudent);

  if (isLoading) {
    return <div></div>;
  }

  if (mobile)
    return (
      <MobileDesigner
        students={data!}
        keyword={router.query.keyword as string}
      />
    );
  else return <Designer students={data!} />;
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default DesignersPage;
