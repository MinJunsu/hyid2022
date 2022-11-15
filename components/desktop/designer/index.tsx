import Image from "next/image";
import { Student } from "@prisma/client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import router from "next/router";
import Header from "@components/desktop/header";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

interface IndexProps {
  students: Student[];
}

function Designer({ students }: IndexProps) {
  // 학생 Select State
  // console.log(students);

  const [studentId, setStudentId] = useState<number>(0);

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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
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
                          slider.current?.slickPause();
                          setTimeout(() => {
                            setStudentId(1000);
                          }, 4000);
                          setTimeout(() => {
                            slider.current?.slickPlay();
                          }, 5000);
                        }}
                        className={`flex justify-center min-w-[115px] text-[18px] mx-3 mt-[15px] font-extralight w-[5vw] truncate text-center active:underline visited:underline cursor-pointer
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
                    <div className="hover:bg-white m-2 hover:p-8">
                      <div
                        className={`max-h-[45vh] relative ${
                          student.id === studentId
                            ? "text-center  bg-white text-center pt-[15px] text-blue-700  "
                            : null
                        } hover:bg-white hover:text-center  transition  duration-1000 hover:text-blue-700 text-white `}
                        style={{
                          aspectRatio: "0.78",
                        }}
                      >
                        <div className="flex justify-center px-3">
                          <Image
                            className="transitions duration-500 ease-in-out transform hover:scale-110"
                            priority={true}
                            src={student.profileImage!}
                            layout="fill"
                            alt="프로필 이미지"
                          />
                        </div>

                        <div
                          className={`${studentId === student.id ? "" : null} `}
                        >
                          <p className="text-[25px] text-center">
                            {student.nameKor}
                          </p>
                          <p className="text-[20px] text-center">
                            {student.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Designer;
