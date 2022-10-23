import Image from "next/image";
import { Student } from "@prisma/client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from "../navbar/nav";

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
    ],
  };

  return (
    <div className="bg-cover w-full h-auto  bg-[url('/web/background/profile_background.png')] overflow-x-hidden">
      <div className="px-[40px] py-[20px]">
        <Nav color="white" />
      </div>

      <div className="relative top-[175px] left-[194px]">
        <div className="absolute left-20 bottom-8 animate-pulse">
          <Image src="/web/icon/design_star.png" height={77} width={77} />
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
      <div className="mt-[50px] pb-[200px]">
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
