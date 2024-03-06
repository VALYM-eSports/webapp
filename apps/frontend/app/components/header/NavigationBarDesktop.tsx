"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GeneralInitialStateType } from "@/app/utils/types/languageType/generalType";
import { changeLanguage } from "@/app/utils/store/language.slice";
import Image from "next/image";
import Navigation from "./Navigation";
import type { RootState } from "@/app/utils/store/app.store";

const NavigationBarDesktop = () => {
  const { HEADER_TEXT, selectedLanguage } = useSelector(
    (state: RootState) => state.language
  );
  const dispatch = useDispatch();

  const handleChangeLanguage = () => {
    dispatch(changeLanguage());
  };

  return (
    <nav>
      <div className="grid grid-cols-3 gap-2 w-screen">
        <div className="flex justify-start items-center">
          <Image
            src="/images/logo-valym.png"
            alt="une Image"
            width={50}
            height={50}
          />{" "}
        </div>
        <Navigation headerText={HEADER_TEXT} />
        <div className="flex justify-end items-center gap-3 pr-5">
          <button>
            <Image
              src="/images/user.png"
              alt="une Image"
              width={25}
              height={25}
            />
          </button>
          {selectedLanguage === "fr" && (
            <button onClick={handleChangeLanguage}>
              <p className="text-md font-bold">FR</p>
            </button>
          )}
          {selectedLanguage === "en" && (
            <button onClick={handleChangeLanguage}>
              <p className="text-md font-bold">EN</p>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBarDesktop;
