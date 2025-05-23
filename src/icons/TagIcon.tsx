import Svg, { Path, SvgProps } from "react-native-svg";

const TagIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 14 14" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m13.25 9.36l-3.89 3.89a.75.75 0 0 1-1.06 0L1.79 6.74a.36.36 0 0 1-.11-.29l.59-3.84a.37.37 0 0 1 .34-.34l3.84-.59a.36.36 0 0 1 .29.11l6.51 6.51a.75.75 0 0 1 0 1.06ZM4.03 4.03L.53.53"
      ></Path>
    </Svg>
  );
};

export default TagIcon;
