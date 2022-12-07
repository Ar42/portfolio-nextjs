import Head from "next/head";
import { HISTORY_EDUCATION_DATA } from "../../public/data/history/education";
import { HISTORY_WORK_HISTORY_DATA } from "../../public/data/history/workHistory";

const History = () => {
  return (
    <>
      <Head>
        <title>History | Abid Hasan</title>
      </Head>
      <div className="p-4 shadow-xl lg:flex gap-x-10 min-h-screen max-h-screen overflow-y-auto scrollbar-hide">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="text-base font-bold mb-4">Education</h2>

          <div className="flex gap-x-10">
            <div>
              {HISTORY_EDUCATION_DATA.map((data) => (
                <div key={data.institution}>
                  <div className="bg-gray-200 p-4 rounded-md mb-4 relative">
                    <p className="text-base font-medium mb-2">
                      {data.institution}
                    </p>
                    <p className="text-base font-normal mb-2 italic">
                      {data.degree}
                    </p>
                    <p className="text-base font-normal mb-2 bg-gray-300 px-3 py-0.5 w-max rounded-3xl">
                      {data.duration}
                    </p>
                    <p className="text-base font-normal mb-2">
                      {data.description}
                    </p>
                    <div className="absolute top-0 -right-10 transform translate-x-1/2 h-4 w-4 bg-blue-400 rounded-full"></div>
                    <div className="absolute top-10 right-0 transform translate-x-1/2 h-3 w-3 bg-gray-200 rotate-45"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-2 h-auto bg-black"></div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-base font-bold mb-4">Work History</h2>

          <div className="flex gap-x-10">
            <div>
              {HISTORY_WORK_HISTORY_DATA.map((data) => (
                <div key={data.duration}>
                  <div className="bg-gray-200 p-4 rounded-md mb-4 relative">
                    <p className="text-base font-medium mb-2">{data.company}</p>
                    <p className="text-base font-normal mb-2 italic">
                      {data.position}
                    </p>
                    <p className="text-base font-normal mb-2 bg-gray-300 px-3 py-0.5 w-max rounded-3xl">
                      {data.duration}
                    </p>
                    <p className="text-base font-normal mb-2">
                      {data.description}
                    </p>
                    <div className="absolute top-0 -right-10 transform translate-x-1/2 h-4 w-4 bg-blue-400 rounded-full"></div>
                    <div className="absolute top-10 right-0 transform translate-x-1/2 h-3 w-3 bg-gray-200 rotate-45"></div>
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
