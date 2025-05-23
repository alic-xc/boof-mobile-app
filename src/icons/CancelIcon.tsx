import Svg, { Path, G, SvgProps } from "react-native-svg";

const CancelIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 26 26" {...props}>
      <G fill="currentColor">
        <Path d="M10.172 17.243a1 1 0 1 1-1.415-1.415l7.071-7.07a1 1 0 1 1 1.415 1.414z"></Path>
        <Path d="M8.757 10.172a1 1 0 0 1 1.415-1.415l7.07 7.071a1 1 0 1 1-1.414 1.415z"></Path>
        <Path
          fillRule="evenodd"
          d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"
          clipRule="evenodd"
        ></Path>
      </G>
    </Svg>
  );
};

export default CancelIcon;
