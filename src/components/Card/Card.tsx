import Heart from "@/assets/svgs/heart";
import Tag from "@/assets/svgs/tag";
import "./style.css";

export default function Card() {
  return (
    <div className="px-3 py-4 md:px-5 md:py-6 w-1/2 bg-[#571E23] rounded-3xl text-main md:w-1/3 lg:w-1/4">
      <div className="flex justify-between items-center mb-3">
        <p className="text-[11px] md:text-[13px]">20/05/24</p>
        <div className="flex justify-center items-center rounded-[50%] w-[26px] h-[26px] bg-[#48191D] md:w-8 md:h-8">
          <Heart className="w-4 h-4 *:stroke-main md:w-5 md:h-5" />
        </div>
      </div>
      <div className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[27%] after:bg-gradient-to-b after:from-[#571e2300] after:from-0% after:to-[#571e23] after:to-80%">
        <h3 className="mb-3 md:text-[19px] font-normal lg:mb-2">
          Lorem ipsum dolor
        </h3>
        <p className="text-sm leading-6 overflow-hidden md:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dolor
          eum temporibus voluptate.
        </p>
      </div>
      <div className="flex items-center px-2 py-1 mt-3 ml-auto bg-[#48191D] rounded-lg w-fit lg:mt-6">
        <Tag />
        <span className="text-[13px] pl-2">3</span>
      </div>
    </div>
  );
}
