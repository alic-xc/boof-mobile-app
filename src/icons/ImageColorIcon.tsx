import Svg, { Path, SvgProps } from "react-native-svg";

const ImageColorIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <Path fill="#2dcc9f" d="M30 5.851v20.298H2V5.851z"></Path>
      <Path
        fill="#fff"
        d="M24.232 8.541a2.2 2.2 0 1 0 1.127.623a2.2 2.2 0 0 0-1.127-.623M18.111 20.1q-2.724-3.788-5.45-7.575L4.579 23.766h10.9q1.316-1.832 2.634-3.663M22.057 16q-2.793 3.882-5.584 7.765h11.169Q24.851 19.882 22.057 16"
      ></Path>
    </Svg>
  );
};

export default ImageColorIcon;
