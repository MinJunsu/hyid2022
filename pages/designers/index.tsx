import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Student } from "@prisma/client";
import MobileDesigner from "../../components/mobile/designers";

function Index() {
  const getStudent = () => {
    return axios.get("/api/students").then((res) => res.data);
  };

  const { data, isLoading } = useQuery<Student[]>(["students"], getStudent);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div>
      <MobileDesigner students={data!} />
      {/*<Designer students={data!} />*/}
    </div>
  );
}

export default Index;
