import React from "react";
import { menuList } from "@/app/utils/list/menuList";
import { MenuType } from "@/app/utils/types/menuType";
import { HeaderType } from "@/app/utils/types/languageType/headerType";
import Link from "next/link";

interface propsType {
  headerText: HeaderType;
  handleClose?: () => void;
}

const Navigation = (props: propsType) => {
  return (
    <>
      <ul className="flex sm:justify-center justify-start gap-5 items-center sm:flex-row flex-col">
        {menuList.map((menu: MenuType, index: number) => (
          <li
            className="transtion ease-in-out hover:text-accent hover:scale-105 py-3 px-3"
            key={index}
          >
            <Link href={menu.path} onClick={props?.handleClose}>
                <p className="sm:text-sm text-xl">{props.headerText[menu.name]}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navigation;
