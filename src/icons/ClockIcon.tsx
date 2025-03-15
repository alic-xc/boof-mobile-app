import Svg, { Path, G, Circle, Line, SvgProps } from "react-native-svg";

const ClockIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <G fill="none" stroke="currentColor" strokeWidth="1.5">
        <Circle cx="12" cy="12" r="10"></Circle>
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l2.5 2.5"
        ></Path>
      </G>
    </Svg>
  );
};

export default ClockIcon;
