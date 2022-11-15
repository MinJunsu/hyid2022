import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Header from "@components/desktop/header";
import { CategoryWithWorks } from "@pages/api/category";
import Head from "next/head";

interface IndexProps {
  categories: CategoryWithWorks[];
}

interface Close {
  modalState: boolean;
}

function Works({ categories }: IndexProps, { modalState }: Close) {
  const router = useRouter();

  const [types, setTypes] = useState<number>(0);
  // Modal 관련 State
  const [modal, setModal] = useState<boolean>(false);
  const setClose = () => {
    setModal(false);
  };
  const OpenModal = () => {
    setModal(true);
  };

  // 검색 기능 State
  const [search, setSearch] = useState<string>("");

  // loading 바 관련 State
  const [loading, setLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (router.query.query !== "false") {
      setModal(true);
    }
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
    <div className={`${modal ? "overflow-y-hidden h-[100vh]" : null}`}>
      <Head>
        <title>HYID Works</title>
      </Head>
      <div className={`${loading ? "block" : "hidden"}`}>
        <Box sx={{ width: "100%" }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      </div>
      <div
        className={`works px-[40px] py-[25px] bg-white cursor-works  ${
          modal ? "blur-xl" : null
        } `}
      >
        <div>
          <Header color="black" />
        </div>
        <div className="tabMenu flex items-center mt-[76px] mb-[53px] cursor-pointer ">
          <div className=" flex space-x-[9px] ">
            {categories?.map((category, index) => {
              return (
                <div
                  onClick={() => setTypes(index)}
                  key={index}
                  className="description"
                >
                  <p
                    onClick={() => {
                      setTypes(index);
                    }}
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
                      &nbsp;
                      {category.works.length}
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
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div
          className={`workList grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3  ${
            modal ? null : "cursor-[url(/web/mouse/cursor.cur),_pointer"
          }`}
        >
          {categories[types]?.works?.map((res, index) => {
            if (search === "") {
              return (
                <div
                  key={index}
                  className=" w-full hover:block group mb-7 relative p-4 aspect-[428/365] cursor-pointer"
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => {
                      router.push(`/works/${res.id}`);
                    }, 2000);
                  }}
                >
                  <div className={`group-hover:opacity-25 duration-300`}>
                    <Image
                      src={res.workThumbnailImage?.image!}
                      alt="workImage"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  <div
                    className={`summary absolute left-[30px] bottom-[30px] hidden group-hover:inline ${
                      modal ? "hidden" : null
                    }`}
                  >
                    <h2 className="text-[20px]">{res.title}</h2>
                    {res.students?.map((student, index) => {
                      return (
                        <div key={index}>
                          <p className="text-[15px] font-extralight">
                            {student.student.nameKor}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            } else {
              if (res.title.toLowerCase().includes(search.toLowerCase())) {
                return (
                  <div
                    key={index}
                    className=" w-full hover:block group mb-7 relative p-4 aspect-[428/365] cursor-pointer"
                    onClick={() => {
                      setLoading(true);
                      router.push(`/works/${res.id}`);
                    }}
                  >
                    <div className={`group-hover:opacity-25 duration-300`}>
                      <Image
                        src={res.workThumbnailImage?.image!}
                        alt="workImage"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>

                    <div
                      className={`summary absolute left-[30px] bottom-[30px] hidden group-hover:inline ${
                        modal ? "hidden" : null
                      }`}
                    >
                      <h2 className="text-[20px]">{res.title}</h2>
                      {res.students?.map((student, index) => {
                        return (
                          <div key={index}>
                            <p className="text-[15px] font-extralight">
                              {student.student.nameKor}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }
            }
          })}
        </div>
      </div>

      {/* 모달 창 */}

      <div
        className={`modal px-[43px] absolute top-0  cursor-pointer w-full ${
          modal ? null : "hidden"
        }  `}
      >
        <div
          className="closeButton bg-white rounded-[5p%] w-[90px] h-[90px] flex items-center justify-center rounded-full float-right shadow-2xl  hover:scale-105"
          onClick={setClose}
        >
          <Image src="/web/icon/close.svg" width={40} height={40} alt="close" />
        </div>
        <div className=" flex flex-wrap max-w-[1000px]   ">
          {categories?.map((category, idx) => {
            // console.log(category);
            return (
              <div key={idx} className="group relative ">
                <div className="text-[105px] flex pointer-cursor ">
                  <h2
                    onClick={() => {
                      setTypes(idx);
                      setModal(false);
                    }}
                    className="group-hover:text-[#0649EC] "
                  >
                    {category.name}
                  </h2>
                  <h2
                    className={`${
                      category.id === 6 ? "hidden" : null
                    } mx-[10px]`}
                  >
                    ,
                  </h2>
                </div>
                <div className="counter bg-[#0649EC] w-[90px] h-[62px] rounded-full absolute  opacity-80 text-center text-[39px] text-white group-hover:inline top-0 -right-0 hidden">
                  {category.works.length}
                </div>
              </div>
            );
          })}
        </div>
        <div className="total  ">
          <p className="text-[#E26748] font-extralight text-[60px] mt-[90px]">
            - {categories[0].works.length} Works
          </p>
        </div>
      </div>
    </div>
  );
}

export default Works;
