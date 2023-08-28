import { useState } from "react";
import { myProjects } from "../../helpers/data";
import { Modal } from "../Modal/Modal";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projectsByCategory =
    selectedCategory === "all"
      ? myProjects
      : myProjects.filter((project) => project.category === selectedCategory);

  const handleActiveModal = (id) => {
    setShowModal(true);
    setActiveId(id);
  };
  return (
    <section id="#projects">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-smallTextColor text-[1.5rem] font-[700]">
              My recent work
            </h3>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setSelectedCategory("all")}
              className="text-smallTextColor border border-solid border-smallTextColor hover:bg-smallTextColor hover:text-white ease-in duration-300 px-4 py-2 rounded-[8px]"
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory("front-end")}
              className="text-smallTextColor border border-solid border-smallTextColor hover:bg-smallTextColor hover:text-white ease-in duration-300 px-4 py-2 rounded-[8px]"
            >
              Front-End
            </button>
            <button
              onClick={() => setSelectedCategory("full-stack")}
              className="text-smallTextColor border border-solid border-smallTextColor hover:bg-smallTextColor hover:text-white ease-in duration-300 px-4 py-2 rounded-[8px]"
            >
              Full-Stack
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-6">
          {projectsByCategory.map((project, index) => (
            <div
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1200"
              key={index}
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-1"
            >
              <figure>
                <img className="rounded-[8px]" src={project.img} alt="" />
              </figure>

              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => handleActiveModal(project.id)}
                    className=" bg-smallTextColor text-white border border-solid border-white hover:bg-white hover:text-smallTextColor ease-in duration-300 px-4 py-2 rounded-[8px]"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button className="text-smallTextColor border border-solid border-smallTextColor hover:bg-smallTextColor hover:text-white ease-in duration-300 px-4 py-2 rounded-[8px]">
            <a href="" target="_blank" rel="noreferrer">
              See More
            </a>
          </button>
        </div>
      </div>

      {activeId && showModal && (
        <Modal activeId={activeId} setShowModal={setShowModal} />
      )}
    </section>
  );
};

export default Projects;
