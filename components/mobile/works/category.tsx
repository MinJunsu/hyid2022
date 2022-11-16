import { useRouter } from "next/router";
import { CategoryWithWorks } from "../../../type";

interface MobileCategoryProps {
  categories: CategoryWithWorks[];
  setClose: () => void;
}

function MobileCategory({ categories, setClose }: MobileCategoryProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col bg-[url('/mobile/bg/menu_bg.jpeg')] bg-cover h-[100vh]">
      <div
        className="my-16 mx-6 flex justify-end cursor-pointer"
        onClick={setClose}
      >
        <div className="w-12 h-12 rounded-full bg-white text-2xl flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16.609"
            height="16.609"
            viewBox="0 0 16.609 16.609"
          >
            <g
              id="그룹_381"
              data-name="그룹 381"
              transform="translate(-3.694 -3.697)"
            >
              <line
                id="선_101"
                data-name="선 101"
                x2="15.026"
                y2="15.026"
                transform="translate(4.486 4.489)"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <line
                id="선_102"
                data-name="선 102"
                x1="15.194"
                y2="15.194"
                transform="translate(4.401 4.404)"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col space-y-8 mx-8 font-medium">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setClose();
                router.push(`/works/?category=${category.name.toLowerCase()}`);
              }}
            >
              <div className="relative inline cursor-pointer">
                <div className="absolute w-8 p-1 rounded-full bg-blue-700 -top-6 -right-5 bg-opacity-75 ">
                  <span className="text-white flex justify-center items-center text-sm font-medium opacity-100">
                    {category.works.length}
                  </span>
                </div>
                <span className="text-3xl text-white">{category.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MobileCategory;
