import Image from "next/image";
import { StudentWithWorksAndTags } from "@pages/api/students/[id]";
import Link from "next/link";
import Header from "@components/mobile/header";

interface MobileDesignerDetailProps {
  student: StudentWithWorksAndTags;
}

const getNameFromBehance = (url: string | null) => {
  if (!url) return null;
  return url.split("https://www.behance.net/")[1];
};

function MobileDesignerDetail({ student }: MobileDesignerDetailProps) {
  return (
    <div className="flex flex-col mx-10">
      <Header />
      <div className="w-full aspect-[1/1.31] relative mb-12">
        <Image src={student.profileImage!} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">{student.nameKor}</h1>
        <p className="text-xl">{student.name}</p>
      </div>
      <div className="flex flex-row space-x-3 my-3">
        {student.isManager && (
          <div className="px-3 py-2 rounded-full bg-[#0649EC] text-black cursor-pointer">
            <span className="flex justify-center items-center text-sm text-white">
              졸준위
            </span>
          </div>
        )}
        {student.tags.map((tag, index) => {
          return (
            <div
              className="px-3 py-2 rounded-full bg-[#F2F2F2] text-black cursor-pointer"
              key={index}
            >
              <span className="flex justify-center items-center text-sm uppercase">
                {tag.tag.name}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-10">
        <span className="block text-lg my-3">Contact</span>
        <div className="flex flex-row">
          <span className="w-28">E-mail</span>
          <a href={`mailto:﻿"${student.email}"`}>{student.email}</a>
        </div>
        <div className="flex flex-row">
          <span className="w-28">Instagram</span>
          <Link href={`https://instagram.com/_u/${student.snsLink}/`}>
            <a>{student.snsLink}</a>
          </Link>
        </div>
        <div className="flex flex-row">
          <span className="w-28">Behance</span>
          {student.webSite && (
            <Link href={student.webSite}>
              <a>{getNameFromBehance(student.webSite)}</a>
            </Link>
          )}
        </div>
      </div>
      <div className="my-10 flex flex-row gap-2">
        {[0, 1].map((item, index) => {
          return (
            <div className="w-1/2" key={index}>
              <div className="bg-gray-500 aspect-[154/131]"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MobileDesignerDetail;
