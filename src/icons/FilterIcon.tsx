import Svg, { Path, Line, SvgProps } from "react-native-svg";

const FilterIcon = (props: SvgProps) => {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7 21v-3m10 3v-6m0-9V3M7 9V3m0 15c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C4 16.398 4 15.932 4 15s0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C5.602 12 6.068 12 7 12s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C10 13.602 10 14.068 10 15s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C8.398 18 7.932 18 7 18m10-6c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C14 10.398 14 9.932 14 9s0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C15.602 6 16.068 6 17 6s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C20 7.602 20 8.068 20 9s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C18.398 12 17.932 12 17 12"
        color="currentColor"
      ></Path>
    </Svg>
  );
};

export default FilterIcon;
