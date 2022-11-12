import Image from "next/image";

interface UpButtonProps {
  onClick: () => void;
}

function CloseButton({ onClick }: UpButtonProps) {
  return (
    <div
      onClick={onClick}
      className="w-12 h-12 bg-white rounded-full flex justify-center items-center cursor-pointer"
      style={{ boxShadow: "0px 4px 8px #00000042;" }}
    >
      <Image
        src="/mobile/icon/arrow-up.svg"
        width={26}
        height={26}
        alt="close-button"
      />
    </div>
  );
}

export default CloseButton;
