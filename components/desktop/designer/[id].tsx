import Header from "../header";
import Image from "next/image";
import { Tag } from "@prisma/client";
import getImageRatio from "../../../utils/image";
import router from "next/router";

interface StudentProps {
  student: any;
}

function Id({ student }: StudentProps) {
  return (
    <div className="px-[40px] py-[20px]">
      <Header color="black" />
      <div className="fixed left-0 top-0 w-[100vw] h-[100vh] -z-50">
        <div className="flex h-full -z-30">
          <div className="profile w-[45%] bg-[#EFEFEF]  h-full flex justify-center items-center">
            <Image
              src={student.profileImage!}
              width={455}
              height={560}
              priority
            />
          </div>
          <div className="w-[55%] h-full flex items-center ml-[115px] ">
            <div className="w-full">
              <div>
                <h2 className="text-[40px]">{student.nameKor}</h2>
                <h3 className="text-[25px]">{student.name}</h3>
              </div>
              <div className="tag mt-[35px] flex space-x-4">
                {student.isManager && (
                  <div className="px-5 py-2 rounded-full bg-[#0649EC] text-black cursor-pointer">
                    <span className="flex justify-center items-center text-sm text-white">
                      졸준위
                    </span>
                  </div>
                )}
                {student.tags.map(({ tag }: { tag: Tag }, index: number) => {
                  return (
                    <div key={index}>
                      <p className="bg-[#F2F2F2] rounded-full py-2  px-5 text-center w-auto uppercase">
                        {tag.name}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-[135px]">
                <div
                  className={`
                  ${student.email === null ? "hidden" : null}
                `}
                >
                  <div className="E-mail flex items-center space-x-[100px] ">
                    <p className="w-[90px]">E-mail</p>
                    <p>{student.email}</p>
                  </div>
                </div>

                <div
                  className={`
                  ${student.snsLink === null ? "hidden" : null}
                `}
                >
                  <div className="instargram flex items-center space-x-[100px]">
                    <p className="w-[90px]">Instargram</p>
                    <a href={`https://www.instagram.com/${student.snsLink}/`}>
                      {student.snsLink}
                    </a>
                  </div>
                </div>
                <div
                  className={`
                  ${student.webSite === null ? "hidden" : null}
                `}
                >
                  <div className="website flex items-center space-x-[100px]">
                    <p className="w-[90px]">Web Site</p>
                    <p>{student.webSite}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row pr-10 space-x-4">
                {student.works.map((res: any, index: number) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        router.push(`/works/${res.work.id}`);
                      }}
                      className="w-full relative works flex  mt-[42px] space-x-[50px] cursor-pointer"
                      style={{
                        aspectRatio: `${getImageRatio(
                          res?.work.workThumbnailImage.width,
                          res?.work.workThumbnailImage.height
                        )}`,
                      }}
                    >
                      <Image
                        src={res?.work.workThumbnailImage.image}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Id;
