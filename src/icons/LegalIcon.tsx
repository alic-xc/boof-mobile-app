import Svg, { Path, G, Rect, Line, SvgProps } from "react-native-svg";

const LegalIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 14 14" {...props}>
      <G
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M.5 13.29H8m-1 0v-2.5H1.5v2.5"></Path>
        <Rect
          width="7.07"
          height="4.24"
          x="3.96"
          y="2.17"
          rx="1"
          transform="rotate(-45 7.499 4.294)"
        ></Rect>
        <Path d="m9 5.79l4.5 4.5"></Path>
      </G>
    </Svg>
  );
};

export default LegalIcon;
