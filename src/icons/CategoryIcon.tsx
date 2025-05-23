import Svg, { Path, SvgProps } from "react-native-svg";

const CategoryIcon = (props: SvgProps) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zm4.75 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3.5-1.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm0 3.75a.75.75 0 1 0 0 1.5h5.5a.75.75 0 1 0 0-1.5zm-.75 4.5c0 .414.336.75.75.75h5.5a.75.75 0 1 0 0-1.5h-5.5a.75.75 0 0 0-.75.75M8.75 12a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-1 4.75a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
      ></Path>
    </Svg>
  );
};

export default CategoryIcon;
