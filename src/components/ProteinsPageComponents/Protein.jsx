import { Link } from "react-router-dom";

const Protein = ({ id, name, price, imageUrl }) => {
  return (
    <Link
      to={`${id}`}
      className="flex w-1/5 min-w-[250px] flex-col gap-4 rounded py-4 shadow-myShadow"
    >
      <div className="flex items-center justify-center">
        <img className="w-48 rounded-t" src={imageUrl} alt={name} />
      </div>

      <div className="flex flex-col gap-1 px-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <span className="w-fit rounded bg-teal-500 px-2 py-1 text-lg font-bold text-white">
          <span className="text-sm">₪</span>
          {price}
        </span>
      </div>
    </Link>
  );
};

export default Protein;
