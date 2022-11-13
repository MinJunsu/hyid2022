import Image from "next/image";
import { useRouter } from "next/router";
import CloseButton from "@components/mobile/icons/close-button";
import UpButton from "@components/mobile/icons/up-button";
import { WorkWithStudentsAndImages } from "@pages/api/works/[id]";
import getImageRatio from "../../../utils/image";
import Link from "next/link";

interface MobileWorkDetailProps {
  work: WorkWithStudentsAndImages;
}

function MobileWorkDetail({ work }: MobileWorkDetailProps) {
  const router = useRouter();
  console.log(work);
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
            work.workBackdropImage!.width,
            work.workBackdropImage!.height
          )}`,
        }}
      >
        <Image
          className="-z-20"
          src={work.workBackdropImage!.image}
          layout="fill"
          objectFit="cover"
          alt="work-detail-backdrop"
        />
      </div>
      {/* 작품 정보 */}
      <div className="flex flex-col mx-8">
        <div className="flex flex-col">
          {/* 작품 제목 */}
          <h1 className="block text-xl mb-1">{work.title}</h1>
          {/* 작품 부제목 */}
          <span className="block text-md">{work.subTitle}</span>
          {/* 작품 설명 */}
          <p className="block text-sm my-5">{work.description}</p>
        </div>
        {/* 작품 이미지 */}
        <div className="flex flex-col">
          {work.mainImages.map((image, index) => {
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
                  />
                </div>
              );
            }
          })}
        </div>

        {/* 작가 정보 */}
        <div className="grid grid-cols-2 gap-2">
          {work.students.map((student, index) => {
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
                <Link href={`/works/${works[0].work.id}`}>
                  <a
                    key={index}
                    className="block w-full relative mb-12"
                    style={{
                      aspectRatio: `${getImageRatio(
                        works[0].work.workProfileImage!.width,
                        works[0].work.workProfileImage!.height
                      )}`,
                    }}
                  >
                    <Image
                      src={works[0].work.workProfileImage!.image}
                      layout="fill"
                      objectFit="cover"
                    />
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MobileWorkDetail;
