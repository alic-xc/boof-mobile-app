import Svg, { Path, SvgProps } from "react-native-svg";

const CollageIcon = (props:SvgProps) => {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M19.4 20H4.6a.6.6 0 0 1-.6-.6V4.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6v14.8a.6.6 0 0 1-.6.6ZM11 12V4m-7 8h16"
      ></Path>
    </Svg>
  );
}

export default CollageIcon;