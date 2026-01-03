import AQICard from "../../components/cards/AQICard";
import Loader from "../../components/common/Loader";
import ErrorBox from "../../components/common/ErrorBox";

export default function LiveAQIResult({ loading, error, data }) {
  if (loading) {
    return (
      <div className="flex justify-center mt-10 anim-fade">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center mt-10 anim-fade">
        <ErrorBox message={error} />
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="flex justify-center mt-10 anim-slide-up">
      <AQICard {...data} />
    </div>
  );
}
