import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Links from "next/link";
import React from "react";

function Header() {
  const router = useRouter();
  return (
    <div className="flex flex-row my-8">
      <div className="w-1/2">
        <div className="mt-3">
          <Link href="/">
            <a>
              <Image
                src="/web/logo/web_logo_black.svg"
                width={40}
                height={30}
                alt="icon"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="w-1/2 flex justify-end items-center space-x-3">
        <span
          className={`${
            router.pathname.includes("works") && "border-b-[1px]"
          } border-black cursor-pointer text-sm`}
          onClick={() => router.push("/works")}
        >
          WORKS
        </span>
        <span
          className={`${
            router.pathname.includes("designers") && "border-b-[1px]"
          } border-black cursor-pointer text-sm`}
          onClick={() => router.push("/designers")}
        >
          DESIGNER
        </span>
      </div>
    </div>
  );
}

export default Header;
