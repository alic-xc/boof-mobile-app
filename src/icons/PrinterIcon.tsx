import Svg, { Path, SvgProps } from "react-native-svg";

const PrinterIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="m4.93 3.92l1.41 1.41c3.12-3.13 8.19-3.13 11.32 0l1.41-1.41C15.17 0 8.84 0 4.93 3.92m2.83 2.83l1.41 1.41a4.01 4.01 0 0 1 5.66 0l1.41-1.41a6 6 0 0 0-8.48 0M19 14a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m-3 6H8v-5h8zm3-10H5a3 3 0 0 0-3 3v5h4v4h12v-4h4v-5a3 3 0 0 0-3-3"
      ></Path>
    </Svg>
  );
};

export default PrinterIcon;
