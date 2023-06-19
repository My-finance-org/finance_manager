import React from "react";
import BaseTitle from "../shared/BaseTitle";
import dateFormater from "@/helpers/dateFormater";
import SVG from "react-inlinesvg";
import DoubleRightArrows from "@/assets/Icons/DoubleRightArrows.svg";
import NotificationIcon from "@/assets/Icons/NotificationIcon.svg";
import SearchInput from "../Inputs/SearchInput";
import "./Header.scss";

const Header = () => {
  const name = "Tanzir";
  return (
    <div className="header">
      <div className="container">
        <div className="left-side">
          <BaseTitle
            text={`Hello ${name}`}
            fontSize={"24"}
            classes={"title"}
          />
          <div className="date">
            <SVG src={DoubleRightArrows} />
            <span>{dateFormater(new Date())}</span>
          </div>
        </div>
        <div className="right-side">
          <div className="notification-wrapper">
            <SVG
              src={NotificationIcon}
              className="notification-icon"
            />
          </div>
          <SearchInput
            placeHolder="Search"
            value=""
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
