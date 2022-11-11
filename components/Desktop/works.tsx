import { useState } from "react";
import Image from "next/image";

function WorksPage() {
  const [types, setTypes] = useState<number>(0);

  return (
    <div className="px-[40px] py-[25px] bg-white cursor-{works}">
      <div className="Navbar flex items-center justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="121"
          height="79"
          viewBox="0 0 121 79"
        >
          <g id="그룹_430" data-name="그룹 430" transform="translate(-56 -42)">
            <text
              id="ONGOJISIN"
              transform="translate(56 116)"
              fontSize="22"
              fontFamily="WorkSans-Medium, Work Sans"
              fontWeight="500"
            >
              <tspan x="0" y="0">
                ONGOJISIN
              </tspan>
            </text>
            <g id="그룹_259" data-name="그룹 259" transform="translate(76 42)">
              <g id="그룹_258" data-name="그룹 258" transform="translate(0 0)">
                <line
                  id="선_81"
                  data-name="선 81"
                  x2="80.56"
                  transform="translate(0 43.507)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="4"
                />
                <line
                  id="선_82"
                  data-name="선 82"
                  y1="43.507"
                  transform="translate(40.28)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="4"
                />
                <line
                  id="선_83"
                  data-name="선 83"
                  x1="29.832"
                  y1="31.076"
                  transform="translate(10.448 12.432)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="4"
                />
                <line
                  id="선_84"
                  data-name="선 84"
                  y1="31.076"
                  x2="29.832"
                  transform="translate(40.28 12.432)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="4"
                />
              </g>
              <line
                id="선_85"
                data-name="선 85"
                x2="17.622"
                y2="40.829"
                transform="translate(22.657 2.679)"
                fill="none"
                stroke="#000"
                strokeWidth="4"
              />
              <line
                id="선_86"
                data-name="선 86"
                x1="17.622"
                y2="40.829"
                transform="translate(40.28 2.679)"
                fill="none"
                stroke="#000"
                strokeWidth="4"
              />
              <line
                id="선_87"
                data-name="선 87"
                x2="37.762"
                y2="17.622"
                transform="translate(2.517 25.885)"
                fill="none"
                stroke="#000"
                strokeWidth="4"
              />
              <line
                id="선_88"
                data-name="선 88"
                x1="37.762"
                y2="17.622"
                transform="translate(40.28 25.885)"
                fill="none"
                stroke="#000"
                strokeWidth="4"
              />
            </g>
          </g>
        </svg>
        <div className="flex space-x-4">
          <p>WORKS</p>
          <p>DESIGNER</p>
        </div>
      </div>
      <div className="tabMenu flex items-center mt-[76px] mb-[53px] ">
        <div className=" flex space-x-[9px]">
          {["ALL", "PRODUCT", "BRANDING", "UX·UI", "MOBILITY", "SPATIAL"].map(
            (res, index) => {
              return (
                <div className="description" key={index}>
                  <p
                    onClick={() => {
                      setTypes(index);
                      // console.log(types, index);
                    }}
                    className={`h-[39px] rounded-[22px] text-center py-[6px] px-[18px] cursor-pointer border-[1px] border-[#DBDBDB] w-full ${
                      types === index
                        ? "bg-[#0649EC] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {res}
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
            }
          )}
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
              className=" w-[23%] hover:block group mb-7 relative"
              key={index}
            >
              <Image
                src="/dummy/images/WorksImage.png"
                width={428}
                height={366}
                alt="workImage"
                className="hover:opacity-25 duration-300"
              />
              <div
                className={`summary absolute left-[30px] bottom-[30px] hidden group-hover:inline  `}
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

export default WorksPage;
