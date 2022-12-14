import Head from "next/head";

import Featured from "../features/blog/featured";
import NonFeatured from "../features/blog/nonFeatured";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | Abid Hasan</title>
      </Head>
      <div className="min-h-screen p-4 pt-8 text-white bg-black">
        <NonFeatured />
        <Featured />
      </div>
    </>
  );
};

export default Blog;
