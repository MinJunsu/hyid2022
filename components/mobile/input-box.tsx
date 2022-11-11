import Image from "next/image";
import { useForm } from "react-hook-form";

interface InputBoxProps {
  keyword: string;
  setWord: (word: string) => void;
}

interface SearchWord {
  word: string;
}

function InputBox({ keyword, setWord }: InputBoxProps) {
  const { register, handleSubmit, reset } = useForm<SearchWord>();
  const onSubmit = (word: SearchWord) => {
    reset();
    setWord(word.word);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row">
      <Image
        src="/mobile/input-icon.svg"
        width={20}
        height={20}
        alt="input-icon"
      />
      <div className="flex flex-1">
        <input
          {...register("word")}
          autoComplete="off"
          placeholder={`${keyword}을 검색하세요`}
          type="text"
          className="mx-2 text-gray-500 focus:outline-none"
        />
      </div>
    </form>
  );
}

export default InputBox;
