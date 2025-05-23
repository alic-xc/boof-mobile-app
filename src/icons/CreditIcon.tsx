import Svg, { Path, SvgProps } from "react-native-svg";

const CreditIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="currentColor"
        d="M467 45.2A44.45 44.45 0 0 0 435.29 32H312.36a30.63 30.63 0 0 0-21.52 8.89L45.09 286.59a44.82 44.82 0 0 0 0 63.32l117 117a44.83 44.83 0 0 0 63.34 0l245.65-245.6A30.6 30.6 0 0 0 480 199.8v-123a44.24 44.24 0 0 0-13-31.6M384 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
      ></Path>
    </Svg>
  );
};
export default CreditIcon;
