import Svg, { Path, G, Circle, Line, SvgProps } from "react-native-svg";

const TaxIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        color="currentColor"
      >
        <Path d="M2 8.57c0-1.197.482-1.93 1.48-2.486l4.11-2.287C9.743 2.6 10.82 2 12 2s2.257.6 4.41 1.797l4.11 2.287C21.517 6.64 22 7.373 22 8.57c0 .324 0 .487-.035.62c-.186.7-.821.811-1.434.811H3.469c-.613 0-1.247-.11-1.434-.811C2 9.056 2 8.893 2 8.569M4 10v8.5M8 10v8.5m3 0H5a3 3 0 0 0-3 3a.5.5 0 0 0 .5.5H11m10.5-7.5l-7 7"></Path>
        <Circle cx="15.25" cy="15.25" r=".75"></Circle>
        <Circle cx="20.75" cy="20.75" r=".75"></Circle>
      </G>
    </Svg>
  );
};

export default TaxIcon;
