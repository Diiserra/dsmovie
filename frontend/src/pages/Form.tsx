import FormCard from "components/FormCard";
import { useParams } from "react-router-dom";


export default function Form() {
  
  const param = useParams();

  return (
    <FormCard movieId={`${param.movieId}`}/>
  );
}
