import Head from "next/head";
import { HISTORY_EDUCATION_DATA } from "../../public/data/history/education";
import { HISTORY_WORK_HISTORY_DATA } from "../../public/data/history/workHistory";

const History = () => {
  return (
    <>
      <Head>
        <title>History | Abid Hasan</title>
      </Head>
      <div className="p-4 shadow-xl lg:flex gap-x-10 lg:min-h-screen lg:max-h-screen lg:overflow-y-auto lg:scrollbar-hide">
        <div className="mb-6 lg:w-1/2 lg:mb-0">
          <h2 className="mb-4 text-base font-bold">Education</h2>

          <div className="flex gap-x-10">
            <div>
              {HISTORY_EDUCATION_DATA.map((data) => (
                <div key={data.institution}>
                  <div className="relative p-4 mb-4 bg-gray-200 rounded-md">
                    <p className="mb-2 text-base font-medium">
                      {data.institution}
                    </p>
                    <p className="mb-2 text-base italic font-normal">
                      {data.degree}
                    </p>
                    <p className="text-base font-normal mb-2 bg-gray-300 px-3 py-0.5 w-max rounded-3xl">
                      {data.duration}
                    </p>
                    <p className="mb-2 text-base font-normal">
                      {data.description}
                    </p>
                    <div className="absolute top-0 w-4 h-4 transform translate-x-1/2 bg-blue-400 rounded-full -right-10"></div>
                    <div className="absolute right-0 w-3 h-3 transform rotate-45 translate-x-1/2 bg-gray-200 top-10"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-2 h-auto bg-black"></div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="mb-4 text-base font-bold">Work History</h2>

          <div className="flex gap-x-10">
            <div>
              {HISTORY_WORK_HISTORY_DATA.map((data) => (
                <div key={data.duration}>
                  <div className="relative p-4 mb-4 bg-gray-200 rounded-md">
                    <p className="mb-2 text-base font-medium">{data.company}</p>
                    <p className="mb-2 text-base italic font-normal">
                      {data.position}
                    </p>
                    <p className="text-base font-normal mb-2 bg-gray-300 px-3 py-0.5 w-max rounded-3xl">
                      {data.duration}
                    </p>
                    <p className="mb-2 text-base font-normal">
                      {data.description}
                    </p>
                    <div className="absolute top-0 w-4 h-4 transform translate-x-1/2 bg-blue-400 rounded-full -right-10"></div>
                    <div className="absolute right-0 w-3 h-3 transform rotate-45 translate-x-1/2 bg-gray-200 top-10"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-2 h-auto bg-black"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
