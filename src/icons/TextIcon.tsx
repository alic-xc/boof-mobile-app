
import Svg, { Path, SvgProps } from 'react-native-svg';

const TextIcon = (props:SvgProps) => {
 return (
    <Svg  width="1em" height="1em" viewBox="0 0 24 24" {...props}><Path fill="currentColor" d="M8.5 20q-.625 0-1.062-.437T7 18.5V7H3.5q-.625 0-1.062-.437T2 5.5t.438-1.062T3.5 4h10q.625 0 1.063.438T15 5.5t-.437 1.063T13.5 7H10v11.5q0 .625-.437 1.063T8.5 20m9 0q-.625 0-1.062-.437T16 18.5V12h-1.5q-.625 0-1.062-.437T13 10.5t.438-1.062T14.5 9h6q.625 0 1.063.438T22 10.5t-.437 1.063T20.5 12H19v6.5q0 .625-.437 1.063T17.5 20"></Path></Svg>
 )
}

export default TextIcon;