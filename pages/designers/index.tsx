import Designer from "../../components/Desktop/designer";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Student } from "@prisma/client";

function Index() {
  const getStudent = () => {
    return axios.get("/api/students").then((res) => res.data);
  };

  const { data, isLoading } = useQuery<Student[]>(["student"], getStudent);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div>
      <Designer students={data!} />
    </div>
  );
}
export default Index;
