import { useState, useEffect } from "react";
import Image from "next/image";
import router from "next/router";
import { Category } from "@prisma/client";
import Nav from "../navbar/nav";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

interface IndexProps {
  categories: Category[];
}
interface Close {
  modalState: boolean;
}

function Index({ categories }: IndexProps, { modalState }: Close) {
  const [types, setTypes] = useState<number>(0);
  // Modal 관련 State
  const [modal, setModal] = useState<boolean>(true);
  const setClose = () => {
    setModal(false);
  };
  // loading 바 관련 State
  const [loading, setLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 430);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className={`${loading ? "block" : "hidden"}`}>
        <Box sx={{ width: "100%" }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            color="inherit"
          />
        </Box>
      </div>
      <div
        className={`works px-[40px] py-[25px] bg-white cursor-works  ${
          modal ? "blur-lg" : null
        } `}
      >
        <div>
          <Nav color="black" />
        </div>
        <div className="tabMenu flex items-center mt-[76px] mb-[53px] cursor-pointer ">
          <div className=" flex space-x-[9px] ">
            {categories?.map((category, index) => {
              return (
                <div
                  onClick={() => setTypes(index)}
                  key={index}
                  className="description  "
                >
                  <p
                    className={`h-[39px] rounded-[22px] text-center py-[6px] px-[18px]  border-[1px] border-[#DBDBDB] w-full ${
                      types === index
                        ? "bg-[#0649EC] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {category.name.toUpperCase()}
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
        <div className="workList flex flex-wrap justify-between cursor-[url(/web/mouse/cursor.cur),_pointer]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((res, index) => {
            return (
              <div
                key={index}
                className=" w-[23%] hover:block group mb-7 relative "
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => router.push("/dummy"), 3000);
                }}
              >
                <Image
                  src="/dummy/images/WorksImage.png"
                  width={428}
                  height={366}
                  alt="workImage"
                  className={`${
                    modal ? null : "hover:opacity-25 duration-300"
                  } `}
                />
                <div
                  className={`summary absolute left-[30px] bottom-[30px] hidden group-hover:inline ${
                    modal ? "hidden" : null
                  }`}
                >
                  <h2 className="text-[25px]">Breeze</h2>
                  <p className="text-[20px]">이다빈</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`modal px-[43px] relative max-h-[10px] bottom-[140vh] ${
          modal ? null : "hidden"
        } `}
      >
        <div
          className="closeButton bg-white rounded-[5p%] w-[90px] h-[90px] flex items-center justify-center rounded-full float-right shadow-2xl  hover:scale-105"
          onClick={setClose}
        >
          <Image src="/web/icon/close.svg" width={40} height={40} alt="close" />
        </div>
        <div className=" flex flex-wrap max-w-[1000px]   ">
          {categories?.map((category, idx) => {
            return (
              <div key={idx} className="group relative">
                <div className="text-[105px]  flex">
                  <h2
                    onClick={() => {
                      setTypes(idx);
                      setModal(false);
                    }}
                    className="hover:text-[#0649EC] "
                  >
                    {category.name}{" "}
                  </h2>
                  <h2
                    className={`${
                      category.id === 13 ? "hidden" : null
                    } mx-[10px]`}
                  >
                    ,
                  </h2>
                </div>
                <div className="counter bg-[#0649EC] w-[90px] h-[62px] rounded-full absolute  opacity-80 text-center text-[39px] text-white group-hover:inline top-0 -right-0 hidden">
                  40
                </div>
              </div>
            );
          })}
        </div>
        <div className="total  ">
          <p className="text-[#E26748] font-extralight text-[60px] mt-[90px]">
            - 80 Works
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
