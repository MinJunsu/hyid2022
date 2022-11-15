import { CategoryWithWorks } from "@pages/api/category";
import Image from "next/image";

interface CategoryProps {
  categories: CategoryWithWorks[];
  setClose: () => void;
  modalState: boolean;
}

function WorkModal({ categories, setClose, modalState }: CategoryProps) {
  return (
    <div className={`modal px-[43px] absolute top-0  cursor-pointer w-full  `}>
      <div
        className="closeButton bg-white rounded-[5p%] w-[90px] h-[90px] flex items-center justify-center rounded-full float-right shadow-2xl  hover:scale-105"
        onClick={setClose}
      >
        <Image src="/web/icon/close.svg" width={40} height={40} alt="close" />
      </div>
      <div className=" flex flex-wrap max-w-[1000px]   ">
        {categories?.map((category, idx) => {
          return (
            <div key={idx} className="group relative ">
              <div className="text-[105px] flex pointer-cursor ">
                <h2 className="hover:text-[#0649EC] ">{category.name}</h2>
                <h2
                  className={`${
                    category.id === 13 ? "hidden" : null
                  } mx-[10px]`}
                >
                  ,
                </h2>
              </div>
              <div className="counter bg-[#0649EC] w-[90px] h-[62px] rounded-full absolute  opacity-80 text-center text-[39px] text-white group-hover:inline top-0 -right-0 hidden">
                {category.works.length}
              </div>
            </div>
          );
        })}
      </div>
      <div className="total  ">
        <p className="text-[#E26748] font-extralight text-[60px] mt-[90px]">
          - {categories[0].works.length} Works
        </p>
      </div>
    </div>
  );
}

export default WorkModal;
