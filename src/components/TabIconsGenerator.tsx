import React from "react";
import { LegalIcon, PointFilledIcon, PointIcon, SettingsIcon } from "../icons";
import DashboardIcon from "../icons/DashboardIcon";

interface TabIConsGeneratorProps {
  route: string;
  focused: boolean;
  color: string;
  size: number;
}

const TabIconsGenerator = (props: TabIConsGeneratorProps) => {
  let icon;
  switch (props.route) {
    case "Assistant":
      icon = props.focused ? (
        <LegalIcon width={28} height={28} color={props.color} />
      ) : (
        <LegalIcon width={28} height={28} color={props.color} />
      );
      break;

    case "Settings":
      icon = props.focused ? (
        <SettingsIcon width={28} height={28} color={props.color} />
      ) : (
        <SettingsIcon width={28} height={28} color={props.color} />
      );
      break;
  }

  return icon;
};

export default TabIconsGenerator;
