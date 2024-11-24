import { useRef, useState } from "react";
import useFetchProteins from "../../custom/useFetchProteins";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const AddForm = () => {
  const nameRef = useRef(null);
  const imageRef = useRef(null);
  const priceRef = useRef(null);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const { setProteins } = useFetchProteins();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !image || isNaN(price)) {
      alert("Please fill out all the fields.");
      return;
    }

    try {
      const newProtein = await addDoc(collection(db, "protein_powders"), {
        name,
        imageUrl: image,
        price: parseFloat(price),
      });

      setProteins((prev) => [
        ...prev,
        { id: newProtein.id, name, imageUrl: image, price: parseFloat(price) },
      ]);

      setName("");
      setImage("");
      setPrice("");
      alert("Protein added successfully!");
    } catch (error) {
      console.error("Error adding protein: ", error);
      alert("Failed to add protein. Please try again.");
    }
  };

  return (
    <form
      id="form"
      className="flex w-full flex-col items-center justify-center gap-8"
      onSubmit={handleSubmit}
    >
      <div id="name" className="flex w-full flex-col gap-2 sm:w-2/6">
        <label htmlFor="name" className="w-fit font-bold">
          Protien Name:
        </label>
        <input
          type="text"
          id="name"
          className="w-full rounded border border-gray-300 px-2 py-1 focus:outline-teal-500"
          ref={nameRef}
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
          ref={imageRef}
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
          ref={priceRef}
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
        Add Protein
      </button>
    </form>
  );
};

export default AddForm;
