import Svg, { G, Circle, Line, SvgProps } from "react-native-svg";

const LineIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Circle cx="8" cy="2.5" r=".75"></Circle>
        <Circle cx="8" cy="8" r=".75"></Circle>
        <Circle cx="8" cy="13.5" r=".75"></Circle>
      </G>
    </Svg>
  );
};

export default LineIcon;
