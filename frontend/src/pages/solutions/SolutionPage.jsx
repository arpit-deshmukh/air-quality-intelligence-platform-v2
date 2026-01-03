import FurtherReadingSolutions from "./FurtherReadingSolutions";
import Roadmap from "./Roadmap.jsx";
import Solutions from "./Solutions.jsx";

export default function SolutionsPage() {
  return (
    <div className="page-gradient min-h-screen">

      <div className="px-6 py-12 max-w-6xl mx-auto">

        <section className="mb-20 anim-fade">
          <Solutions />
        </section>

        <section className="mb-20 anim-slide-up">
          <Roadmap />
        </section>

        <section className="anim-slide-up">
          <FurtherReadingSolutions />
        </section>

      </div>

    </div>
  );
}
