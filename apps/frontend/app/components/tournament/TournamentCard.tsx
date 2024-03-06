import Image from "next/image";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";

const TournamentCard = () => {
  return (
    <div className="flex justify-center items-center sm:flex-none sm:justify-normal sm:inline">
      <div className="sm:w-96 w-[95%] h-48 bg-[#30255B] rounded-badge shadow-xl grid grid-cols-3 gap-4">
        <div className="flex justify-end items-center relative">
          <Image
            src="/images/MarioKart.jpg"
            alt="heyy"
            fill={true}
            quality={100}
            className="rounded-l-lg overflow-hidden"
          />
        </div>
        <div className="col-span-2 h-full relative">
          <div className="flex flex-col h-full">
            <div className="flex justify-center items-center pt-3">
              <h2 className="font-bold">Mario Kart Tournament</h2>
            </div>
            <div className="flex justify-start items-center gap-2 pt-4">
              <IoLogoGameControllerB size={20} />
              <p> Mario Kart Switch</p>
            </div>
            <div className="flex justify-starts items-center gap-2 ">
              <FaRegCalendarAlt size={20} />
              <p>La date</p>
            </div>
            <div className="h-full flex flex-col justify-end">
              <div className="self-end mr-3 mb-4 flex">
                <div className="absolute left-0">
                  <p className="text-success text-xs font-bold">
                    ✓ Inscription ouverte
                  </p>
                </div>
                <button className="btn min-h-0 h-5 btn-primary btn-sm w-20 text-xs">
                  Voir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
