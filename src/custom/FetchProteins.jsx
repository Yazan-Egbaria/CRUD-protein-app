import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

const FetchProteins = () => {
  const [proteins, setProteins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProteins = async () => {
      try {
        const response = await getDocs(collection(db, "protein_powders"));
        const proteinData = response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProteins(proteinData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProteins();
  }, []);

  return { proteins, loading, error };
};

export default FetchProteins;
