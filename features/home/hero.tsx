import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex gap-x-20 items-center bg-gray-300 px-12 py-8 mb-12">
      <div>
        <h1 className="text-4xl font-black mb-4">
          Discover my Amazing Work Space!
        </h1>
        <h3 className="text-lg font-medium mb-4">
          <code>I build automation tools.</code>
        </h3>
        <button className="text-sm font-medium mb-4 bg-blue-700 text-white px-3 py-2 rounded-sm">
          Explore now
        </button>
      </div>

      <Image
        src="/images/arnob1.jpg"
        alt="Profile Picture"
        height={250}
        width={250}
        className="hidden lg:block"
      />
    </div>
  );
};

export default Hero;
