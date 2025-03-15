import Svg, {
  Path,
  G,
  Circle,
  Ellipse,
  SvgProps,
} from "react-native-svg";

const ClientIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <G fill="none" stroke="currentColor" strokeWidth="1.5">
        <Circle cx="9" cy="6" r="4"></Circle>
        <Path d="M12.5 4.341a3 3 0 1 1 0 3.318" opacity=".5"></Path>
        <Ellipse cx="9" cy="17" rx="7" ry="4"></Ellipse>
        <Path
          strokeLinecap="round"
          d="M18 14c1.754.385 3 1.359 3 2.5c0 1.03-1.014 1.923-2.5 2.37"
          opacity=".5"
        ></Path>
      </G>
    </Svg>
  );
};

export default ClientIcon;
