import Link from "next/link";

import { HOME_BLOG_DATA } from "../../public/data/home";

const Blogs = () => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <h2 className="section_heading">Blogs</h2>
        <button className="hidden mb-4 text-base font-medium lg:block text-green-1000 hover:underline">
          <Link href="/blog">view all</Link>
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {HOME_BLOG_DATA.slice(
          HOME_BLOG_DATA.length - 3,
          HOME_BLOG_DATA.length
        ).map((data) => (
          <div className="card_style_1" key={data.id}>
            <h4 className="text-base font-bold mb-1.5">{data.title}</h4>
            <p className="mb-2 text-xs">{data.update_time}</p>
            <p className="text-sm">{data.description}</p>
          </div>
        ))}
      </div>

      <button className="mt-4 mb-4 text-base font-medium lg:hidden lg:mt-0 text-green-1000 hover:underline">
        <Link href="/blog">view all</Link>
      </button>
    </div>
  );
};

export default Blogs;
