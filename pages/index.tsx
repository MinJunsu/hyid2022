import type { NextPage } from "next";
import useMobile from "../hooks/mobile";
import Image from "next/image";
import Nav from "../components/Desktop/navbar/nav";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import router from "next/router";
import React, { useState } from "react";

const Home: NextPage = () => {
  const mobile = useMobile();
  // return <MobileHome/>;

  const setting = {
    dots: false,
    infinite: true,
    speed: 3000,
    fade: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const [dot, setDot] = useState<number>(0);

  return (
    <div className="webView">
      <div className="section1">
        <div className="bg-[url('/images/web/background/web_main_banner_1_gif.gif')] bg-cover bg-center h-[100vh] px-[40px] py-[20px]">
          <Nav color="white" />
        </div>
      </div>

      <div className="section2">
        {" "}
        <div className="second bg-[url('/images/web/background/web_main_2_gif.gif')] bg-cover bg-center h-[100vh] flex flex-col">
          <div className="flex justify-center ml-[100px]">
            <Image
              src="/images/web/icon/main_icon.svg"
              width={299}
              height={361}
            />
          </div>
          <div className="flex-col text-white justify-center flex w-full text-center">
            <p className="text-[44px] font-normal">온고지신</p>
            <p className="text-[33px] font-extralight"> 溫故知新 </p>
            <p className="mt-[10vh] text-[22px] font-extralight">
              서당 개 3년이면 풍월을 읊는다고 하였습니다.
              <br /> 우리는 4년이라는 긴 시간 동안 교수님의 어깨 너머로 배운
              것들을 스스로 깨닫고, <br />
              산업 디자인과라는 일련의 과정 속에서 찾아낸 색으로 우리의 미래를
              표현해 보고자 합니다.
            </p>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="third bg-[url('/images/web/background/web_main_3_gif.gif')]  bg-cover bg-center h-[100vh] text-white  ">
          <div className="flex-col justify-center text-center items-center relative top-[30vh] ">
            <h2 className="text-[30px] mb-10">각자의 방식으로 미래를 그리다</h2>
            <Image
              src="/images/web/icon/design_star.png"
              width={77}
              height={77}
            />
            <p className="text-[22px] mt-10 font-extralight">
              2022 한양대학교 산업디자인학과 졸업 전시 '온고지신'은
              <br />
              학생이라는 신분에서 배워 온 많은 것들을 몸으로 익히고,
              <br />
              학교 밖을 벗어나 자신만의 새로운 미래를 만들어가는 전환점이 될
              것입니다.
            </p>
          </div>
        </div>
      </div>
      <div className="section4">
        <div className="fourth bg-black  bg-cover bg-center h-auto text-white relative   ">
          <div className="pt-[490px] flex justify-center">
            <Image
              src="/images/web/icon/Concept.png"
              width={1450}
              height={900}
            />
          </div>
          <div className="float-right mr-[80px]">
            <Image
              src="/images/web/icon/design_star.png"
              width={77}
              height={77}
            />
            <p className="font-extralight leading-7 ml-[50px]">
              무수한 과거와 현재가 이어져 미지의 공간인 미래를
              <br />
              만들어 간다는 의미를 담아 옛것을 흐리게, 새로운 것을
              <br /> 뚜렷하게 표현하여 과거와 미래가 공존하는 온고지신을
              <br />
              그래픽으로 표현하였습니다.
            </p>
          </div>
        </div>

        <div className="bg-black  bg-cover bg-center pt-[500px]">
          <div className="items-end">
            <Slider {...setting}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index, res) => {
                return (
                  <Image
                    src="/images/web/logo/slideLogo.png"
                    width={330}
                    height={50}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="section5">
        <div className="last bg-[#0649EC]  bg-cover bg-center h-auto text-white flex flex-col ">
          <div className="flex justify-center pt-[285px] cursor-pointer  ">
            <Image
              className="animate-pulse"
              onClick={() => {
                router.push("/works");
              }}
              src="/images/web/icon/GotoWork.png"
              width={335}
              height={335}
            />
          </div>
          <div>
            <h1 className="text-[80px] flex justify-center text-center mt-[170px]">
              OUR <br /> DEGREE SHOW
            </h1>
          </div>
          <div className="madeBy mt-[125px]">
            <div className="w-[1000px] m-auto pb-[250px]">
              <div className="grid grid-cols-6 space-x-[74px] mb-[40px]">
                <div className="border-t-[1px]" />
                <div className="border-t-[1px] w-[770px]" />
              </div>
              <div className="grid grid-cols-6 space-x-[74px] ">
                <h1 className="text-[25px]">지도 교수</h1>
                <p className="text-[20px] font-extralight">고보형 교수</p>
                <p className="text-[20px] font-extralight">김태선 교수</p>
                <p className="text-[20px] font-extralight">박경진 교수</p>
                <p className="text-[20px] font-extralight">이재환 교수</p>
                <p className="text-[20px] font-extralight">한정완 교수</p>
              </div>
              <div className="grid grid-cols-6 space-x-[74px] pt-[60px]">
                <h1 className="text-[25px]">졸업준비위원회</h1>
                <p className="text-[20px] font-extralight">위원장</p>
                <p className="text-[20px] font-extralight">한윤정</p>
                <p> </p>
                <p> </p>
                <p> </p>
              </div>
              <div className="grid grid-cols-6 space-x-[74px]  pt-[55px]">
                <h1> </h1>
                <p className="text-[20px] font-extralight">부위원장</p>
                <p className="text-[20px] font-extralight">임예지</p>
                <p className="text-[20px] font-extralight"> </p>
                <p> </p>
                <p> </p>
              </div>
              <div className="grid grid-cols-6 space-x-[74px]  pt-[55px]">
                <h1> </h1>
                <p className="text-[20px] font-extralight">기획/홍보팀</p>
                <p className="text-[20px] font-extralight">이다은</p>
                <p className="text-[20px] font-extralight">공일빈</p>
                <p> </p>
                <p> </p>
              </div>
              <div className="grid grid-cols-6 space-x-[74px] pt-[55px] ">
                <h1> </h1>
                <p className="text-[20px] font-extralight">그래픽팀</p>
                <p className="text-[20px] font-extralight">이다빈</p>
                <p className="text-[20px] font-extralight">이민주</p>
                <p className="text-[20px] font-extralight">조호현</p>
                <p> </p>
              </div>
              <div className="grid grid-cols-6 space-x-[74px] pt-[55px] ">
                <h1> </h1>
                <p className="text-[20px] font-extralight">개발팀</p>
                <p className="text-[20px] font-extralight">민준수</p>
                <p className="text-[20px] font-extralight">박재현</p>
                <p> </p>
                <p> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
