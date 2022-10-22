import { useState } from "react";
import Image from "next/image";
import router from "next/router";
import { Category } from "@prisma/client";
import Nav from "../navbar/nav";

interface IndexProps {
  categories: Category[];
}

function Index({ categories }: IndexProps) {
  const [types, setTypes] = useState<number>(0);

  return (
    <div className="works px-[40px] py-[25px] bg-white cursor-works">
      <div>
        <Nav color="black" />
      </div>
      <div className="tabMenu flex items-center mt-[76px] mb-[53px] ">
        <div className=" flex space-x-[9px]">
          {categories?.map((category, index) => {
            return (
              <div key={index} className="description ">
                <p
                  onClick={() => {
                    setTypes(index);
                  }}
                  className={`h-[39px] rounded-[22px] text-center py-[6px] px-[18px] cursor-pointer border-[1px] border-[#DBDBDB] w-full ${
                    types === index
                      ? "bg-[#0649EC] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {category.name}
                  <span
                    className={`${
                      types === index ? "text-white" : "text-[#0649EC]"
                    } `}
                  >
                    80
                  </span>
                </p>
              </div>
            );
          })}
        </div>
        <div className="border-b-[1px] border-black w-[10000px] ml-[47px] mr-[37px] mt-[30px]" />
        <div className="flex justify-between space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30.405"
            height="30.405"
            viewBox="0 0 30.405 30.405"
          >
            <g
              id="그룹_371"
              data-name="그룹 371"
              transform="translate(-0.59 -0.59)"
              opacity="0.5"
            >
              <circle
                id="타원_92"
                data-name="타원 92"
                cx="11.387"
                cy="11.387"
                r="11.387"
                transform="translate(2.007 2.007)"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2.835"
              />
              <line
                id="선_89"
                data-name="선 89"
                x1="8.548"
                y1="8.548"
                transform="translate(21.445 21.445)"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2.835"
              />
            </g>
          </svg>
          <input
            placeholder="작업물을 검색하세요"
            type="text"
            className="focus:outline-none"
          />
        </div>
      </div>
      <div className="workList flex flex-wrap justify-between   ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((res, index) => {
          return (
            <div
              key={index}
              className=" w-[23%] hover:block group mb-7 relative"
              onClick={() => {
                router.push(`work/1`);
              }}
            >
              <Image
                src="/dummy/images/WorksImage.png"
                width={428}
                height={366}
                alt="workImage"
                className="hover:opacity-25 duration-300"
              />
              <div
                className={`summary absolute left-[30px] bottom-[30px] hidden group-hover:inline`}
              >
                <h2 className="text-[25px]">Breeze</h2>
                <p className="text-[20px]">이다빈</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
