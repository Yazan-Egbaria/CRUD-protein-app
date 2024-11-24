import { useNavigate, useParams } from "react-router-dom";
import Protein from "../components/ProteinsPageComponents/Protein";
import useFetchProteins from "../custom/useFetchProteins";
import Button from "../components/ProteinsPageComponents/Button";
import { db } from "../firebase/firebase";
import { doc, deleteDoc } from "firebase/firestore";

const ProteinPage = () => {
  const { proteins, setProteins } = useFetchProteins();
  const { proteinId } = useParams();
  const navigate = useNavigate();

  const protein = proteins?.find((p) => p.id === proteinId);

  if (!protein) {
    return <p>Protein not found!</p>;
  }

  const handleDelete = async () => {
    try {
      const proteinRef = doc(db, "protein_powders", proteinId);
      await deleteDoc(proteinRef);
      setProteins((prev) => {
        prev.filter((p) => p.id !== proteinId);
      });
      navigate("/proteins");
      alert("Item has been deleted successfully");
    } catch (err) {
      console.error("Error, could not delete item:", err);
      alert("Error, could not delete item");
    }
  };

  const handleChange = async () => {};

  return (
    <div className="pagePadding flex h-calc-100dvh-minus-64 flex-col items-center justify-center gap-8 sm:h-calc-100vh-minus-64">
      <Protein key={protein.id} id={protein.id} {...protein} />

      <div id="buttons" className="flex gap-4">
        <Button
          text="Delete"
          handleEvent={handleDelete}
          color={`hover:bg-red-600 bg-red-500`}
        />
        <Button
          text="Change"
          handleEvent={handleChange}
          color={`hover:bg-teal-600 bg-teal-500`}
        />
      </div>
    </div>
  );
};

export default ProteinPage;
