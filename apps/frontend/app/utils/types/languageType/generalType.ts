import { GameType } from "./gameType"
import { HeaderType } from "./headerType"
import { TournamentType } from "./tournamentType"

export interface GeneralInitialStateType { // Ce Type permet de definir le type de données de notre State de notre reducer
    GAME_TEXT: GameType
    HEADER_TEXT: HeaderType
    TOURNAMENT_TEXT: TournamentType
    selectedLanguage: string
}