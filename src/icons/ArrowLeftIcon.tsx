import Svg, { Path, SvgProps } from "react-native-svg";
import React from "react";

const ArrowLeftIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"
      ></Path>
    </Svg>
  );
};

export default ArrowLeftIcon;
