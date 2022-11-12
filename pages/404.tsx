import Image from "next/image";
import Link from "next/link";

function ErrorPage (){
    return (
    <div  className="bg-[url('/web/background/profile_background.png')] bg-cover w-full h-[1080px] p-24 relative">
        <div className="flex items-center">
            <Image src="/web/icon/second.png" width={299} height={361}/>
            <div>
                <h2 className="text-[50px] text-white font-normal">올바른 웹사이트 주소가 아닙니다!</h2>
                <p className="text-[25px] text-white font-thin">2022 한양대학교 산업디자인학과 졸업전시사이트 방문을 원하신다면<br/>
                    아래 화살표를 눌러주세요 :)</p>
            </div>
        </div>
        <div className="flex items-center absolute bottom-10 right-28  ">
            <h2 className="text-white text-[47px] mr-16">OUR DEGREE SHOW {'>>>'}</h2>
            <Link href={'/'}>
                <Image className="cursor-pointer" src={"/web/icon/GotoWork.png"} width={199} height={199}/>
            </Link>
        </div>

    </div>
  )
}

export default ErrorPage;