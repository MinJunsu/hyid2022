import Image from "next/image";
import { useRouter } from "next/router";
import CloseButton from "@components/mobile/icons/close-button";
import UpButton from "@components/mobile/icons/up-button";
import { WorkWithStudentsAndImages } from "@pages/api/works/[id]";
import getImageRatio from "../../../utils/image";
import Link from "next/link";
import { Like } from "@pages/works/[id]";
import { useState } from "react";

interface MobileWorkDetailProps {
  work: WorkWithStudentsAndImages;
  like: Like;
  mutation: any;
}

function MobileWorkDetail({ work, like, mutation }: MobileWorkDetailProps) {
  const router = useRouter();
  const [stateLike, setStateLike] = useState<Like>(like);

  const handleCopyClipBoard = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex flex-col relative">
      <div className="z-50 m-5 absolute right-0 shadow-2xl">
        <CloseButton onClick={() => router.back()} />
      </div>
      <div className="z-50 mx-5 my-10 fixed bottom-0 right-0 shadow-2xl">
        <UpButton onClick={() => window.scrollTo(0, 0)} />
      </div>
      {/* Backdrop 이미지 설정 */}
      <div
        className={`w-full relative mb-10`}
        style={{
          aspectRatio: `${getImageRatio(
            work?.workBackdropImage!.width,
            work?.workBackdropImage!.height
          )}`,
        }}
      >
        <Image
          className="-z-20"
          src={work?.workBackdropImage!.image}
          layout="fill"
          objectFit="cover"
          alt="work-detail-backdrop"
          priority
        />
      </div>
      {/* 작품 정보 */}
      <div className="flex flex-col mx-8">
        <div className="flex flex-col">
          {/* 작품 제목 */}
          <h1 className="block text-xl mb-1">{work?.title}</h1>
          {/* 작품 부제목 */}
          <span className="block text-md">{work?.subTitle}</span>
          {/* 작품 설명 */}
          <p className="block text-sm my-5">{work?.description}</p>
        </div>
        {/* 작품 이미지 */}
        <div className="flex flex-col">
          {work?.mainImages.map((image, index) => {
            if (image.image.includes("mp4")) {
              return (
                <div
                  key={index}
                  className="w-full relative"
                  style={{
                    aspectRatio: `${getImageRatio(
                      image!.width,
                      image!.height
                    )}`,
                  }}
                >
                  <video
                    key={index}
                    className="w-full relative"
                    controls
                    src={image.image}
                  ></video>
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  className="w-full relative"
                  style={{
                    aspectRatio: `${getImageRatio(
                      image!.width,
                      image!.height
                    )}`,
                  }}
                >
                  <Image
                    src={image!.image}
                    layout="fill"
                    objectFit="cover"
                    alt={`메인 이미지 ${index}`}
                    priority
                  />
                </div>
              );
            }
          })}
        </div>

        {/* 작가 정보 */}
        <div className="grid grid-cols-2 gap-2">
          {work?.students.map((student, index) => {
            const {
              student: { id, name, nameKor, email, works },
            } = student;
            return (
              <div className="flex flex-col my-10" key={index}>
                <Link href={`/designers/${id}`}>
                  <a className="block flex flex-col">
                    <h2 className="text-xl font-bold">{nameKor}</h2>
                    <span className="text-lg ">{name}</span>
                    <span className="text-sm mt-2 mb-5">{email}</span>
                  </a>
                </Link>
                <Link href={`/works/${works[0].work?.id}`}>
                  <a
                    key={index}
                    className="block w-full relative "
                    style={{
                      aspectRatio: `${getImageRatio(
                        works[0].work?.workProfileImage!.width,
                        works[0].work?.workProfileImage!.height
                      )}`,
                    }}
                  >
                    <Image
                      src={works[0].work?.workProfileImage!.image}
                      layout="fill"
                      objectFit="cover"
                      priority
                      alt="썸네일 이미지"
                    />
                  </a>
                </Link>
              </div>
            );
          })}
        </div>

        {/* 좋아요 버튼 */}
        <div className="mb-12">
          <div className="flex flex-row">
            <div
              className="flex flex-row cursor-pointer"
              onClick={() => {
                if (stateLike?.isLiked) return;
                mutation.mutate(work?.id);
                setStateLike((prev) => ({
                  isLiked: true,
                  likeCount: prev.likeCount + 1,
                }));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="18"
                viewBox="0 0 31.077 27.361"
              >
                <path
                  id="heart"
                  d="M28.383,5.24a7.651,7.651,0,0,0-10.822,0L16.087,6.715,14.612,5.24A7.652,7.652,0,0,0,3.79,16.062l1.474,1.474L16.087,28.359,26.909,17.537l1.474-1.474a7.651,7.651,0,0,0,0-10.822Z"
                  transform="translate(-0.549 -1.998)"
                  fill={`${stateLike?.isLiked ? "#0649EC" : "none"}`}
                  stroke={`${stateLike?.isLiked ? "#0649EC" : "#aeaeae"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <span
                className={`ml-2 font-medium ${
                  stateLike?.isLiked && "text-[#0649EC]"
                }`}
              >
                {stateLike?.likeCount}
              </span>
            </div>
            <span className="mx-3 font-bold">|</span>
            <div
              className="cursor-pointer"
              onClick={() =>
                handleCopyClipBoard(`www.hyiddegreeshow.kr/work/${work?.id}`)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="23"
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
        </div>
      </div>
    </div>
  );
}

export default MobileWorkDetail;
