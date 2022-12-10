import Image from "next/image";
import { useState } from "react";
import LineProgressbar from "../../components/lineProgressbar";

import {
  LEFTBAR_INTRODUCTION_DATA,
  LEFTBAR_LANGUAGE_PERCENTAGE_DATA,
} from "../../public/data/leftBar";

const MAX_WIDTH: number = 260;

const Introduction = () => {
  const [isShowHover, setIsShowHover] = useState<boolean>(false);
  const handleAvailibityHover = () => {
    setTimeout(() => {
      setIsShowHover(false);
    }, 3000);
    setIsShowHover(true);
  };

  return (
    <>
      <div className="relative mx-auto w-36 h-36">
        <Image
          src="/images/arnob2.jpg"
          alt="Profile Picture"
          fill
          className="object-cover rounded-full"
          placeholder="blur"
          blurDataURL="/images/arnob2.jpg"
        />
        <button
          onClick={handleAvailibityHover}
          className={`absolute w-4 h-4 ${
            !LEFTBAR_INTRODUCTION_DATA.isAvailable
              ? "bg-red-700"
              : "bg-green-700"
          } ${
            isShowHover ? "hidden" : "block"
          } border-2 border-white rounded-full right-3 bottom-3.5`}
        ></button>

        {isShowHover && (
          <div
            className={`absolute px-1 py-0.5 ${
              !LEFTBAR_INTRODUCTION_DATA.isAvailable
                ? "bg-red-700"
                : "bg-green-700"
            } rounded-sm bottom-6 right-1`}
          >
            <p className="text-xs">
              {!LEFTBAR_INTRODUCTION_DATA.isAvailable
                ? "Not available to be hired right now"
                : "Available to be hired right now"}
            </p>
            <div
              className={`${
                !LEFTBAR_INTRODUCTION_DATA.isAvailable
                  ? "bg-red-700"
                  : "bg-green-700"
              } h-5 w-5 absolute rotate-45 bottom-[0.1px] right-1`}
            ></div>
          </div>
        )}
      </div>
      <p className="mt-2 text-sm font-bold text-center">
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

      <h2 className="mt-6 mb-2 text-sm font-semibold">Language(s)</h2>

      <p className="mb-1 text-sm">Bangla</p>
      <LineProgressbar
        className="bg-green-600"
        width={(MAX_WIDTH / 100) * LEFTBAR_LANGUAGE_PERCENTAGE_DATA.Bengali}
        containerClassName="bg-green-200"
      />

      <p className="mt-2 mb-1 text-sm">English</p>
      <LineProgressbar
        className="bg-blue-600"
        width={(MAX_WIDTH / 100) * LEFTBAR_LANGUAGE_PERCENTAGE_DATA.English}
        containerClassName="bg-blue-200"
      />
    </>
  );
};

export default Introduction;
