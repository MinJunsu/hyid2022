import Image from "next/image";
import { Student } from "@prisma/client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IndexProps {
  students: Student[];
}

function Designer({ students }: IndexProps) {
  const setting = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 1,
      //   },
      // },
    ],
  };

  return (
    <div className="bg-cover w-full h-[1080px]  bg-[url('/images/web/background/profile_background.png')] overflow-x-hidden">
      <div className="works px-[40px] py-[25px] ">
        <div className="Navbar flex items-center justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="122"
            height="79"
            viewBox="0 0 122 79"
          >
            <g
              id="그룹_430"
              data-name="그룹 430"
              transform="translate(-56 -42)"
            >
              <text
                id="ONGOJISIN"
                transform="translate(56 116)"
                fill="#fff"
                fontSize="22"
                fontFamily="WorkSans-Medium, Work Sans"
                fontWeight="500"
              >
                <tspan x="0" y="0">
                  ONGOJISIN
                </tspan>
              </text>
              <g
                id="그룹_259"
                data-name="그룹 259"
                transform="translate(76 42)"
              >
                <g
                  id="그룹_258"
                  data-name="그룹 258"
                  transform="translate(0 0)"
                >
                  <line
                    id="선_81"
                    data-name="선 81"
                    x2="80.56"
                    transform="translate(0 43.507)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="4"
                  />
                  <line
                    id="선_82"
                    data-name="선 82"
                    y1="43.507"
                    transform="translate(40.28)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="4"
                  />
                  <line
                    id="선_83"
                    data-name="선 83"
                    x1="29.832"
                    y1="31.076"
                    transform="translate(10.448 12.432)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="4"
                  />
                  <line
                    id="선_84"
                    data-name="선 84"
                    y1="31.076"
                    x2="29.832"
                    transform="translate(40.28 12.432)"
                    fill="none"
                    stroke="#fff"
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
                  stroke="#fff"
                  strokeWidth="4"
                />
                <line
                  id="선_86"
                  data-name="선 86"
                  x1="17.622"
                  y2="40.829"
                  transform="translate(40.28 2.679)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="4"
                />
                <line
                  id="선_87"
                  data-name="선 87"
                  x2="37.762"
                  y2="17.622"
                  transform="translate(2.517 25.885)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="4"
                />
                <line
                  id="선_88"
                  data-name="선 88"
                  x1="37.762"
                  y2="17.622"
                  transform="translate(40.28 25.885)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="4"
                />
              </g>
            </g>
          </svg>
          <div className="flex space-x-4 text-white">
            <p>WORKS</p>
            <p>DESIGNER</p>
          </div>
        </div>
      </div>

      <div className="relative top-[175px] left-[194px]">
        <div className="absolute left-20 bottom-8 animate-pulse">
          <Image
            src="/images/web/icon/design_star.png"
            height={77}
            width={77}
          />
        </div>
        <p className="text-white font-light">
          Click on the
          <br /> name of the designer
        </p>
      </div>
      <div className="relative -top-[64px] text-white -right-[751px]  ">
        <h2 className=" text-[28px]">Designers</h2>
        <div className="studentName flex flex-wrap items-center justify-start w-[950px]  ">
          {students?.map((student, index) => {
            return (
              <div key={index}>
                <p className="text-[18px] mr-[43px] mt-[15px] font-extralight w-[4vw] truncate text-center hover:underline cursor-pointer">
                  {student.nameKor}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-[50px]">
        <Slider {...setting}>
          {students?.map((student, index) => {
            return (
              <div key={index}>
                <div
                  className={`hover:w-[360px] hover:bg-white hover:text-center hover:h-[550px] hover:pt-[15px] text-white hover:text-blue-700`}
                >
                  <Image src={student.profileImage!} width={330} height={420} />
                  <div className="w-[360px]  mt-[20px] hover:w-[360px] ">
                    <p className="text-[25px] text-center">{student.nameKor}</p>
                    <p className="text-[20px] text-center">{student.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Designer;
