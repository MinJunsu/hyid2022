import { Student } from "@prisma/client";
import { useRouter } from "next/router";
import * as Hangul from "hangul-js";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import InputBox from "@components/mobile/input-box";
import Header from "@components/mobile/header";

interface MobileDesignerProps {
  students: Student[];
}

interface KeywordStudent {
  [key: string]: Student[];
}

function MobileDesigner({ students }: MobileDesignerProps) {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("ALL");
  const keywords = ["ALL", "ㄱ", "ㅁ", "ㅂ", "ㅇ", "ㅈ", "ㅊ", "ㅎ"];
  const [word, setWord] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [searchStudents, setSearchStudents] = useState<Student[]>([]);
  const [keywordStudent, setKeywordStudent] = useState<KeywordStudent>({
    ALL: students,
  });

  useEffect(() => {
    setKeywordStudent({
      ALL: students,
      ㄱ: students.filter(
        (student) => Hangul.disassemble(student.nameKor)[0] === "ㄱ"
      ),
      ㅁ: students.filter(
        (student) => Hangul.disassemble(student.nameKor)[0] === "ㅁ"
      ),
      ㅂ: students.filter(
        (student) => Hangul.disassemble(student.nameKor)[0] === "ㅂ"
      ),

      ㅇ: students.filter(
        (student) => Hangul.disassemble(student.nameKor)[0] === "ㅇ"
      ),
      ㅈ: students.filter(
        (student) => Hangul.disassemble(student.nameKor)[0] === "ㅈ"
      ),
      ㅊ: students.filter(
        (student) => Hangul.disassemble(student.nameKor)[0] === "ㅊ"
      ),
      ㅎ: students.filter(
        (student) => Hangul.disassemble(student.nameKor)[0] === "ㅎ"
      ),
    });
  }, [students]);

  useEffect(() => {
    setIsSearch(false);
    if (router.isReady) {
      setKeyword(router.query.keyword as string);
    }
  }, [router.isReady, router.query]);

  useEffect(() => {
    setIsSearch(true);
    setKeyword("ALL");
    setSearchStudents([
      ...students.filter((student) => student.nameKor.includes(word)),
      ...students.filter((student) =>
        student.name.toLowerCase().includes(word.toLowerCase())
      ),
    ]);
  }, [students, word]);

  const iterateStudents = isSearch ? searchStudents : keywordStudent[keyword];

  return (
    <div className="mx-10">
      <Header />
      <InputBox keyword="이름" setWord={(word: string) => setWord(word)} />
      <div className="flex flex-row my-5 space-x-3 overflow-y-scroll scrollbar-hide">
        {keywords.map((key, index) => {
          return (
            <Link href={`/designers?keyword=${key}`} key={index}>
              <div
                className={`cursor-pointer h-8 rounded-full border-gray-300 border-[1px] flex justify-center items-center ${
                  keyword === key && "bg-blue-700 text-white border-none"
                }`}
              >
                <div className="my-2 mx-3 flex flex-row">
                  <span className="uppercase">{key}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {iterateStudents.map((student, index) => {
          return (
            <Link href={`/designers/${student.id}`} key={index}>
              <div
                className="flex flex-col justify-center items-center cursor-pointer m-2"
                key={index}
              >
                <div className="w-full aspect-[1/1.31] relative">
                  <Image
                    src={student.profileImage!}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="my-3 flex flex-col justify-center items-center">
                  <span className="text-lg">{student.nameKor}</span>
                  <span className="text-sm">{student.name}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MobileDesigner;
