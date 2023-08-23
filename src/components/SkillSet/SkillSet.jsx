import { icons } from "../../helpers/data";
import "./SkillSet.css";

const SkillSet = () => {
  return (
    <div className="flex">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <p>Follow me: </p>
        {icons.map((socialMedia) => (
          <div key={socialMedia.name}>
            <a
              href={socialMedia.url}
              className="custom_icon"
              target="_blank"
              rel="noreferrer"
            >
              {socialMedia.icon}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
