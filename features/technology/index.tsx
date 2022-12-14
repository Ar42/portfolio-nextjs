import { HOME_TECHNOLIGIES_DATA } from "../../public/data/home";

const Technologies = () => {
  return (
    <div className="mb-4">
      <h2 className="mb-8 text-2xl font-bold">Technologies I used to work</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {HOME_TECHNOLIGIES_DATA.map((data) => (
          <div className="p-4 bg-gray-800" key={data.name}>
            <h4 className="text-base font-semibold mb-1.5">{data.name}</h4>
            <p className="text-sm">{data.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
