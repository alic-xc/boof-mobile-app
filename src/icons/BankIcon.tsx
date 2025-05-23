import Svg, { Path, SvgProps } from "react-native-svg";

const BankIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <Path
        fill="currentColor"
        d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916zM12.375 6v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zM8 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2M.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1z"
      ></Path>
    </Svg>
  );
};

export default BankIcon;
