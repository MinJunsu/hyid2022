import Image from "next/image";
import { Student } from "@prisma/client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import router from "next/router";
import Header from "@components/desktop/header";

interface IndexProps {
  students: Student[];
}

function Designer({ students }: IndexProps) {
  // 학생 Select State

  const [studentId, setStudentId] = useState<number>(0);

  const slider = useRef<any>();

  const setting = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: false,
    autoplay: true,
    autoplaySpeed: 2500,
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
    ],
  };

  return (
    <div className="bg-cover w-full h-auto  bg-[url('/web/background/profile_background.png')] ">
      <div className="px-[40px] py-[20px]">
        <Header color="white" />
      </div>
      <div className="px-[40px] flex items-center ">
        <div className="leftContents w-[40%] relative top-20">
          <div className="animate-pulse absolute bottom-6 left-20  ">
            <Image src="/web/icon/design_star.png" height={77} width={77} />
          </div>
          <div>
            <p className="text-white font-light text-[18px]">
              Click on The <br /> name of the designer
            </p>
          </div>
        </div>
        <div className="rightContents text-white ">
          <h2 className=" text-[28px]">Designers</h2>
          <div className="studentName grid grid-cols-11  ">
            {students?.map((student, index) => {
              return (
                <div key={index}>
                  <p
                    onClick={() => {
                      slider.current?.slickGoTo(index);
                      setStudentId(student.id);
                      slider.current?.slickPause();
                      setTimeout(() => {
                        setStudentId(10000);
                      }, 8000);
                      setTimeout(() => {
                        slider.current?.slickPlay();
                      }, 5000);
                    }}
                    className="text-[18px] mr-[43px] mt-[15px] font-extralight w-[5vw] truncate text-center hover:underline cursor-pointer"
                  >
                    {student.nameKor}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-[50px] pb-[200px]">
        <Slider ref={slider} {...setting}>
          {students?.map((student, index) => {
            return (
              <div
                className="cursor-pointer"
                key={index}
                onClick={() => {
                  router.push(`designers/${student.id}`);
                }}
              >
                <div
                  className={`hover:w-[360px] hover:bg-white hover:text-center hover:h-[550px] hover:pt-[15px]  hover:text-blue-700 text-white ${
                    studentId === student.id
                      ? "w-[360px] bg-white text-center h-[550px] pt-[15px]  text-blue-700"
                      : "text-white"
                  }`}
                >
                  <Image
                    priority={true}
                    src={student.profileImage!}
                    width={330}
                    height={420}
                  />
                  <div
                    className={`w-[360px]  mt-[20px]  ${
                      studentId === student.id ? "w-[360px]" : null
                    } `}
                  >
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
