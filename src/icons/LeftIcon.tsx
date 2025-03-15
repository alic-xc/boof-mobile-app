import Svg, { Path, Line, SvgProps } from "react-native-svg";

const LeftIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m9 6l6 6l-6 6"
      ></Path>
    </Svg>
  );
};

export default LeftIcon;
