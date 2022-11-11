import { Student } from "@prisma/client";
import Header from "../header";
import Image from "next/image";

interface MobileDesignerDetailProps {
  student: Student;
}

function MobileDesignerDetail({ student }: MobileDesignerDetailProps) {
  return (
    <div className="flex flex-col mx-10">
      <Header />
      <Image
        src={student.profileImage!}
        width={320}
        height={418}
        layout="fixed"
      />
    </div>
  );
}

export default MobileDesignerDetail;
