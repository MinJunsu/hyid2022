import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import router from "next/router";
import { Link } from "react-scroll";
import Header from "@components/desktop/header";
import Head from "next/head";
import { ViewCount } from "../../type";
import { AnimatePresence, motion } from "framer-motion";

const Fade = require("react-reveal/Fade");

interface HomeProps {
  viewCount: ViewCount;
}

function Home({ viewCount }: HomeProps) {
  const setting = {
    dots: false,
    infinite: true,
    speed: 3000,
    fade: false,
    slidesToShow: 5,
    slidesToScroll: 1,
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

  // Slide 구현
  const [pages, setPages] = useState<number>(0);

  const [ScrollY, setScrollY] = useState(0); // 스크롤값을 저장하기 위한 상태
  const handleFollow = () => {
    setScrollY(window.scrollY); // window 스크롤 값을 ScrollY에 저장
  };

  useEffect(() => {
    // console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
    //1000
    const section1 = window.innerHeight - 100;
    //2000
    const section2 = (window.innerHeight - 100) * 2;
    //3000
    const section3 = (window.innerHeight - 100) * 3;
    //4000
    const section4 = (window.innerHeight - 100) * 4;
    if (ScrollY < section1) {
      setPages(0);
    }
    if (ScrollY > section1 && ScrollY < section2) {
      setPages(1);
    }
    if (ScrollY > section2 && ScrollY < section3) {
      setPages(2);
    }
    if (ScrollY > section3 && ScrollY < section4) {
      setPages(3);
    }
  }, [ScrollY]);

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="webView scroll-smooth">
          <Head>
            <title>HYID2022</title>
          </Head>
          <div className="dots fixed text-white z-20 right-8 bottom-[50%] ">
            <Link to="first" smooth={true} duration={0}>
              <svg
                className="mb-2"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
              >
                <circle
                  id="타원_96"
                  data-name="타원 96"
                  cx="5"
                  cy="5"
                  r="5"
                  fill="#fff"
                  opacity={`${pages === 0 ? null : 0.25}`}
                />
              </svg>
            </Link>
            <Link to="second" smooth={true} duration={0}>
              <svg
                className="mb-2"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
              >
                <circle
                  id="타원_96"
                  data-name="타원 96"
                  cx="5"
                  cy="5"
                  r="5"
                  fill="#fff"
                  opacity={`${pages === 1 ? null : 0.25}`}
                />
              </svg>
            </Link>
            <Link to="third" smooth={true} duration={0}>
              <svg
                className="mb-2"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
              >
                <circle
                  id="타원_96"
                  data-name="타원 96"
                  cx="5"
                  cy="5"
                  r="5"
                  fill="#fff"
                  opacity={`${pages === 2 ? null : 0.25}`}
                />
              </svg>
            </Link>
            <Link to="fourth" smooth={true} duration={0}>
              <svg
                className="mb-2"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
              >
                <circle
                  id="타원_96"
                  data-name="타원 96"
                  cx="5"
                  cy="5"
                  r="5"
                  fill="#fff"
                  opacity={`${pages === 3 ? null : 0.25}`}
                />
              </svg>
            </Link>
          </div>
          <div className="first relative">
            <div className="bg-[url('/web/background/web_main_banner_1_gif.gif')] bg-cover bg-center h-[100vh] px-[40px] py-[20px]">
              <Header color="white" />
              <Link to="second" spy={true} smooth={true}>
                <div className="flex items-center space-x-[18px] absolute bottom-5 animate-bounce cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30.178"
                    height="19.938"
                    viewBox="0 0 30.178 19.938"
                  >
                    <path
                      id="패스_333"
                      data-name="패스 333"
                      d="M180.408,30,163.592,16,180.408,2"
                      transform="translate(-0.911 181.315) rotate(-90)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2.835"
                    />
                  </svg>
                  <p className="text-[24px] text-white font-normal">
                    scroll down
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="second">
            <div className=" bg-[url('/web/background/web_main_2_gif.gif')] bg-cover bg-center h-[100vh] flex flex-col">
              <Fade top cascade>
                <div className="flex justify-center ml-[100px]">
                  <Image
                    src="/web/icon/second.png"
                    width={299}
                    height={361}
                    alt="icon"
                  />
                </div>

                <div className="flex-col text-white justify-center flex w-full text-center">
                  <p className="text-4xl text-[#707070] font-medium">
                    온고지신
                  </p>
                  <p className="text-[25px] font-extralight mt-2"> 溫故知新 </p>
                  <p className="mt-[93px] text-lg font-light leading-9">
                    <span className="font-medium">
                      서당 개 3년이면 풍월을 읊는다고 하였습니다.
                    </span>
                    <br /> 우리는 4년이라는 긴 시간 동안 교수님의 어깨 너머로
                    배운 것들을 스스로 깨닫고, <br />
                    산업 디자인과라는 일련의 과정 속에서 찾아낸 색으로 우리의
                    미래를 표현해 보고자 합니다.
                  </p>
                </div>
              </Fade>
            </div>
          </div>

          <div className="third">
            <div className="third bg-[url('/web/background/web_main_3_gif.gif')]  bg-cover bg-center h-[100vh] text-white  ">
              <Fade top cascade>
                <div className="flex-col justify-center text-center items-center relative top-[30vh] ">
                  <h2 className="text-3xl mb-10">
                    각자의 방식으로 미래를 그리다
                  </h2>
                  <Image
                    src="/web/icon/design_star.png"
                    width={77}
                    height={77}
                    alt="icon"
                  />
                  <p className="text-lg mt-10 font-light leading-9">
                    2022 한양대학교 산업디자인학과 졸업 전시{" "}
                    <span className="font-medium">{"'"} 온고지신 </span>
                    {"'"} 은
                    <br />
                    학생이라는 신분에서 배워 온 많은 것들을 몸으로 익히고,
                    <br />
                    학교 밖을 벗어나{" "}
                    <span className="font-medium">
                      자신만의 새로운 미래를 만들어가는 전환점
                    </span>
                    이 될 것입니다.
                  </p>
                </div>
              </Fade>
            </div>
          </div>

          <div className="fourth">
            <div className=" bg-black  bg-cover bg-center h-auto text-white relative   ">
              <Fade top cascade>
                <div className="pt-[343px]  flex justify-center">
                  <Image
                    src="/web/background/concept.png"
                    width={1015}
                    height={672}
                    alt="icon"
                  />
                </div>
                <div className="relative float-right mr-48 -top-32">
                  <div>
                    <Image
                      src="/web/icon/design_star.png"
                      width={92}
                      height={92}
                      alt="icon"
                    />
                  </div>
                  <div>
                    <p className="font-light leading-7 ml-[50px]">
                      무수한 과거와 현재가 이어져 미지의 공간인 미래를
                      <br />
                      만들어 간다는 의미를 담아
                      <span className="font-medium">
                        &nbsp;옛것을 흐리게, 새로운 것을
                        <br /> 뚜렷하게 표현하여
                      </span>{" "}
                      과거와 미래가 공존하는 온고지신을
                      <br />
                      그래픽으로 표현하였습니다.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="bg-black  bg-cover bg-center pt-[500px]">
              <div className="items-end">
                <Slider {...setting}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index, res) => {
                    return (
                      <Image
                        key={index}
                        src="/web/logo/slideLogo.png"
                        width={330}
                        height={50}
                        alt="온고지신"
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
                  src="/web/icon/GotoWork.png"
                  width={335}
                  height={335}
                  alt="icon"
                />
              </div>
              <div>
                <h1 className="text-[80px] flex justify-center text-center mt-[170px]">
                  OUR <br /> DEGREE SHOW
                </h1>
              </div>
              <div className="madeBy mt-[125px]">
                <div className="w-[1000px] m-auto pb-[250px]">
                  <div className="grid grid-cols-6 space-x-[44px] mb-[40px]">
                    <div className="border-t-[1px]" />
                    <div className="border-t-[1px] w-[770px]" />
                  </div>
                  <div className="grid grid-cols-6 space-x-[64px] ">
                    <h1 className="text-2xl font-bold">지도 교수</h1>
                    <p className="text-[20px] font-normal">고보형 교수</p>
                    <p className="text-[20px] font-normal">김태선 교수</p>
                    <p className="text-[20px] font-normal">박경진 교수</p>
                    <p className="text-[20px] font-normal">이재환 교수</p>
                    <p className="text-[20px] font-normal">한정완 교수</p>
                  </div>
                  <div className="grid grid-cols-6 space-x-[64px] pt-[60px]">
                    <h1 className="text-2xl font-bold">졸업준비위원회</h1>
                    <p className="text-[20px] font-medium">위원장</p>
                    <p className="text-[20px] font-normal">한윤정</p>
                    <p></p>
                    <p></p>
                    <p></p>
                  </div>
                  <div className="grid grid-cols-6 space-x-[64px]  pt-[55px]">
                    <h1></h1>
                    <p className="text-[20px] font-medium">부위원장</p>
                    <p className="text-[20px] font-normal">임예지</p>
                    <p className="text-[20px] font-extralight"></p>
                    <p></p>
                    <p></p>
                  </div>
                  <div className="grid grid-cols-6 space-x-[64px]  pt-[55px]">
                    <h1></h1>
                    <p className="text-[20px] font-medium">기획/홍보팀</p>
                    <p className="text-[20px] font-normal">이다은</p>
                    <p className="text-[20px] font-normal">공일빈</p>
                    <p></p>
                    <p></p>
                  </div>
                  <div className="grid grid-cols-6 space-x-[64px] pt-[55px] ">
                    <h1></h1>
                    <p className="text-[20px] font-medium">그래픽팀</p>
                    <p className="text-[20px] font-normal">이다빈</p>
                    <p className="text-[20px] font-normal">이민주</p>
                    <p className="text-[20px] font-normal">조호현</p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer bg-[#0649EC] border-t-[1px] border-white h-auto px-[200px]">
            <div className="py-[150px] text-white">
              <h2 className="font-2xl mb-[10px] ">
                Ongozisin, Hanyang univ. All Rights Reserved
              </h2>
              <div className="flex items-center justify-between ">
                <p className="font-2xl font-extralight">
                  59-9, Hanyangdaehak 1-gil, Sangnok-gu, Ansan-si, Gyeonggi-do,
                  Republic of Korea
                </p>
                <p className="font-xl font-extralight">
                  Today {viewCount?.todayViewCount}{" "}
                  <span className="m-10">|</span> Total{" "}
                  {viewCount?.allViewCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Home;
