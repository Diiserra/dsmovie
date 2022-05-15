import { ReactComponent as StarFull } from "assets/starfull.svg";
import { ReactComponent as StarEmpty } from "assets/starempty.svg";
import { ReactComponent as StarHalf } from "assets/starhalf.svg";
import 'styles/MovieStars.css'

export default function MovieStars() {
  return (
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  );
}
