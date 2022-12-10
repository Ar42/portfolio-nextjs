import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex items-center px-12 py-8 mb-12 bg-gray-700 gap-x-20">
      <div>
        <h1 className="mb-4 text-4xl font-black">
          Discover my Amazing Work Space!
        </h1>
        <h3 className="mb-4 text-lg font-medium">
          <code>I build automation tools.</code>
        </h3>
        <button className="px-3 py-2 mb-4 text-sm font-medium text-white bg-blue-700 rounded-sm">
          Explore now
        </button>
      </div>

      <div className="relative hidden w-48 h-48 lg:block">
        <Image
          src="/images/arnob1.jpg"
          alt="Profile Picture"
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL="/images/arnob1.jpg"
        />
      </div>
    </div>
  );
};

export default Hero;
