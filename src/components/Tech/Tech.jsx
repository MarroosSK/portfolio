import { skillDesc, skillSet } from "../../helpers/data";

const Tech = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center">
        {/* Info */}
        <div>
          <div className="flex flex-col justify-between">
            <h6 className="text-[#0D6EFD]">Knowledge</h6>
            <p>{skillDesc}</p>
            <div className="mt-3 flex justify-center items-center flex-wrap gap-4">
              {skillSet.map((skill) => (
                <div
                  className="flex flex-col justify-center items-center mt-4"
                  key={skill.id}
                >
                  <p>{skill.name}</p>
                  <div
                    key={skill.id}
                    className="flex justify-center items-center p-2 w-[45px]"
                    style={{
                      backgroundColor: "#111111",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="flex flex-col justify-center items-center ">
                      <div className="text-white ">{skill.icon}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
