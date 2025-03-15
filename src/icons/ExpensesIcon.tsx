import Svg, { Path, SvgProps } from "react-native-svg";

const ExpensesIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="m18.65 2.85l.61 3.86l3.51 1.79L21 12l1.78 3.5l-3.54 1.79l-.61 3.86l-3.89-.61l-2.77 2.76l-2.78-2.8l-3.86.64l-.62-3.89l-3.49-1.78L3 11.97L1.23 8.5l3.51-1.81l.61-3.83l3.87.64L12 .69l2.77 2.77zM9.5 7A1.5 1.5 0 0 0 8 8.5A1.5 1.5 0 0 0 9.5 10A1.5 1.5 0 0 0 11 8.5A1.5 1.5 0 0 0 9.5 7m5 7a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5m-6.09 3L17 8.41L15.59 7L7 15.59z"
      ></Path>
    </Svg>
  );
};

export default ExpensesIcon;
