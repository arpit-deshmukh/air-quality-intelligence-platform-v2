import AQICard from "../../components/cards/AQICard";
import Loader from "../../components/common/Loader";
import ErrorBox from "../../components/common/ErrorBox";

export default function LiveAQIResult({ loading, error, data }) {
  if (loading) return <Loader />;
  if (error) return <ErrorBox message={error} />;
  if (!data) return null;

  return (
    <div className="flex justify-center mt-4">
      <AQICard {...data} />
    </div>
  );
}
