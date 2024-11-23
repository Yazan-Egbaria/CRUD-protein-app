import { useParams } from "react-router-dom";
import Protein from "../components/ProteinsPageComponents/Protein";
import useFetchProteins from "../custom/useFetchProteins";

const ProteinPage = () => {
  const { proteins } = useFetchProteins();
  const { proteinId } = useParams();

  const protein = proteins?.find((p) => p.id === proteinId);

  if (!protein) {
    return <p>Protein not found!</p>;
  }

  return <Protein key={protein.id} id={protein.id} {...protein} />;
};

export default ProteinPage;
