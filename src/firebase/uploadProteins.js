import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { proteins } from "./proteins";

export const uploadProteins = async () => {
  const proteinCollection = collection(db, "protein_powders");

  try {
    for (const protein of proteins) {
      await addDoc(proteinCollection, {
        name: protein.name,
        price: protein.price,
        imageUrl: protein.pic,
      });
    }
    console.log("Proteins added successfully!");
  } catch (error) {
    console.error("Error uploading proteins: ", error);
  }
};

uploadProteins();
