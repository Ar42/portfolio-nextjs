import Head from "next/head";
import Hero from "./hero";
import History from "./history";
import Technologies from "./technologies";

interface HomeComponentINT {
  setSelectedMenu: Function;
}

const HomeComponent = ({ setSelectedMenu }: HomeComponentINT) => {
  return (
    <>
      <Head>
        <title>Home | Abid Hasan</title>
      </Head>
      <div className="p-4 shadow-sm lg:min-h-screen lg:max-h-screen lg:overflow-y-auto lg:scrollbar-hide">
        <Hero setSelectedMenu={setSelectedMenu} />
        <History />
        <Technologies />
      </div>
    </>
  );
};

export default HomeComponent;
