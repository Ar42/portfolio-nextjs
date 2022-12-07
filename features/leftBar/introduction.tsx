import Image from "next/image";
import LineProgressbar from "../../components/lineProgressbar";

import {
  LEFTBAR_INTRODUCTION_DATA,
  LEFTBAR_LANGUAGE_PERCENTAGE_DATA,
} from "../../public/data/leftBar";

const MAX_WIDTH: number = 260;

const Introduction = () => {
  return (
    <div className="">
      <div className="mx-auto w-max">
        <Image
          src="/images/arnob2.jpg"
          alt="Profile Picture"
          height={100}
          width={130}
          layout="fixed"
          // className="rounded-full"
        />
      </div>
      <p className="text-sm font-bold text-center mt-2">
        {LEFTBAR_INTRODUCTION_DATA.name}
      </p>
      <p className="text-sm text-center">
        {LEFTBAR_INTRODUCTION_DATA.job_title}
      </p>

      <div className="mt-8">
        <p className="text-sm">
          <span className="font-medium">Residence : </span>
          <span>{LEFTBAR_INTRODUCTION_DATA.residence}</span>
        </p>

        <p className="text-sm">
          <span className="font-medium">City : </span>
          <span>{LEFTBAR_INTRODUCTION_DATA.city}</span>
        </p>

        <p className="text-sm">
          <span className="font-medium">Age : </span>
          <span>{LEFTBAR_INTRODUCTION_DATA.age}</span>
        </p>
      </div>

      <h2 className="text-sm font-semibold mt-6 mb-2">Language(s)</h2>

      <p className="text-sm mb-1">Bangla</p>
      <LineProgressbar
        className="bg-green-600"
        width={(MAX_WIDTH / 100) * LEFTBAR_LANGUAGE_PERCENTAGE_DATA.Bengali}
        containerClassName="bg-green-200"
      />

      <p className="text-sm mb-1 mt-2">English</p>
      <LineProgressbar
        className="bg-blue-600"
        width={(MAX_WIDTH / 100) * LEFTBAR_LANGUAGE_PERCENTAGE_DATA.English}
        containerClassName="bg-blue-200"
      />
    </div>
  );
};

export default Introduction;
