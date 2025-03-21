import Svg, { Path, SvgProps } from "react-native-svg";

const BadDocumentIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="M20 17h2v-2h-2zm0-10v6h2V7zm-9 2h5.5L11 3.5zM4 2h8l6 6v12c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H4v2zm3-4v-2H4v2z"
      ></Path>
    </Svg>
  );
};

export default BadDocumentIcon;
