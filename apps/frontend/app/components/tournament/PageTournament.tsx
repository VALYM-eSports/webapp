"use client";
import { GeneralInitialStateType } from "@/app/utils/types/languageType/generalType";
import React from "react";
import { useSelector } from "react-redux";
import { FaTrophy } from "react-icons/fa";
import TournamentCard from "./TournamentCard";
import type { RootState } from "@/app/utils/store/app.store";

const PageTournament = () => {
  const { TOURNAMENT_TEXT } = useSelector((state: RootState) => state.language);

  return (
    <div>
      <div className="flex justify-center items-center font-bold md:justify-start gap-2">
        <FaTrophy size={38} />
        <h2 className="text-xl">{TOURNAMENT_TEXT.TITLE}</h2>
      </div>
      <div className="mt-10">
        <TournamentCard />
      </div>
    </div>
  );
};

export default PageTournament;
