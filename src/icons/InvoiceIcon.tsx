import Svg, { Path, G, SvgProps } from "react-native-svg";

const InvoiceIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1.65.76l-1.033-.885a1 1 0 0 0-1.301 0l-1.032.884a1 1 0 0 1-1.302 0l-1.031-.884a1 1 0 0 0-1.302 0l-1.031.884a1 1 0 0 1-1.302 0l-1.032-.884a1 1 0 0 0-1.301 0l-1.032.884A1 1 0 0 1 4 21zm5 3a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm1 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
};
export default InvoiceIcon;
