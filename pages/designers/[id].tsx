import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Student } from "@prisma/client";
import MobileDesignerDetail from "../../components/mobile/designers/detail";
import { useRouter } from "next/router";

function DesignerDetail() {
  const router = useRouter();
  const id = router.query.id;

  const getStudentWorks = () => {
    return axios.get(`/api/students/${id}`).then((res) => res.data);
  };

  const { data, isLoading } = useQuery<Student>(
    ["student", id],
    getStudentWorks
  );

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div>
      <MobileDesignerDetail student={data!} />
      {/*<Designers student={data!} />*/}
    </div>
  );
}

export default DesignerDetail;
