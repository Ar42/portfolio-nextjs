import { HOME_SKILLS_DATA } from "../../public/data/skill";

const Skills = () => {
  return (
    <div className="mb-12">
      <div className="flex justify-between">
        <h2 className="section_heading">Skills</h2>
        <div>
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
            className={`text-sm font- mb-1.5 px-3 py-1.5 rounded-md ${
              data.isProductionExperienced ? "bg-green-500" : "bg-red-500"
            }`}
            key={data.name}
          >
            {data.name}
          </h4>
        ))}
      </div>

      <h5 className="mb-2 text-base font-semibold">Web Dev</h5>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {HOME_SKILLS_DATA.webDev.map((data) => (
          <h4
            className={`text-sm font- mb-1.5 px-3 py-1.5 rounded-md ${
              data.isProductionExperienced ? "bg-green-500" : "bg-red-500"
            }`}
            key={data.name}
          >
            {data.name}
          </h4>
        ))}
      </div>

      <h5 className="mb-2 text-base font-semibold">Database</h5>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {HOME_SKILLS_DATA.database.map((data) => (
          <h4
            className={`text-sm font- mb-1.5 px-3 py-1.5 rounded-md ${
              data.isProductionExperienced ? "bg-green-500" : "bg-red-500"
            }`}
            key={data.name}
          >
            {data.name}
          </h4>
        ))}
      </div>

      <h5 className="mb-2 text-base font-semibold">Language</h5>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {HOME_SKILLS_DATA.other.map((data) => (
          <h4
            className={`text-sm font- mb-1.5 px-3 py-1.5 rounded-md ${
              data.isProductionExperienced ? "bg-green-500" : "bg-red-500"
            }`}
            key={data.name}
          >
            {data.name}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Skills;
