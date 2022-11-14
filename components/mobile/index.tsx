import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MobileHome: React.FC = () => {
  const setting = {
    dots: false,
    infinite: true,
    speed: 3000,
    fade: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    cssEase: "linear",
  };

  return (
    <div className="flex flex-col">
      {/* Main Page - Main Animation 1  */}
      <div
        className="flex flex-col h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/mobile/animation/main-animation-1.gif")',
        }}
      >
        <div className="flex flex-row mx-8 my-6 justify-between items-center">
          <Image src="/mobile/logo_white.png" width={52} height={51} />
          <div className="flex flex-row space-x-5">
            <Link href="/works/?category=true">
              <a className="text-white font-normal text-xl">WORKS</a>
            </Link>
            <Link href="/designers">
              <a className="text-white font-normal text-xl">DESIGNER</a>
            </Link>
          </div>
        </div>
      </div>
      {/* Main Page - Main Animation 2  */}
      <div
        className="flex flex-col h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/mobile/animation/main-animation-2.gif")',
        }}
      >
        <div className="h-[20%]" />
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center">
            <Image
              src="/mobile/icon/What_We_do.png"
              width={134}
              height={143}
              className="z-20"
            />
          </div>
          <div className="flex flex-col space-y-4 text-white my-10">
            <h2>온고지신</h2>
            <h2>溫故知新</h2>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-white w-full flex justify-center">
              서당 개 3년이면 풍월을 읊는다고
            </span>
            <span className="text-white w-full flex justify-center">
              하였습니다. 우리는 4년이라는 긴 시간 동안
            </span>
            <span className="text-white w-full flex justify-center">
              교수님의 어깨 너머로 배운 것들을 스스로 깨닫고,
            </span>
            <span className="text-white w-full flex justify-center">
              산업 디자인과라는 일련의 과정 속에서 찾아낸
            </span>
            <span className="text-white w-full flex justify-center">
              색으로 우리의 미래를 표현해 보고자 합니다.
            </span>
          </div>
        </div>
      </div>
      {/* Main Page - Main Animation 3  */}
      <div
        className="flex flex-col h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/mobile/animation/main-animation-3.gif")',
        }}
      >
        <div className="h-[35vh]" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl text-white font-normal">
            각자의 방식으로 미래를 그리다
          </h2>
          <div className="h-[15vh] flex justify-center items-center">
            <Image src="/mobile/icon/orange_logo.svg" width={50} height={50} />
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-white w-full flex justify-center">
              2022 한양대학교 산업디자인학과
            </span>
            <span className="text-white w-full flex justify-center">
              졸업 전시 &apos온고지신&apos은 학생이라는 신분에서
            </span>
            <span className="text-white w-full flex justify-center">
              배워 온 많은 것들을 몸으로 익히고,
            </span>
            <span className="text-white w-full flex justify-center">
              학교 밖을 벗어나 자신만의 새로운 미래를
            </span>
            <span className="text-white w-full flex justify-center">
              만들어가는 전환점이 될 것입니다.
            </span>
          </div>
        </div>
        <div className="h-[35vh]" />
      </div>
      <div className="bg-black h-[100vh]">
        <div className="flex justify-center mt-[140px]">
          <Image src="/mobile/icon/ourConcept.png" width={338} height={277} />
        </div>
        <div className="ml-24 mt-[30px]">
          <div className="ml-4">
            <Image src="/mobile/icon/orange_logo.svg" width={36} height={36} />
          </div>
          <div className="flex flex-col space-y-2 font-extralight">
            <span className="text-white w-full flex justify-center">
              무수한 과거와 현재가 이어져
            </span>
            <span className="text-white w-full flex justify-center">
              미지의 공간인 미래를 만들어
            </span>
            <span className="text-white w-full flex justify-center">
              간다는 의미를 담아 옛것을
            </span>
            <span className="text-white w-full flex justify-center">
              흐리게, 새로운 것을 뚜렷하게
            </span>
            <span className="text-white w-full flex justify-center">
              표현하여 과거와 미래가 공존
            </span>
            <span className="text-white w-full flex justify-center">
              하는 온고지신을 그래픽으로
            </span>
            <span className="text-white w-full flex justify-center">
              표현하였습니다.
            </span>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <Slider {...setting}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index, res) => {
            return (
              <Image
                key={index}
                src="/mobile/icon/slide.png"
                width={120}
                height={18}
              />
            );
          })}
        </Slider>
      </div>
      <div className="bg-[#0649EC]">
        <div className="flex justify-center mt-10 my-3">
          <Image src={"/mobile/icon/gotoWork.png"} width={100} height={100} />
        </div>
        <div>
          <h2 className="text-center text-[26px] text-white">
            OUR
            <br /> DEGREE SHOW
          </h2>
        </div>
        <div className="text-white">
          <h2>지도교수</h2>
        </div>
      </div>
      <div className="h-[35vh]" />
    </div>
  );
};

export default MobileHome;
