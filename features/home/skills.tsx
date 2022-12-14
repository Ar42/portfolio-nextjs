import { ChangeEvent, useState } from "react";

import { HOME_SKILLS_DATA } from "../../public/data/skill";

type SkillType = "Production" | "Personal" | "All";

const Skills = () => {
  const [skillType, setSkillType] = useState<SkillType>("All");
  const handleInputChange = (e: ChangeEvent<HTMLSelectElement>) => {
    //@ts-ignore
    setSkillType(e.target.value);
  };

  return (
    <div className="mb-12">
      <div className="justify-between flex-none lg:flex">
        <div className="flex justify-between lg:gap-x-3">
          <h2 className="section_heading">{skillType} Skills</h2>
          <div>
            <select
              onChange={handleInputChange}
              value={skillType}
              className="p-1 text-sm text-black rounded-sm outline-none"
            >
              <option value="All">All</option>
              <option value="Production">Production</option>
              <option value="Personal">Personal</option>
            </select>
          </div>
        </div>

        <div className="my-3 lg:my-0">
          <div className="flex items-center justify-between gap-4 mb-2">
            <h6 className="text-xs">Production Experience</h6>
            <div className="w-3 h-3 bg-red-500"></div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <h6 className="text-xs">Personal Experience</h6>
            <div className="w-3 h-3 bg-green-500"></div>
          </div>
        </div>
      </div>
      <h5 className="mb-2 text-base font-semibold">Language</h5>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {HOME_SKILLS_DATA.language.map((data) => (
          <h4
            className={`text-sm font- mb-1.5 rounded-md ${
              data.isProductionExperienced ? "bg-green-500" : "bg-red-500"
            } ${
              skillType === "All"
                ? "px-3 py-1.5"
                : skillType === "Production" && data.isProductionExperienced
                ? "px-3 py-1.5"
                : skillType === "Personal" &&
                  !data.isProductionExperienced &&
                  "px-3 py-1.5"
            }`}
            key={data.name}
          >
            {skillType === "All"
              ? data.name
              : skillType === "Production" && data.isProductionExperienced
              ? data.name
              : skillType === "Personal" &&
                !data.isProductionExperienced &&
                data.name}
          </h4>
        ))}
      </div>

      <h5 className="mb-2 text-base font-semibold">Web Dev</h5>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {HOME_SKILLS_DATA.webDev.map((data) => (
          <h4
            className={`text-sm font- mb-1.5 rounded-md ${
              data.isProductionExperienced ? "bg-green-500" : "bg-red-500"
            } ${
              skillType === "All"
                ? "px-3 py-1.5"
                : skillType === "Production" && data.isProductionExperienced
                ? "px-3 py-1.5"
                : skillType === "Personal" &&
                  !data.isProductionExperienced &&
                  "px-3 py-1.5"
            }`}
            key={data.name}
          >
            {skillType === "All"
              ? data.name
              : skillType === "Production" && data.isProductionExperienced
              ? data.name
              : skillType === "Personal" &&
                !data.isProductionExperienced &&
                data.name}
          </h4>
        ))}
      </div>

      <h5 className="mb-2 text-base font-semibold">Database</h5>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {HOME_SKILLS_DATA.database.map((data) => (
          <h4
            className={`text-sm font- mb-1.5 rounded-md ${
              data.isProductionExperienced ? "bg-green-500" : "bg-red-500"
            } ${
              skillType === "All"
                ? "px-3 py-1.5"
                : skillType === "Production" && data.isProductionExperienced
                ? "px-3 py-1.5"
                : skillType === "Personal" &&
                  !data.isProductionExperienced &&
                  "px-3 py-1.5"
            }`}
            key={data.name}
          >
            {skillType === "All"
              ? data.name
              : skillType === "Production" && data.isProductionExperienced
              ? data.name
              : skillType === "Personal" &&
                !data.isProductionExperienced &&
                data.name}
          </h4>
        ))}
      </div>

      <h5 className="mb-2 text-base font-semibold">Language</h5>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {HOME_SKILLS_DATA.other.map((data) => (
          <h4
            className={`text-sm font- mb-1.5 rounded-md ${
              data.isProductionExperienced ? "bg-green-500" : "bg-red-500"
            } ${
              skillType === "All"
                ? "px-3 py-1.5"
                : skillType === "Production" && data.isProductionExperienced
                ? "px-3 py-1.5"
                : skillType === "Personal" &&
                  !data.isProductionExperienced &&
                  "px-3 py-1.5"
            }`}
            key={data.name}
          >
            {skillType === "All"
              ? data.name
              : skillType === "Production" && data.isProductionExperienced
              ? data.name
              : skillType === "Personal" &&
                !data.isProductionExperienced &&
                data.name}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Skills;
