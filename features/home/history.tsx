import { HOME_HISTORY_DATA } from "../../public/data/home";

const History = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mb-12">
      {HOME_HISTORY_DATA.map((data) => (
        <div
          className="flex gap-x-2 items-center mb-2 lg:mb-0"
          key={data.label}
        >
          <p className="text-2xl font-bold">{data.duration}</p>
          <p className="text-sm">{data.label}</p>
        </div>
      ))}
    </div>
  );
};

export default History;
