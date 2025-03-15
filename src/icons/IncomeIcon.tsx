import Svg, { Path, G, Line, SvgProps } from "react-native-svg";

const IncomeIcon = (props: SvgProps) => {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M14 9.846c-1-.923-3.667-1.23-3.667.616S14 11.385 14 13.23s-3 1.846-4 .615m2 .857V16m0-6.887V8M2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8"></Path>
        <Path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></Path>
      </G>
    </Svg>
  );
};

export default IncomeIcon;
