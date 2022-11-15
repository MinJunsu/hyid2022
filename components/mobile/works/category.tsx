import { CategoryWithWorks } from "@pages/api/category";
import { useRouter } from "next/router";

interface MobileCategoryProps {
  categories: CategoryWithWorks[];
  setClose: () => void;
}

function MobileCategory({ categories, setClose }: MobileCategoryProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col bg-black h-[100vh]">
      <div
        className="my-16 mx-6 flex justify-end cursor-pointer"
        onClick={setClose}
      >
        <div className="w-12 h-12 rounded-full bg-white text-2xl flex justify-center items-center">
          X
        </div>
      </div>
      <div className="flex flex-col space-y-8 mx-8">
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
                <div className="absolute w-8 h-6 rounded-full bg-blue-700 -top-6 -right-5">
                  <span className="text-white flex justify-center items-center text-sm font-light">
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
