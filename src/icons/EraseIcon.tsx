import Svg, { Path, SvgProps } from "react-native-svg";

const EraseIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <Path
        fill="currentColor"
        d="M1 3.75C1 2.784 1.784 2 2.75 2h10.5c.966 0 1.75.784 1.75 1.75v4.32l-1.41-1.41a2.25 2.25 0 0 0-3.182 0L6.66 10.41A2.24 2.24 0 0 0 6 12H2.75A1.75 1.75 0 0 1 1 10.25zm10.116 3.616a1.25 1.25 0 0 1 1.767 0l1.75 1.75a1.25 1.25 0 0 1 0 1.768l-2.576 2.575L8.54 9.943zM7.94 10.541l-.575.575a1.25 1.25 0 0 0 0 1.768l1.75 1.749a1.25 1.25 0 0 0 1.767 0l.576-.575z"
      ></Path>
    </Svg>
  );
};

export default EraseIcon;
