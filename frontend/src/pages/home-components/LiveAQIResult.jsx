import AQICard from "../../components/cards/AQICard";
import Loader from "../../components/common/Loader";
import ErrorBox from "../../components/common/ErrorBox";

export default function LiveAQIResult({ loading, error, data }) {
  if (loading) return <Loader />;
  if (error) return <ErrorBox message={error} />;
  if (!data) return null;

  return (
    <div className="flex justify-center mt-4 transition-all duration-200 ease-out
        hover:shadow-xl hover:scale-[1.02] hover:border-blue-200
        cursor-pointer">


      <AQICard {...data} />
    </div>
  );
}
