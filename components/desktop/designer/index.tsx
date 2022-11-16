import Image from "next/image";
import { Student } from "@prisma/client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import router from "next/router";
import Header from "@components/desktop/header";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";

interface IndexProps {
  students: Student[];
}

function Designer({ students }: IndexProps) {
  // 학생 Select State
  // console.log(students);

  const [studentId, setStudentId] = useState<number>(0);
  const [underLineStudentId, setUnderLineStudentId] = useState<number>(0);

  const slider = useRef<any>();

  const setting = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: true,
    autoplay: true,
    autoplaySpeed: 500,
    focusOnSelect: false,
    arrows: false,
    centerMode: true,
  };

  return (
    <div className="bg-cover w-full h-full min-h-[100vh] bg-[url('/web/background/design_back.jpeg')] ">
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
          <h2 className=" text-[28px] ml-10">Designers</h2>
          <div className="studentName grid grid-cols-11 justify-start  ">
            {students?.map((student, index) => {
              return (
                <div key={index}>
                  <p
                    onClick={() => {
                      slider.current?.slickGoTo(index);
                      setStudentId(student.id);
                      setUnderLineStudentId(student.id);
                      slider.current?.slickPause();
                      setTimeout(() => {
                        setStudentId(-1);
                        slider.current?.slickPlay();
                      }, 10000);
                    }}
                    className={`${
                      student.id === underLineStudentId &&
                      "underline font-[400]"
                    } flex justify-center min-w-[115px] text-[18px] mx-3 mt-[15px] font-extralight w-[5vw] truncate text-center cursor-pointer
                    ${student.id === 34 ? "ml-11" : null}`}
                  >
                    {student.nameKor}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-[50px] ">
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
                  className={`${
                    student.id === studentId && "bg-white text-blue-700"
                  } text-white bg-transparent hover:bg-white p-3 m-2 pb-24 hover:text-blue-700`}
                >
                  <div
                    className={`bg-transparent flex m-auto flex-col  max-h-[45vh] relative transition  duration-1000 hover:text-blue-700`}
                    style={{
                      aspectRatio: "0.78",
                    }}
                  >
                    <div className="w-full flex justify-center m-auto">
                      <Image
                        className="transitions duration-500 ease-in-out transform hover:scale-110"
                        priority={true}
                        src={student.profileImage!}
                        layout="fill"
                        alt="프로필 이미지"
                      />
                    </div>
                    <div className="absolute w-full -bottom-20 flex flex-col">
                      <p className=" text-xl text-center font-bold mb-1">
                        {student.nameKor}
                      </p>
                      <p className="text-lg text-center">{student.name}</p>
                    </div>
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
