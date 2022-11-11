import Header from "../header";
import Image from "next/image";
import { Tag } from "@prisma/client";

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
            <Image src={student.profileImage!} width={455} height={560} />
          </div>
          <div className="w-[55%] h-full flex items-center ml-[115px] ">
            <div className="w-full">
              <div>
                <h2 className="text-[40px]">{student.nameKor}</h2>
                <h3 className="text-[25px]">{student.name}</h3>
              </div>
              <div className="tag mt-[35px] flex space-x-4">
                {student.tags.map(({ tag }: { tag: Tag }, index: number) => {
                  return (
                    <div key={index}>
                      <p className="bg-[#F2F2F2] rounded-full w-auto p-2 text-center w-[138px] uppercase">
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
              <div className="works flex  mt-[42px] space-x-[50px]">
                <div>
                  <Image
                    src="/profile/2016018440.png"
                    width={428}
                    height={365}
                  />
                </div>
                <div>
                  <Image
                    src="/profile/2016018440.png"
                    width={428}
                    height={365}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Id;
