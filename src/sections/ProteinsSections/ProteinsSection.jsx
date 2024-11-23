import useFetchProteins from "../../custom/useFetchProteins";
import Protein from "../../components/ProteinsPageComponents/Protein";

const ProteinsSection = () => {
  const { proteins, isLoading, error } = useFetchProteins();

  return (
    <>
      {isLoading && (
        <div className="flex h-calc-100dvh-minus-64 items-center justify-center sm:h-calc-100vh-minus-64">
          <div className="h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-teal-500"></div>
        </div>
      )}

      <div className="mt-20 flex flex-wrap justify-center gap-4">
        {proteins && proteins.length > 0 ? (
          proteins.map((protein) => {
            return <Protein key={protein.id} {...protein} />;
          })
        ) : (
          <div>{error || "No proteins available"}</div>
        )}
      </div>
    </>
  );
};

export default ProteinsSection;
