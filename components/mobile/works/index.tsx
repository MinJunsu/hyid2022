import { CategoryWithWork } from "../../../pages/api/category";
import { useEffect, useState } from "react";
import MobileCategory from "./category";
import Header from "../header";
import InputBox from "../input-box";
import { useRouter } from "next/router";

interface MobileWorksProps {
  categories: CategoryWithWork[];
}

function MobileWorks({ categories }: MobileWorksProps) {
  // TODO: Set Default Value false
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {}, [router]);
  console.log(router.query);

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
            <div
              className="cursor-pointer"
              key={index}
              onClick={() =>
                router.push("/works", {
                  query: {
                    category: category.name.toLowerCase(),
                  },
                })
              }
            >
              <div className="h-8 rounded-full border-gray-300 border-[1px] flex justify-center items-center">
                <div className="m-2 flex flex-row">
                  <span className="uppercase">{category.name}</span>
                  &nbsp;&nbsp;
                  <span className="text-blue-500">{category.works.length}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return (
            <div key={index} className="bg-black cursor-pointer w-48 h-36">
              asdfasdf
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MobileWorks;
