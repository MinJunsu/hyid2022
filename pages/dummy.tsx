import Image from "next/image";
import router from "next/router";
import { useEffect, useState } from "react";

function Dummy() {
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
      // console.log(window.scrollY);
      // console.log(showButton);
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    <div className="bg-[#fff] relative h-full ">
      <div className="coverImage  ">
        <Image src="/dummy/images/details.png" width={1920} height={1080} />
      </div>
      <div
        onClick={() => {
          router.push("/works");
        }}
        className="closeButton w-[66px] h-[66px] rounded-[50%] bg-white flex justify-center items-center drop-shadow-2xl cursor-pointer absolute top-10 right-16  "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27.685"
          height="27.685"
          viewBox="0 0 27.685 27.685"
        >
          <g
            id="그룹_374"
            data-name="그룹 374"
            transform="translate(-2.157 -2.157)"
          >
            <line
              id="선_92"
              data-name="선 92"
              x2="25.396"
              y2="25.396"
              transform="translate(3.302 3.302)"
              fill="none"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="2.835"
            />
            <line
              id="선_93"
              data-name="선 93"
              x1="25.681"
              y2="25.681"
              transform="translate(3.16 3.16)"
              fill="none"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="2.835"
            />
          </g>
        </svg>
      </div>

      <div className="description px-[160px] pt-[100px]">
        <h3 className="text-[30px] font-semibold">Breeze</h3>
        <h4 className="text-[25px] mt-[30px]  ">뭐머해서 뭐뭐하는 서비스</h4>
        <p className="columns-2 mt-[40px]">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
        </p>
        <div className="mt-[150px] flex-col">
          <Image
            className="block"
            src="/dummy/images/des1.png"
            width={1600}
            height={963}
          />
          <Image
            className="block"
            src="/dummy/images/des1.png"
            width={1600}
            height={963}
          />
        </div>
      </div>
      <div className="flex justify-center mt-[90px] pb-[100px]">
        <div className="loved flex items-center border-[2px] border-[#AEAEAE] w-[200px] rounded-3xl p-3 text-center justify-evenly">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31.077"
            height="27.361"
            viewBox="0 0 31.077 27.361"
          >
            <path
              id="heart"
              d="M28.383,5.24a7.651,7.651,0,0,0-10.822,0L16.087,6.715,14.612,5.24A7.652,7.652,0,0,0,3.79,16.062l1.474,1.474L16.087,28.359,26.909,17.537l1.474-1.474a7.651,7.651,0,0,0,0-10.822Z"
              transform="translate(-0.549 -1.998)"
              fill="none"
              stroke="#aeaeae"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          <p>좋아요</p>|
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29.042"
            height="31.844"
            viewBox="0 0 29.042 31.844"
          >
            <path
              id="패스_246"
              data-name="패스 246"
              d="M24.4,20.185a5.6,5.6,0,0,0-3.975,1.652L13,17.511a5.47,5.47,0,0,0,0-3.023l7.42-4.33A5.678,5.678,0,1,0,19,7.708l-7.421,4.33a5.618,5.618,0,1,0,0,7.923L19,24.285a5.616,5.616,0,1,0,5.405-4.1Zm-16.217-6.9a3.458,3.458,0,0,0-.589-.06,3.481,3.481,0,0,0-.59.06,2.666,2.666,0,0,1,1.179,0Z"
              transform="translate(-1.479 -0.078)"
              stroke="#aeaeae"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      {showButton && (
        <div
          className={`bottom-[20%] bg-white flex justify-center items-center  w-[66px] h-[66px] rounded-[50%] drop-shadow-2xl sticky float-right right-[75px] duration-300 `}
        >
          <button onClick={scrollTop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.211"
              height="28.13"
              viewBox="0 0 19.211 28.13"
            >
              <path
                id="패스_239"
                data-name="패스 239"
                d="M17.582,4.168a13.912,13.912,0,0,1-.156-1.893V1.862H14.574v.62a13.39,13.39,0,0,1-.151,1.685c-.69,4.193-3.39,6.562-8.026,7.04l.291,2.82a11.909,11.909,0,0,0,7.886-3.633v19.6h2.852v-19.6a11.906,11.906,0,0,0,7.891,3.639l.291-2.82C20.972,10.729,18.271,8.36,17.582,4.168Z"
                transform="translate(-6.397 -1.862)"
              />
            </svg>
          </button>
        </div>
      )}
      <div
        className={`maker w-[66px] h-[341px] bg-[#FF7437] fixed right-0 top-48 origin-center    ${
          showModal ? "hidden  origin-center " : "block  origin-center "
        }  `}
        onClick={() => {
          setShowModal(true);
        }}
      >
        <div className="flex-col justify-center align-middle items-center text-center px-[20px] py-[30px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path
              id="패스_237"
              data-name="패스 237"
              d="M120.587,74.192l-2.678-4.384L106.139,77.46,107.265,64H101.91l1.126,13.46L91.265,69.808l-2.678,4.384L101.484,80l-12.9,5.808,2.678,4.384,11.771-7.652L101.91,96h5.356l-1.126-13.46,11.771,7.652,2.678-4.384L107.69,80Z"
              transform="translate(-88.587 -64)"
              fill="#0649ec"
            />
          </svg>
          <svg
            className="mt-[25px]"
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="2"
            viewBox="0 0 34 2"
          >
            <path
              id="패스_261"
              data-name="패스 261"
              d="M0,0H34"
              transform="translate(0 1)"
              fill="none"
              stroke="#0649ec"
              strokeWidth="2"
            />
          </svg>
          <p className="writing-mode-vertical-lr mt-[100px] text-[#0649EC] text-[25px] ">
            Designer
          </p>
        </div>
      </div>

      {/*디자이너 펼쳤을 때*/}

      <div
        className={`maker  h-[341px] bg-[#000000] fixed right-0 top-48 p-5  origin-center    ${
          showModal ? "block ease-in duration-300 " : "hidden  origin-center "
        }`}
        onClick={() => {
          setShowModal(false);
        }}
      >
        <div className="flex items-center cursor-pointer">
          {[1, 2].map((res, idx) => {
            return (
              <div className="flex space-x-4 justify-start" key={idx}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    id="패스_237"
                    data-name="패스 237"
                    d="M120.587,74.192l-2.678-4.384L106.139,77.46,107.265,64H101.91l1.126,13.46L91.265,69.808l-2.678,4.384L101.484,80l-12.9,5.808,2.678,4.384,11.771-7.652L101.91,96h5.356l-1.126-13.46,11.771,7.652,2.678-4.384L107.69,80Z"
                    transform="translate(-88.587 -64)"
                    fill="#ff7437"
                  />
                </svg>
                <div>
                  <h2 className="text-white text-[25px]">이다빈</h2>
                  <h3 className="text-white text-[15px]">DABIN LEE</h3>
                  <p className="text-white my-[18px] ">dabin123 @naver.com</p>
                  <Image
                    src="/dummy/images/details.png"
                    width={215}
                    height={183}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dummy;
