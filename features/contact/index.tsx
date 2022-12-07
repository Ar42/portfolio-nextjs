import Head from "next/head";
import Info from "./info";
import Message from "./message";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Abid Hasan</title>
      </Head>

      <div className="p-4 shadow-xl min-h-screen max-h-screen overflow-y-auto scrollbar-hide">
        <Info />
        <Message />
      </div>
    </>
  );
};

export default Contact;
