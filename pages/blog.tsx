import Head from "next/head";
import Link from "next/link";

import { LeftBackArrow } from "../components/Icons/icons";

import Featured from "../features/blog/featured";
import NonFeatured from "../features/blog/nonFeatured";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | Abid Hasan</title>
      </Head>
      <div className="min-h-screen p-8 text-white bg-black">
        <button className="flex items-center px-3 py-2 mb-4 text-base border rounded-md border-green-1000 hover:bg-green-1000 gap-x-2">
          <LeftBackArrow />
          <Link href="/">Back to Home</Link>
        </button>
        <Featured />
        <NonFeatured />
      </div>
    </>
  );
};

export default Blog;
