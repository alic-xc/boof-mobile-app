import Svg, {
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from "react-native-svg";

const PremiumIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <G fill="none">
        <Path
          fill="url(#fluentColorPremium160)"
          d="M10.444 6.276L9.375 2H12.5a.5.5 0 0 1 .447.276l2 4z"
        ></Path>
        <Path
          fill="url(#fluentColorPremium161)"
          d="M6.625 2H3.5a.5.5 0 0 0-.447.276l-2 4h4.503z"
        ></Path>
        <Path
          fill="url(#fluentColorPremium162)"
          d="M6.015 2.379A.5.5 0 0 1 6.5 2h3a.5.5 0 0 1 .485.379l1 4q.015.06.015.121H5a.5.5 0 0 1 .015-.121z"
        ></Path>
        <Path
          fill="url(#fluentColorPremium163)"
          d="M7.623 14.828L10.432 6h4.377l.138.276a.5.5 0 0 1-.059.54l-6.5 8a.5.5 0 0 1-.765.012"
        ></Path>
        <Path
          fill="url(#fluentColorPremium164)"
          d="M5.568 6H1.191l-.138.276a.5.5 0 0 0 .059.54l6.5 8a.5.5 0 0 0 .765.012z"
        ></Path>
        <Path
          fill="url(#fluentColorPremium165)"
          d="m5.11 6l-.095.379a.5.5 0 0 0 .008.27l2.5 8a.5.5 0 0 0 .954 0l2.5-8a.5.5 0 0 0 .008-.27L10.89 6z"
        ></Path>
        <Path
          fill="url(#fluentColorPremium166)"
          fillOpacity=".7"
          d="M3.5 2a.5.5 0 0 0-.447.276l-2 4a.5.5 0 0 0 .059.54l6.5 8a.5.5 0 0 0 .776 0l6.5-8a.5.5 0 0 0 .06-.54l-2-4A.5.5 0 0 0 12.5 2z"
        ></Path>
        <Defs>
          <LinearGradient
            id="fluentColorPremium160"
            x1="11.365"
            x2="14.004"
            y1="2"
            y2="8.632"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#0FAFFF"></Stop>
            <Stop offset="1" stopColor="#102784"></Stop>
          </LinearGradient>
          <LinearGradient
            id="fluentColorPremium161"
            x1="5.829"
            x2="3.513"
            y1=".218"
            y2="5.76"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#9FF0F9"></Stop>
            <Stop offset="1" stopColor="#29C3FF"></Stop>
          </LinearGradient>
          <LinearGradient
            id="fluentColorPremium162"
            x1="8"
            x2="8"
            y1="2"
            y2="7.625"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#3BD5FF"></Stop>
            <Stop offset="1" stopColor="#367AF2"></Stop>
          </LinearGradient>
          <LinearGradient
            id="fluentColorPremium163"
            x1="16.736"
            x2="8.517"
            y1="1.5"
            y2="13.828"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#1B44B1"></Stop>
            <Stop offset="1" stopColor="#2052CB"></Stop>
          </LinearGradient>
          <LinearGradient
            id="fluentColorPremium164"
            x1="2.302"
            x2="7.818"
            y1="4.2"
            y2="14.84"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#0094F0"></Stop>
            <Stop offset="1" stopColor="#6CE0FF"></Stop>
          </LinearGradient>
          <LinearGradient
            id="fluentColorPremium165"
            x1="7.996"
            x2="7.996"
            y1="2.85"
            y2="15"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#2052CB"></Stop>
            <Stop offset="1" stopColor="#0FAFFF"></Stop>
          </LinearGradient>
          <LinearGradient
            id="fluentColorPremium166"
            x1="-.422"
            x2="10.764"
            y1="-10.242"
            y2="16.053"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset=".533" stopColor="#FF6CE8" stopOpacity="0"></Stop>
            <Stop offset="1" stopColor="#FF6CE8"></Stop>
          </LinearGradient>
        </Defs>
      </G>
    </Svg>
  );
};

export default PremiumIcon;
