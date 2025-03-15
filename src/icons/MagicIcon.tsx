import Svg, { Path, SvgProps } from "react-native-svg";

const MagicIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 14 14" {...props}>
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="m12.35 3.824l.84-2.48a.4.4 0 0 0-.51-.51l-2.48.84a.41.41 0 0 1-.37-.05L7.73.054a.4.4 0 0 0-.6.33v2.62a.43.43 0 0 1-.17.33l-2.14 1.51a.4.4 0 0 0 .11.71l2.5.78a.38.38 0 0 1 .26.26l.78 2.5a.4.4 0 0 0 .71.11l1.46-2.1a.43.43 0 0 1 .33-.17h2.62a.4.4 0 0 0 .33-.64l-1.57-2.1a.41.41 0 0 1 0-.37M.293 12.293l5.241-5.241l1.096.342l.33 1.06l-5.253 5.253a1 1 0 0 1-1.414-1.414"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
};

export default MagicIcon;
