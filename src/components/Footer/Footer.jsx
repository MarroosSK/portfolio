import SkillSet from "../SkillSet/SkillSet";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="pt-12 pb-12 bg-[#16161616]">
      {/* top */}
      <div className="container">
        <div className=" flex flex-col sm:flex-row items-center justify-between">
          <div className=" flex flex-col  justify-center">
            <div className="flex flex-row items-center justify-center sm:justify-start gap-[2px]">
              <p
                className="w-[44px] h-[44px] bg-primaryColor text-white text-[22px] font-[500]
               flex items-center justify-center rounded-full transform rotate-45"
              >
                M
              </p>
              <div className="leading-[20px]">
                <h2 className="text-xl text-smallTextColor font-[700]">
                  arroos
                </h2>
              </div>
            </div>
            <div className="mt-4 w-full">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <AiOutlinePhone />
                <p>0908 026 829</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <AiOutlineMail />
                <p>maros1chmel@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-0 flex flex-col items-center justify-center">
            <SkillSet />
            <p className="text-center text-[10px] mt-2 pb-3">
              @2023, All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
