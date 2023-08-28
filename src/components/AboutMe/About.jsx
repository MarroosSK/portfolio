import { GrProjects, GrPersonalComputer } from "react-icons/gr";
import { BsPersonSquare } from "react-icons/bs";
import Tech from "../Tech/Tech";
import { personal } from "../../helpers/data";

const About = () => {
  return (
    <section id="#about" className="flex flex-col py-5 sm:py-12">
      <div className="container">
        <div className="w-[270px] py-3 px-2 sm:w-[450px] md:w-full sm-mx-auto sm:px-0">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">
            {/* LINE */}
            <div className="hidden absolute w-1 sm:block bg-[#0D6EFD] h-full left-1/2 transform -translate-x-1/2"></div>

            {/* LEFT */}
            <div className="p-2 mt-6 sm:mt-0 sm:mb-12">
              <div className="flex items-center flex-col sm:flex-row">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div
                      data-aos="fade-right"
                      data-aos-delay="100"
                      data-aos-duration="1400"
                      className="bg-white p-4 rounded shadow group hover:bg-primaryColor ease-in duration-150"
                    >
                      <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                        {personal.name}
                      </h3>
                      <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                        {personal.info}
                      </p>
                      <button className=" w-full text-[#0D6EFD] flex items-center justify-center gap-2  font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-[#0D6EFD] hover:text-white ease-in duration-300">
                        <a href="#" target="_blank">
                          Check CV
                        </a>
                      </button>
                    </div>
                  </div>
                </div>

                {/* icon */}
                <div
                  className="rounded-full bg-white border-black border-4 w-10 h-10 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0
               flex items-center justify-center"
                >
                  <figure>
                    <BsPersonSquare />
                  </figure>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className=" mt-6 sm:mt-0 sm:mb-12">
              <div className="flex items-center flex-col sm:flex-row">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div
                      data-aos="fade-right"
                      data-aos-delay="50"
                      data-aos-duration="1300"
                      className=" bg-white p-4 rounded shadow group hover:bg-primaryColor ease-in duration-150"
                    >
                      <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[700] text-2xl">
                        Tech Stack
                      </h3>
                      <div className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                        <Tech />
                      </div>
                    </div>
                  </div>
                </div>

                {/* icon */}
                <div
                  className="rounded-full bg-white border-black border-4 w-10 h-10 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0
               flex items-center justify-center"
                >
                  <figure>
                    <GrPersonalComputer />
                  </figure>
                </div>
              </div>
            </div>

            {/* LEFT 2 */}
            <div className="p-2 mt-6 sm:mt-0 sm:mb-12">
              <div className="flex items-center flex-col sm:flex-row">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div
                      data-aos="fade-right"
                      data-aos-delay="100"
                      data-aos-duration="1400"
                      className="bg-white p-4 rounded shadow group hover:bg-primaryColor ease-in duration-150"
                    >
                      <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                        Projects
                      </h3>
                      <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                        I've been working on projects to improve my skills. Feel
                        free to check them out.
                      </p>
                      <button className="mt-2 mx-[50%] text-[#0D6EFD] text-[2rem] self-center">
                        &#8595;
                      </button>
                    </div>
                  </div>
                </div>

                {/* icon */}
                <div
                  className="rounded-full bg-white border-black border-4 w-10 h-10 
              absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0
               flex items-center justify-center"
                >
                  <figure>
                    <GrProjects />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
