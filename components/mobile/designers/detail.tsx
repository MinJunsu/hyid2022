import Image from "next/image";
import Link from "next/link";
import Header from "@components/mobile/header";
import { StudentWithWorksAndTags } from "../../../type";

interface MobileDesignerDetailProps {
  student: StudentWithWorksAndTags;
}

const getNameFromBehance = (url: string | null) => {
  if (!url) return null;
  return url.split("https://www.behance.net/")[1];
};

function MobileDesignerDetail({ student }: MobileDesignerDetailProps) {
  const iterateWorkCategory = Array.from(
    new Set(student.works.map((work) => work.work.category.name))
  );

  return (
    <div className="flex flex-col mx-10">
      <Header />
      <div className="w-full aspect-[1/1.31] relative mb-12">
        <Image
          src={student?.profileImage!}
          layout="fill"
          objectFit="cover"
          priority
          alt="프로필 이미지"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">{student?.nameKor}</h1>
        <p className="text-lg">{student?.name}</p>
      </div>
      <div className="flex flex-row space-x-3 my-3 overflow-x-scroll scrollbar-hide">
        {student?.isManager && (
          <div className="px-3 py-2 rounded-full bg-[#0649EC] text-black cursor-pointer">
            <span className="whitespace-nowrap justify-center items-center text-sm text-white">
              졸준위
            </span>
          </div>
        )}
        {student?.tags.map((tag, index) => {
          return (
            <div
              className="w-full px-3 py-2 rounded-full bg-[#F2F2F2] text-black cursor-pointer flex-nowrap"
              key={index}
            >
              <span className="whitespace-nowrap flex justify-center items-center text-sm uppercase inline">
                {tag.tag.name}
              </span>
            </div>
          );
        })}
        {[...iterateWorkCategory].map((category, index) => {
          return (
            <div
              key={index}
              className="block px-3 py-2 rounded-full bg-[#F2F2F2] text-black cursor-pointer"
            >
              <span className="whitespace-nowrap flex justify-center items-center text-sm uppercase">
                {category}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-10">
        <span className="block text-base font-medium my-3">Contact</span>
        {student?.email && (
          <div className="flex flex-row">
            <span className="w-28 text-sm">E-mail</span>
            <a className="text-sm" href={`mailto:﻿"${student?.email}"`}>
              {student?.email}
            </a>
          </div>
        )}
        {student?.snsLink && (
          <div className="flex flex-row">
            <span className="w-28 text-sm">Instagram</span>
            <Link href={`https://instagram.com/_u/${student?.snsLink}/`}>
              <a className="text-sm">{student?.snsLink}</a>
            </Link>
          </div>
        )}
        {student?.webSite && (
          <div className="flex flex-row">
            <span className="w-28 text-sm">Behance</span>
            {student?.webSite && (
              <Link href={student?.webSite}>
                <a className="text-sm">
                  {getNameFromBehance(student?.webSite)}
                </a>
              </Link>
            )}
          </div>
        )}
      </div>
      <div className="mt-5 mb-14 grid grid-cols-2 gap-2">
        {student?.works.map((work, index) => {
          return (
            <Link key={index} href={`/works/${work.work.id}`}>
              <a className="block w-full relative aspect-[154/131]">
                <Image
                  src={work.work.workThumbnailImage!.image}
                  layout="fill"
                  objectFit="cover"
                  alt={work.work.title}
                  priority
                />
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MobileDesignerDetail;
