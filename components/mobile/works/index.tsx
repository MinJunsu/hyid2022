import { CategoryWithWorks } from "@pages/api/category";
import { useState } from "react";
import MobileCategory from "@components/mobile/works/category";
import InputBox from "@components/mobile/input-box";
import Header from "@components/mobile/header";
import Link from "next/link";

interface MobileWorksProps {
  categories: CategoryWithWorks[];
  keyword: string;
  isCategory: boolean;
}

function MobileWorks({ categories, keyword, isCategory }: MobileWorksProps) {
  const [isOpen, setIsOpen] = useState<boolean>(isCategory);

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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return (
            <Link href={`/works/${item}`} key={index}>
              <div className="bg-black cursor-pointer aspect-[154/131]">
                asdfasdf
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MobileWorks;
