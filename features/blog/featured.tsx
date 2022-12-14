import Link from "next/link";

import { HOME_BLOG_DATA } from "../../public/data/home";

const Featured = () => {
  return (
    <div className="mb-12">
      <h2 className="section_heading">Featured Blogs</h2>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {HOME_BLOG_DATA.map(
          (data) =>
            data.isFeatured && (
              <div className="card_style_1" key={data.id}>
                <h4 className="text-base font-bold mb-1.5">{data.title}</h4>
                <p className="mb-2 text-xs">{data.update_time}</p>
                <p className="text-sm">{data.description}</p>
              </div>
            )
        )}
      </div>

      <button className="mt-4 mb-4 text-base font-medium lg:hidden lg:mt-0 text-green-1000 hover:underline">
        <Link href="/blog">view details</Link>
      </button>
    </div>
  );
};

export default Featured;
