import Svg, { Path, Line, SvgProps } from "react-native-svg";

export const PointFilledIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7"
      ></Path>
    </Svg>
  );
};

export default PointFilledIcon;
