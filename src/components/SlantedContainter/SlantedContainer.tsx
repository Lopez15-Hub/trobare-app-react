import React from "react";
import "./SlantedContainter.css";
import { IonIcon } from "@ionic/react";
import { arrowForwardCircle } from "ionicons/icons";
const SlantedContainer: React.FC<{
  title: string;
  subtitle?: string;
  backgroundImage: string;
  inverted?: boolean;
  onClick: () => void;
}> = ({ title, subtitle, backgroundImage, onClick, inverted = false }) => {
  return (
    <div
      onClick={onClick}
      style={{
        background: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className={`flex  rounded-xl mx-5 ${
        inverted
          ? "items-end slanted-container-inverted justify-end "
          : "slanted-container"
      } `}
    >
      <div
        className={`bg-white text-box flex flex-col items-end w-fit h-fit justify-end rounded-2xl  p-2 ${
          inverted ? "absolute right-4 bottom-0" : ""
        }`}
      >
        <div className="flex  ">
          <div className="flex flex-col">
            <p className="text-xs text-gray-500">{title}</p>
            <h3 className=" text-sm text-orange-500 w-fit font-bold justify-center">
              {subtitle}
            </h3>
          </div>
          <IonIcon
            className="text-[26px] text-gray-500"
            icon={arrowForwardCircle}
          ></IonIcon>
        </div>
      </div>
    </div>
  );
};

export default SlantedContainer;
