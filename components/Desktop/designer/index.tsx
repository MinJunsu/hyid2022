import Image from "next/image";
import { Student } from "@prisma/client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from "../navbar/nav";
import { useRef, useState } from "react";
import router from "next/router";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

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
    pauseOnHover: false,
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
    <div className="bg-cover w-full h-auto  bg-[url('/web/background/profile_background.png')] overflow-x-hidden">
      <div className="px-[40px] py-[20px]">
        <Nav color="white" />
      </div>

      <div className="relative top-[175px] left-[194px] ">
        <div className="absolute left-20 bottom-8 animate-pulse">
          <Image src="/web/icon/design_star.png" height={77} width={77} />
        </div>
        <p className="text-white font-light">
          Click on the
          <br /> name of the designer
        </p>
      </div>
      <div className="relative -top-[64px] text-white -right-[751px] w-[30vw]">
        <h2 className=" text-[28px]">Designers</h2>
        <div className="studentName flex flex-wrap items-center justify-start w-[950px]  ">
          {students?.map((student, index) => {
            return (
              <div key={index}>
                <p
                  onClick={() => {
                    slider.current?.slickGoTo(index);
                    slider.current?.slickPause();
                    setStudentId(student.id);

                    setTimeout(() => {
                      slider.current?.slickPlay();
                    }, 5000);
                  }}
                  className="text-[18px] mr-[43px] mt-[15px] font-extralight w-[4vw] truncate text-center hover:underline cursor-pointer"
                >
                  {student.nameKor}
                </p>
              </div>
            );
          })}
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
