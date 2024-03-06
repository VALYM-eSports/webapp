import { createSlice } from "@reduxjs/toolkit";
import { HeaderType } from "../types/languageType/headerType";
import headerJsonData from "../../../public/locales/fr/header.json";
import gameJsonData from "../../../public/locales/fr/games.json";
import tournamentJsonData from "../../../public/locales/fr/tournament.json";
import { GeneralInitialStateType } from "../types/languageType/generalType";
import { GameType } from "../types/languageType/gameType";
import { TournamentType } from "../types/languageType/tournamentType";

const navigationLanguageData: HeaderType = headerJsonData;
const gameLanguageData: GameType = gameJsonData;
const tournamentLanguageData: TournamentType = tournamentJsonData;

const initialState: GeneralInitialStateType = {
  GAME_TEXT: gameLanguageData,
  HEADER_TEXT: navigationLanguageData,
  TOURNAMENT_TEXT: tournamentLanguageData,
  selectedLanguage: "fr",
};

const languageSlice = createSlice({
  name: "Language",
  initialState,
  reducers: {
    changeLanguage: (state) => {
      state.selectedLanguage = state.selectedLanguage === "fr" ? "en" : "fr";
      const headerJsonData: HeaderType = require(
        `../../../public/locales/${state.selectedLanguage}/header.json`
      );
      const gameJsonData: GameType = require(
        `../../../public/locales/${state.selectedLanguage}/games.json`
      );
      const tournamentJsonData: TournamentType = require(
        `../../../public/locales/${state.selectedLanguage}/tournament.json`
      );
      state.HEADER_TEXT = headerJsonData;
      state.GAME_TEXT = gameJsonData;
      state.TOURNAMENT_TEXT = tournamentJsonData;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
