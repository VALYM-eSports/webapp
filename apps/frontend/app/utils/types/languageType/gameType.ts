export interface GameType { // Ce type permet de définir le type de l'objet game_Text
    TITLE: string,
    SEARCH: string,
    [key: string]: string; // Ceci permet de selectionner n'importe quelle clé de l'objet game_Text
}