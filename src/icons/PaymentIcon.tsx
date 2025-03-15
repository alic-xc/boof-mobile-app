import * as React from "react";
import Svg, { G, Path, Rect, Circle, SvgProps } from "react-native-svg";

const PaymentIcon = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <Path
        fill="currentColor"
        d="M10.25 9A6.25 6.25 0 004 15.25v3.25h40v-3.25A6.25 6.25 0 0037.75 9zM4 32.75V21h40v11.75A6.25 6.25 0 0137.75 39h-27.5A6.25 6.25 0 014 32.75m27.25-3.25a1.25 1.25 0 100 2.5h5.5a1.25 1.25 0 100-2.5z"
      />
    </Svg>
  );
};

export default PaymentIcon;
