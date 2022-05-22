import { ReactComponent as StarFull } from "assets/starfull.svg";
import { ReactComponent as StarEmpty } from "assets/starempty.svg";
import { ReactComponent as StarHalf } from "assets/starhalf.svg";
import "styles/MovieStars.css";

type Props = {
  score: number;
};

type FillProps = {
  fill: number;
};
// EX:
// getFills(3.5) => [1, 1, 1, 0.5, 0]
// getFills(4.1) => [1, 1, 1, 1, 0.5]
function getFills(score: number) {
  const fills = [0, 0, 0, 0, 0];
  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}

function Star({fill}: FillProps) {
  if (fill === 0) {
    return <StarEmpty />
  } else if (fill === 1){
    return <StarFull />
  } else {
    return <StarHalf />
  }
}

export default function MovieStars({ score }: Props) {

  const fills = getFills(score);

  return (
    <div className="dsmovie-stars-container">
      {fills.map((item, id) => <Star key={id} fill={item}/>)}
    </div>
  );
}
