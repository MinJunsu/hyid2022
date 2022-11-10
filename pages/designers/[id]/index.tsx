import Designers from "../../../components/Desktop/designer/[id]";
import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

function Index() {
  const router = useRouter();
  const id = router.query.id;

  const getStudentWorks = () => {
    return axios.get(`/api/students/${id}`).then((res) => res.data);
  };

  const { data, isLoading } = useQuery<any>(["students", id], getStudentWorks);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div>
      <Designers student={data!} />
    </div>
  );
}
// query id 새로고침 시 undefinded 방지

export default Index;
