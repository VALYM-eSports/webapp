"use client";
import { GeneralInitialStateType } from "@/app/utils/types/languageType/generalType";
import React from "react";
import { IoLogoGameControllerB } from "react-icons/io";
import { useSelector } from "react-redux";
import { imageGameList } from "../../utils/games/GameList";
import Image from "next/image";
import type { RootState } from "@/app/utils/store/app.store";

//TODO : Remplace ImageGameList par des images locales pour pouvoir utiliser Image de next ensuite

const PageGame = () => {
  const { GAME_TEXT } = useSelector((state: RootState) => state.language);
  return (
    <>
      <div className="flex justify-center items-center gap-2 font-bold md:justify-start">
        <IoLogoGameControllerB size={38} />
        <h2 className="text-xl">{GAME_TEXT.TITLE}</h2>
      </div>
      <div className="flex justify-center items-center sm:justify-start">
        <input
          type="text"
          placeholder={GAME_TEXT.SEARCH}
          className="input input-bordered input-primary input-sm w-full max-w-xs mt-5 shadow-xl"
        />
      </div>
      <div className="flex justify-center items-center gap-4 flex-col px-5 py-5 md:flex-wrap md:flex-row md:justify-start md:px-0">
        {imageGameList.map((image, index) => (
          <div key={index} className="md:w-[150px] md:h-[250px] h-40 w-[80%] ">
            <Image
              src={image.url}
              alt={image.name}
              width={300}
              height={100}
              className="md:object-cover h-full rounded-md shadow-md transition ease-in-out duration-300 md:hover:scale-105 md:brightness-75 md:hover:brightness-100"
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default PageGame;

//md:w-[200px] md:h-[300px] h-40 w-[80%]
