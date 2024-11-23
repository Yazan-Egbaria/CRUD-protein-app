const Protein = ({ name, price, imageURL }) => {
  return (
    <div className="flex flex-col gap-4 rounded shadow-sm">
      <img className="w-48 rounded-t" src={imageURL} alt={name} />

      <div className="flex flex-col gap-2 px-4">
        <h2 className="text-xl">{name}</h2>
        <span className="text-xl">{price}</span>
      </div>
    </div>
  );
};

export default Protein;
