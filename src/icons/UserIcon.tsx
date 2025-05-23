import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const UserIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <Path fill="currentColor" d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5"></Path>
      <Path
        fill="currentColor"
        d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m7.993 22.926A5 5 0 0 0 19 20h-6a5 5 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0"
      ></Path>
    </Svg>
  );
};

export default UserIcon;
