import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import MobileDesignerDetail from "@components/mobile/designers/detail";
import { useRouter } from "next/router";
import { StudentWithWorksAndTags } from "@pages/api/students/[id]";
import type { NextPage } from "next";
import Designers from '@components/desktop/designer/[id]'



const DesignersDetailPage: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const getStudentWorks = () => {
    return axios.get(`/api/students/${id}`).then((res) => res.data);
  };

  const { data, isLoading } = useQuery<StudentWithWorksAndTags>(
    ["student", id],
    getStudentWorks
  );

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div>
      {/*<MobileDesignerDetail student={data!} />*/}
      <Designers student={data!} />
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default DesignersDetailPage;
