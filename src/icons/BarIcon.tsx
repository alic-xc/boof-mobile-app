import Svg, { Path, SvgProps } from "react-native-svg";

const BarIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="-5 -4 24 24" {...props}>
      <Path
        fill="currentColor"
        d="M1 0a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1m12 4a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1M7 8a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1"
      ></Path>
    </Svg>
  );
};

export default BarIcon;
