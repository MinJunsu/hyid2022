import Image from "next/image";
import Link from "next/link";

interface CloseButtonProps {
  onClick: () => void;
}

function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <Link href={`/works`}>
      <a
        className="block w-12 h-12 bg-white rounded-full flex justify-center items-center cursor-pointer"
        style={{ boxShadow: "0px 4px 8px #00000042" }}
      >
        <Image
          src="/mobile/icon/close.svg"
          width={20}
          height={20}
          alt="close-button"
        />
      </a>
    </Link>
  );
}

export default CloseButton;
