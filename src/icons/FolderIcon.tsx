import Svg, { Path, SvgProps } from "react-native-svg";

const FolderIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <Path
        fill="currentColor"
        d="M.513 1.513A1.75 1.75 0 0 1 1.75 1h3.5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1H13a1 1 0 0 1 1 1v.5H2.75a.75.75 0 0 0 0 1.5h11.978a1 1 0 0 1 .994 1.117L15 13.25A1.75 1.75 0 0 1 13.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75c0-.464.184-.91.513-1.237"
      ></Path>
    </Svg>
  );
};

export default FolderIcon;
