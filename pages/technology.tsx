import Head from "next/head";
import Technologies from "../features/technology";

const Technology = () => {
  return (
    <>
      <Head>
        <title>Technology | Abid Hasan</title>
      </Head>
      <div className="min-h-screen p-4 pt-8 text-white bg-black">
        <Technologies />
      </div>
    </>
  );
};

export default Technology;
