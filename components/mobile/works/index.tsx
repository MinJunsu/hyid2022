import { CategoryWithWorks } from "@pages/api/category";
import { useEffect, useState } from "react";
import MobileCategory from "@components/mobile/works/category";
import InputBox from "@components/mobile/input-box";
import Header from "@components/mobile/header";
import Link from "next/link";
import Image from "next/image";

interface MobileWorksProps {
  categories: CategoryWithWorks[];
  nowCategory: string;
  keyword: string;
  isCategory: boolean;
}

function MobileWorks({
  categories,
  nowCategory,
  isCategory,
}: MobileWorksProps) {
  const [isOpen, setIsOpen] = useState<boolean>(isCategory);
  const [categoryWorks, setCategoryWorks] = useState<CategoryWithWorks>();
  const [keywordWorks, setKeywordWorks] = useState<CategoryWithWorks>();
  const [iterWorks, setIterWorks] = useState<CategoryWithWorks>();
  const [keyword, setKeyword] = useState<string>("");
  const [isKeyword, setIsKeyword] = useState<boolean>(false);

  useEffect(() => {
    setIsKeyword(false);
    setCategoryWorks(
      categories.filter(
        (category) => category.name.toLowerCase() === nowCategory
      )[0]
    );
  }, [categories, nowCategory]);

  useEffect(() => {
    setIsKeyword(true);
    setKeywordWorks({
      ...categories[0],
      works: categories[0].works.filter((work) =>
        work.title.toLowerCase().includes(keyword.toLowerCase())
      ),
    });
  }, [categories, keyword]);

  useEffect(() => {
    setIterWorks(isKeyword ? keywordWorks : categoryWorks);
  }, [categoryWorks, isKeyword, keywordWorks]);

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
      <InputBox keyword="작업물" setWord={setKeyword} />
      <div className="flex flex-row my-5 space-x-3 overflow-y-scroll scrollbar-hide">
        {categories.map((category, index) => {
          return (
            <Link
              key={index}
              href={`/works/?category=${category.name.toLowerCase()}`}
            >
              <div className="cursor-pointer">
                <div
                  className={`h-8 rounded-full border-gray-300 border-[1px] flex justify-center items-center ${
                    category.name.toLowerCase() === nowCategory &&
                    "bg-[#0649EC]"
                  }`}
                >
                  <div
                    className={`m-2 flex flex-row justify-center items-center`}
                  >
                    <span
                      className={`uppercase flex items-center justify-center ${
                        category.name.toLowerCase() === nowCategory &&
                        "text-white"
                      }`}
                    >
                      {category.name}
                    </span>
                    &nbsp;&nbsp;
                    <span
                      className={`${
                        category.name.toLowerCase() === nowCategory
                          ? "text-white"
                          : "text-[#0649EC]"
                      }`}
                    >
                      {category.works.length}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-2 mb-16">
        {iterWorks?.works.length === 0 && (
          <div className="w-full flex  flex-col justify-center items-center">
            <span>해당 키워드에 맞는 게시물이 존재하지 않습니다.</span>
          </div>
        )}
        {iterWorks?.works.map((work, index) => {
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
                    priority
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
