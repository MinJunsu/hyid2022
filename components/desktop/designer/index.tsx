import Image from "next/image";
import { Student } from "@prisma/client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import router from "next/router";
import Header from "@components/desktop/header";
import Head from "next/head";

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
    pauseOnFocus: true,
    autoplay: true,
    autoplaySpeed: 500,
    focusOnSelect: false,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1145,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <div className="bg-cover w-full h-full min-h-[100vh] bg-[url('/web/background/profile_background.png')] ">
      <Head>
        <title>HYID Designers</title>
      </Head>
      <div className="px-[40px] py-[20px]">
        <Header color="white" />
      </div>
      <div className="px-[40px] flex items-center ">
        <div className="leftContents w-[40%] relative top-20">
          <div className="animate-pulse absolute bottom-6 left-20  ">
            <Image
              src="/web/icon/design_star.png"
              height={77}
              width={77}
              alt="icon"
            />
          </div>
          <div>
            <p className="text-white font-light text-[18px]">
              Click on The <br /> name of the designer
            </p>
          </div>
        </div>
        <div className="rightContents text-white ">
          <h2 className=" text-[28px] ml-3">Designers</h2>
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
                        slider.current?.slickPlay();
                      }, 5000);
                    }}
                    className="flex justify-center min-w-[115px] text-[18px] mx-3 mt-[15px] font-extralight w-[5vw] truncate text-center hover:underline cursor-pointer"
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
                className="cursor-pointer "
                key={index}
                onClick={() => {
                  router.push(`designers/${student.id}`);
                }}
              >
                <div
                  className={`xl:w-[330px] xl:hover:w-[360px] lg:w-[300px] lg:w-[350px] hover:bg-white hover:text-center hover:h-[550px] hover:pt-[15px] transition  duration-1000 hover:text-blue-700 text-white `}
                >
                  <Image
                    className="transitions duration-500 ease-in-out transform hover:scale-110"
                    priority={true}
                    src={student.profileImage!}
                    width={330}
                    height={420}
                    alt="프로필 이미지"
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
