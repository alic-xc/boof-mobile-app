import Svg, { Path, SvgProps } from "react-native-svg";

const MenuIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
      ></Path>
    </Svg>
  );
};
export default MenuIcon;
