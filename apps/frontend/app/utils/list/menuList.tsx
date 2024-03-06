import { MenuType } from "../types/menuType";
import { IoLogoGameControllerB } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa6";



export const menuList: MenuType[] = [
    {
        name: "HOME",
        path: "/",
        icon: <IoHome/>,
    },
    {
        name: "GAMES",
        path: "/games",
        icon: <IoLogoGameControllerB/>,
    },
    {
        name: "TOURNAMENT",
        path: "/tournament",
        icon: <FaTrophy/>,
    },
    {
        name: "STATISTICAL",
        path: "/statistical",
        icon: <FaTrophy/>,
    }
]
