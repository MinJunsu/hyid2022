import Image from "next/image";
import { useRouter } from "next/router";
import CloseButton from "@components/mobile/icons/close-button";
import UpButton from "@components/mobile/icons/up-button";

function MobileWorkDetail() {
  const router = useRouter();
  return (
    <div className="flex flex-col relative">
      <div className="z-50 m-5 absolute right-0 shadow-2xl">
        <CloseButton onClick={() => router.back()} />
      </div>
      <div className="z-50 mx-5 my-10 fixed bottom-0 right-0 shadow-2xl">
        <UpButton onClick={() => window.scrollTo(0, 0)} />
      </div>
      {/* Backdrop 이미지 설정 */}
      <div className="w-full aspect-[1/0.56] relative mb-10">
        <Image
          className="-z-20"
          src={"/works/2015052651/2015052651_1_1.jpg"}
          layout="fill"
          objectFit="cover"
          alt="work-detail-backdrop"
        />
      </div>
      {/* 작품 정보 */}
      <div className="flex flex-col mx-5">
        <div className="flex flex-col">
          {/* 작품 제목 */}
          <h1 className="block text-xl mb-1">노닐</h1>
          {/* 작품 부제목 */}
          <span className="block text-md">우리 것을 우리의 일상으로</span>
          {/* 작품 설명 */}
          <p className="block text-sm my-5">
            문화[文化]란 민족이 살아가는 고유의 환경에서 형성되어온 의식주로부터
            민족 전체가 공유하는 정서를 뜻합니다. 저는 우리 문화유산이 가진
            보편적 가치를 현재로 계승하여 우리의 일상을 자국 문화의 흔적이
            가득한 풍경으로 만들고 싶었습니다. 노닐은 한옥의 처마 선이 가진
            곡률을 소재로 한 그릇입니다. 또한 한옥은 여러 개의 가옥이 모여
            하나의 주거시설을 완성한다는 점과 한식은 다양한 음식들이 어우러져
            하나의 상을 완성한다는 점을 연결 지어, 그릇을 세트로 구성했을때
            상차림에서 식과 주의 특징이 모두 드러나도록 의도했습니다. 노닐이
            우리의 일상에 우리의 문화가 잔잔히 드러나는 풍경을 만드는 긍정적인
            발자취가 되길 기대해봅니다.
          </p>
        </div>
        {/* 작품 이미지 */}
        <div className="flex flex-col">
          <div className="w-full aspect-[1/7.93] relative mb-12">
            <Image
              src={"/works/2015052651/2015052651_1_3_1.jpg"}
              layout="fill"
              objectFit="cover"
              alt={"/works/2015052651/2015052651_1_3_1.jpg"}
            />
          </div>
          <div className="w-full aspect-[1/8.11] relative mb-12">
            <Image
              src={"/works/2015052651/2015052651_1_3_2.jpg"}
              layout="fill"
              objectFit="cover"
              alt={"/works/2015052651/2015052651_1_3_2.jpg"}
            />
          </div>
        </div>

        {/* 작가 정보 */}
        <div className="flex flex-col my-10">
          <h2 className="text-xl font-semibold">이다빈</h2>
          <span className="text-lg ">DABEEN LEE</span>
          <span className="text-sm mt-2">sunsuking@gmail.com</span>
          <div className="flex flex-row my-5 space-x-2">
            <div className="w-1/2">
              <div className="w-full aspect-[1/0.85] relative mb-12">
                <Image
                  src={"/works/2015052651/2015052651_1_4.jpg.jpg"}
                  layout="fill"
                  objectFit="cover"
                  alt={"/works/2015052651/2015052651_1_3_2.jpg"}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="w-full aspect-[1/0.85] relative mb-12">
                <Image
                  src={"/works/2015052651/2015052651_1_4.jpg.jpg"}
                  layout="fill"
                  objectFit="cover"
                  alt={"/works/2015052651/2015052651_1_3_2.jpg"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileWorkDetail;
