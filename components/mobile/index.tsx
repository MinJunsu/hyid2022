import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ViewCount } from "@pages/api";

interface MobileHomeProps {
  viewCount: ViewCount;
}

const MobileHome: React.FC<MobileHomeProps> = ({ viewCount }) => {
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
    <div className="flex flex-col  font-light">
      {/* Main Page - Main Animation 1  */}
      <div
        className="flex flex-col h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/mobile/animation/main-animation-1.gif")',
        }}
      >
        <div className="flex flex-row mx-10 my-3 justify-between items-center">
          <Link href="/">
            <a>
              <Image
                src="/web/logo/web_logo_white.svg"
                width={100}
                height={90}
              />
            </a>
          </Link>
          <div className="flex flex-row space-x-5">
            <Link href="/works/?category=true">
              <a className="text-white font-normal">WORKS</a>
            </Link>
            <Link href="/designers">
              <a className="text-white font-normal">DESIGNER</a>
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
          <h2 className="text-xl text-white">각자의 방식으로 미래를 그리다</h2>
          <div className="h-[15vh] flex justify-center items-center">
            <Image src="/mobile/icon/orange_logo.svg" width={50} height={50} />
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-white w-full flex justify-center">
              2022 한양대학교 산업디자인학과
            </span>
            <span className="text-white w-full flex justify-center">
              졸업 전시 &apos;온고지신&apos;은 학생이라는 신분에서
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
          <div className="flex justify-center">
            <div className="flex flex-col space-y-2 justify-center">
              <div className="block text-white w-full flex justify-start">
                무수한 과거와 현재가 이어져
              </div>
              <div className="text-white w-full flex justify-start">
                미지의 공간인 미래를 만들어
              </div>
              <span className="text-white w-full flex justify-start">
                간다는 의미를 담아 옛것을
              </span>
              <span className="text-white w-full flex justify-start">
                흐리게, 새로운 것을 뚜렷하게
              </span>
              <span className="text-white w-full flex justify-start">
                표현하여 과거와 미래가 공존
              </span>
              <span className="text-white w-full flex justify-start">
                하는 온고지신을 그래픽으로
              </span>
              <span className="text-white w-full flex justify-start">
                표현하였습니다.
              </span>
            </div>
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
      <div className="flex flex-col h-[100vh] bg-cover bg-center bg-[#0649EC]">
        <div className="flex justify-center mt-10 my-2">
          <Link href="/works/?category=true">
            <Image src={"/mobile/icon/gotoWork.png"} width={150} height={150} />
          </Link>
        </div>
        <div>
          <h2 className="text-center text-[26px] text-white font-light">
            OUR
            <br /> DEGREE SHOW
          </h2>
        </div>
        <div className="text-white my-8 mx-10">
          <h2 className="font-medium mb-5">지도교수</h2>
          <div className="grid grid-cols-3 gap-3">
            <span className="text-sm">고보형 교수</span>
            <span className="text-sm">김태선 교수</span>
            <span className="text-sm">박경진 교수</span>
            <span className="text-sm">이재환 교수</span>
            <span className="text-sm">한정완 교수</span>
          </div>
        </div>
        <div className="text-white my-8 mx-10">
          <h2 className="font-medium mb-5">졸업준비위원회</h2>
          <div className="grid grid-rows-4 grid-cols-4 gap-3">
            <span className="text-sm">위원장</span>
            <span className="text-sm">한윤정</span>
            <span className="text-sm"></span>
            <span className="text-sm"></span>
            <span className="text-sm">부위원장</span>
            <span className="text-sm">임예지</span>
            <span className="text-sm"></span>
            <span className="text-sm"></span>
            <span className="text-sm">기획/홍보팀</span>
            <span className="text-sm">이다은</span>
            <span className="text-sm">공일빈</span>
            <span className="text-sm"></span>
            <span className="text-sm">그래픽팀</span>
            <span className="text-sm">이다빈</span>
            <span className="text-sm">이민주</span>
            <span className="text-sm">조호현</span>
          </div>
        </div>
        <div className="my-3 w-full h-[1px] bg-white bg-opacity-50" />
        <div className="flex flex-col my-5 mx-6">
          <span className="text-white font-medium">
            Ongozisin, Hanyang univ. All Rights Reserved
          </span>
          <span className="mx-1 text-white font-light text-opacity-50">
            59-9, Hanyangdaehak 1-gil, Sangnok-gu,
          </span>
          <span className="mx-1 text-white font-light text-opacity-50">
            Ansan-si, Gyeonggi-do, Republic of Korea
          </span>
        </div>
        <div className="flex flex-col mx-6">
          <span className="text-white text-opacity-50">
            Today {viewCount.todayViewCount.toLocaleString()} | Total{" "}
            {viewCount.allViewCount.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileHome;
