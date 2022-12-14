import Link from "next/link";
import { HOME_TECHNOLIGIES_DATA } from "../../public/data/home";

const Technologies = () => {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between">
        <h2 className="section_heading">Technologies I used to work</h2>
        <button className="hidden mb-4 text-base font-medium lg:block text-green-1000 hover:underline">
          <Link href="/technology"> view details</Link>
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {HOME_TECHNOLIGIES_DATA.map((data) => (
          <h4
            className="text-base font-semibold mb-1.5 bg-gray-800 px-3 py-1.5 rounded-md"
            key={data.name}
          >
            {data.name}
          </h4>
        ))}
      </div>

      <button className="mt-4 mb-4 text-base font-medium lg:hidden lg:mt-0 text-green-1000 hover:underline">
        <Link href="/technology">view details</Link>
      </button>
    </div>
  );
};

export default Technologies;
