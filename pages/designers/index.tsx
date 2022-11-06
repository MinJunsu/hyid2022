import Designer from "../../components/Desktop/designer";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Student } from "@prisma/client";

function Index({ data }: any) {
  // const getStudent = () => {
  //   return axios.get("/api/students").then((res) => res.data);
  // };
  //
  // const { data, isLoading } = useQuery<Student[]>(["student"], getStudent);
  //
  // if (isLoading) {
  //   return <div></div>;
  // }

  return (
    <div>
      <Designer students={data!} />
    </div>
  );
}
export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/students");
  const data = await res.data;

  return { props: { data: data } };
}
export default Index;
