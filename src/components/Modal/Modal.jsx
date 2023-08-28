/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { myProjects } from "../../helpers/data";
import "./Modal.css";

export const Modal = ({ activeId, setShowModal }) => {
  const showModalRef = useRef();
  const projectToShow = myProjects.find((project) => project.id === activeId);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!showModalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };

    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div className="modal__box   bg-headingColor bg-opacity-40">
      <div
        ref={showModalRef}
        className=" w-11/12 md:max-w-[600px] md:w-full h-[80%] absolute top-1/2 left-1/2 z-888 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5 overflow-y-scroll"
      >
        <figure>
          <img className="rounded-[8px]" src={projectToShow.img} alt="" />
        </figure>
        <div>
          <h2 className="text-2xl text-headingColor font-[700] my-5">
            {projectToShow.title}
          </h2>

          <p className="text-[15px] leading-7 text-smallTextColor">
            {projectToShow.info}
          </p>
          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-[18px] font-[700]">
              Technologies
            </h4>
            {projectToShow.stack.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a href={projectToShow.url} target="_blank" rel="noreferrer">
              <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
                Live Site
              </button>
            </a>
            <a href={projectToShow.source} target="_blank" rel="noreferrer">
              <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
                Source Code
              </button>
            </a>
          </div>

          {/* CLOSE */}
          <button
            onClick={() => setShowModal(false)}
            className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] tex-[25px] flex items-center justify-center rounded-[3px] leading-8 cursor-pointer"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};
