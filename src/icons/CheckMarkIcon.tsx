import Svg, { Path, SvgProps } from "react-native-svg";

const CheckMarkIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
      ></Path>
    </Svg>
  );
};

export default CheckMarkIcon;
