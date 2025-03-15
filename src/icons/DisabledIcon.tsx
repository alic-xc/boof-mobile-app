import Svg, { Path, SvgProps } from "react-native-svg";

const DisabledIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <Path
        fill="currentColor"
        d="M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0m-1.5 0a4.5 4.5 0 0 0-.832-2.607L3.393 9.668A4.5 4.5 0 0 0 10.5 6M8.607 2.332a4.5 4.5 0 0 0-6.275 6.275z"
      ></Path>
    </Svg>
  );
};

export default DisabledIcon;
