"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GeneralInitialStateType } from "@/app/utils/types/languageType/generalType";
import { changeLanguage } from "@/app/utils/store/language.slice";
import Image from "next/image";
import Navigation from "./Navigation";
import type { RootState } from "@/app/utils/store/app.store";

const NavigationBarMobile = () => {
  // -------- STATE -----------
  const { HEADER_TEXT, selectedLanguage } = useSelector(
    (state: RootState) => state.language
  );
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  // -------- FONCTION -----------
  const handleChangeLanguage = () => {
    dispatch(changeLanguage());
  };

  const handleOpenNavigation = () => {
    setOpen(true);
  };

  const handleCloseNavigation = () => {
    setOpen(false);
  };

  return (
    <nav>
      <div className="grid grid-cols-3 gap-2 w-full ">
        <div className="flex justify-start items-center gap-3 pl-2">
          {open ? (
            <button onClick={handleCloseNavigation}>
              <Image
                src="/images/close.png"
                alt="une Image"
                width={20}
                height={20}
              />
            </button>
          ) : (
            <button onClick={handleOpenNavigation}>
              <Image
                src="/images/menu.png"
                alt="une Image"
                width={20}
                height={20}
              />
            </button>
          )}
          <Image
            src="/images/logo-valym.png"
            alt="une Image"
            width={50}
            height={50}
          />
        </div>
        <div></div>
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
      {open && (
        <div className="h-screen mt-10 -mb-10 z-10">
          <Navigation
            headerText={HEADER_TEXT}
            handleClose={handleCloseNavigation}
          />
        </div>
      )}
    </nav>
  );
};

export default NavigationBarMobile;
