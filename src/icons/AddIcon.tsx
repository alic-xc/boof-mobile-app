import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const AddIcon = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <Path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
    </Svg>
  );
};

export default AddIcon;
