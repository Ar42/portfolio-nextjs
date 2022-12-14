import Image from "next/image";

interface HeroINT {
  setSelectedMenu: Function;
}

const Hero = ({ setSelectedMenu }: HeroINT) => {
  return (
    <div className="flex items-center px-12 py-8 mb-12 bg-gray-700 gap-x-20">
      <div>
        <h1 className="mb-8 text-4xl font-black">
          Discover my Amazing Work Space!
        </h1>
        <h3 className="mb-6 text-lg font-medium">
          <code>I love to build Front-end applications</code>
        </h3>
        <button
          className="px-3 py-2 mb-4 text-sm font-medium text-white bg-blue-700 rounded-sm"
          onClick={() => {
            setSelectedMenu("Project");
          }}
        >
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
