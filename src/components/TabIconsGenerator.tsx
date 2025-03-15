import React from "react";
import { PointFilledIcon, PointIcon, SettingsIcon } from "../icons";
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
    case "Home":
      icon = props.focused ? (
        <DashboardIcon width={28} height={28} color={props.color} />
      ) : (
        <DashboardIcon width={28} height={28} color={props.color} />
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
