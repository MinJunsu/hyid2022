import Designers from "../../../components/Desktop/designer/[id]";
import axios from "axios";
import router from "next/router";
import { useQuery } from "@tanstack/react-query";
import { Student } from "@prisma/client";

function Index() {
  const id = router.query.id;

  const getStudentWorks = () => {
    return axios.get(`/api/students/${id}`).then((res) => res.data);
  };

  const { data, isLoading } = useQuery<Student>(["students"], getStudentWorks);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div>
      <Designers student={data!} />
    </div>
  );
}

export default Index;
