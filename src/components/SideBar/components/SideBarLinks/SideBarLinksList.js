import * as React from "react";
import {menuLink} from "@/constants/menuLink";
import SideBarLinks from "./SideBarLinks";
import { v4 as uuidv4 } from 'uuid';


export default function SideBarLinksList() {

  return <>
    {menuLink.map(link => {
      <SideBarLinks
        id={uuidv4()}
        icon={`@/assets/Icons/${link.text}.svg`}
        text={link.text}
        path={link.link}
      />
    })}
  </>;
}

