import Head from "next/head";
import Link from "next/link";

import { PROJECT_DATA } from "../../public/data/project/project";

const Project = () => {
  return (
    <>
      <Head>
        <title>Project | Abid Hasan</title>
      </Head>

      <div className="p-4 shadow-xl lg:min-h-screen lg:max-h-screen lg:overflow-y-auto lg:scrollbar-hide">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PROJECT_DATA.map((data) => (
            <div className="bg-gray-600 rounded-md" key={data.name}>
              <div className="relative px-6 pt-6 pb-3 lg:flex gap-x-10">
                <div className="absolute w-8 bg-gray-200 h-7 -top-1 -left-1"></div>
                <div className="lg:w-4/12">
                  <h4 className="text-xl font-black lg:mb-3">{data.name}</h4>
                  <h4 className="mb-2 text-xs font-medium lg:mb-0">
                    {data.location_origin} Project
                  </h4>
                </div>
                <div className="lg:w-8/12">
                  <p className="text-sm">{data.description}</p>
                </div>
              </div>

              <p className="px-6 pt-3 pb-6 mb-1 text-sm font-semibold border-t border-black">
                <span className="font-semibold">Live url: </span>

                <Link
                  href="https://www.wellteam.me"
                  target="blank"
                  className="cursor-pointer text-green-1000 hover:underline"
                >
                  {data.live_url}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
