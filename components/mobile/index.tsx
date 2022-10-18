import React from "react";
import Image from "next/image";

const MobileHome: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Main Page - Main Animation 1  */}
      <div
        className="flex flex-col h-[100vh] bg-cover"
        style={{
          backgroundImage: 'url("/mobile/animation/main-animation-1.gif");',
        }}
      >
        <div className="flex flex-row mx-10 my-14 justify-between items-center">
          <Image src="/mobile/logo_white.png" width={52} height={51} />
          <div className="flex flex-row space-x-5">
            <span className="text-white font-normal text-xl">WORKS</span>
            <span className="text-white font-normal text-xl">DESIGNER</span>
          </div>
        </div>
      </div>
      {/* Main Page - Main Animation 2  */}
      <div
        className="flex flex-col h-[100vh] bg-cover"
        style={{
          backgroundImage: 'url("/mobile/animation/main-animation-2.gif");',
        }}
      >
        <div className="h-[20%]" />
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col">
            <div className="relative justify-center">
              <Image
                className="absolute"
                src="/mobile/orange-star.png"
                width={51}
                height={50}
              />
              <Image
                className="absolute"
                src="/mobile/blue-star.png"
                width={119}
                height={144}
              />
            </div>
            <span className="text-orange-500">WHAT WE DO</span>
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
          backgroundImage: 'url("/mobile/animation/main-animation-3.gif");',
        }}
      >
        <div className="h-[35vh]" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl text-white font-normal">
            각자의 방식으로 미래를 그리다
          </h2>
          <div className="h-[15vh] flex justify-center items-center">
            <Image src="/mobile/orange-big-star.svg" width={50} height={50} />
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-white w-full flex justify-center">
              2022 한양대학교 산업디자인학과
            </span>
            <span className="text-white w-full flex justify-center">
              졸업 전시 '온고지신'은 학생이라는 신분에서
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
      </div>
    </div>
  );
};

export default MobileHome;
