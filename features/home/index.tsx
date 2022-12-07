import Head from "next/head";
import Hero from "./hero";
import History from "./history";
import Technologies from "./technologies";

const HomeComponent = () => {
  return (
    <>
      <Head>
        <title>Home | Abid Hasan</title>
      </Head>
      <div className="p-4 shadow-xl min-h-screen max-h-screen overflow-y-auto scrollbar-hide">
        <Hero />
        <History />
        <Technologies />
      </div>
    </>
  );
};

export default HomeComponent;
