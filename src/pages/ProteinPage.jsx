import { useNavigate, useParams } from "react-router-dom";
import Protein from "../components/ProteinsPageComponents/Protein";
import useFetchProteins from "../custom/useFetchProteins";
import Button from "../components/ProteinsPageComponents/Button";
import { db } from "../firebase/firebase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import Form from "../components/globalComponents/Form";

const ProteinPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
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
      alert("Protein has been deleted successfully");
    } catch (err) {
      console.error("Error, could not delete item:", err);
      alert("Error, could not delete item");
    }
  };

  const handleEditToggle = async () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setName(protein.name);
      setImage(protein.imageUrl);
      setPrice(protein.price);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!name || !image || isNaN(price)) {
      alert("Please fill out all the fields.");
      return;
    }
    try {
      const proteinRef = doc(db, "protein_powders", proteinId);
      await updateDoc(proteinRef, {
        name,
        imageUrl: image,
        price: parseFloat(price),
      });
      setProteins((prev) =>
        prev.map((p) =>
          p.id === proteinId
            ? { ...p, name, imageUrl: image, price: parseFloat(price) }
            : p,
        ),
      );
      setIsEditing(false);
      alert("Protein has been updated successfully");
    } catch (error) {
      console.error("Error, could not update protein:", error);
      alert("Error, could not update protein");
    }
  };

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
          text={isEditing ? "Cancel" : "Edit"}
          handleEvent={handleEditToggle}
          color={`hover:bg-teal-600 bg-teal-500`}
        />
      </div>

      {isEditing && (
        <Form onSubmit={handleUpdate}>
          <div id="name" className="flex w-full flex-col gap-2 sm:w-2/6">
            <label htmlFor="name" className="w-fit font-bold">
              Protien Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded border border-gray-300 px-2 py-1 focus:outline-teal-500"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div id="imageUrl" className="flex w-full flex-col gap-2 sm:w-2/6">
            <label htmlFor="imageUrl" className="w-fit font-bold">
              Protien Image URL:
            </label>
            <input
              type="text"
              id="imageUrl"
              className="w-full rounded border border-gray-300 px-2 py-1 focus:outline-teal-500"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </div>

          <div id="price" className="flex w-full flex-col gap-2 sm:w-2/6">
            <label htmlFor="price" className="w-fit font-bold">
              Protien Price:
            </label>
            <input
              type="text"
              id="price"
              className="w-full rounded border border-gray-300 px-2 py-1 focus:outline-teal-500"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="rounded bg-teal-500 px-4 py-2 text-white transition-all duration-300 hover:bg-teal-600"
          >
            Update Protein
          </button>
        </Form>
      )}
    </div>
  );
};

export default ProteinPage;
