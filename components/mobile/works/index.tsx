import { CategoryWithWorks } from "@pages/api/category";
import { useEffect, useState } from "react";
import MobileCategory from "@components/mobile/works/category";
import InputBox from "@components/mobile/input-box";
import Header from "@components/mobile/header";
import Link from "next/link";
import Image from "next/image";

interface MobileWorksProps {
  categories: CategoryWithWorks[];
  keyword: string;
  isCategory: boolean;
}

function MobileWorks({ categories, keyword, isCategory }: MobileWorksProps) {
  const [isOpen, setIsOpen] = useState<boolean>(isCategory);
  const [keywordWorks, setKeywordWorks] = useState<CategoryWithWorks>();

  useEffect(() => {
    setKeywordWorks(
      categories.filter(
        (category) => category.name.toLowerCase() === keyword.toLowerCase()
      )[0]
    );
  }, [categories, keyword]);

  if (isOpen) {
    return (
      <MobileCategory
        categories={categories}
        setClose={() => setIsOpen(false)}
      />
    );
  }
  return (
    <div className="flex flex-col mx-10">
      <Header />
      <InputBox keyword="작업물" setWord={() => {}} />
      <div className="flex flex-row my-5 space-x-3 overflow-y-scroll scrollbar-hide">
        {categories.map((category, index) => {
          return (
            <Link
              key={index}
              href={`/works/?category=${category.name.toLowerCase()}`}
            >
              <div className="cursor-pointer">
                <div className="h-8 rounded-full border-gray-300 border-[1px] flex justify-center items-center">
                  <div className="m-2 flex flex-row">
                    <span className="uppercase">{category.name}</span>
                    &nbsp;&nbsp;
                    <span className="text-blue-500">
                      {category.works.length}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {keywordWorks?.works.map((work, index) => {
          if (!work.workThumbnailImage) {
            return <div key={index}></div>;
          }
          return (
            <Link href={`/works/${work.id}`} key={index}>
              <div className="flex flex-col cursor-pointer">
                <div key={index} className="w-full relative aspect-[154/131]">
                  <Image
                    src={work.workThumbnailImage!.image}
                    layout="fill"
                    objectFit="cover"
                    alt={work.title}
                  />
                </div>
                <div className="flex flex-col my-3 space-y-1">
                  <h2 className="flex justify-center items-center">
                    {work.title}
                  </h2>
                  <div className="flex flex-row space-x-2 flex justify-center items-center">
                    {work.students.map((student, index) => {
                      return (
                        <span key={index} className="text-sm text-[#707070]">
                          {student.student.nameKor}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MobileWorks;
