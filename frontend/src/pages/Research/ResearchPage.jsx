import FurtherReadingResearch from "./furtherReadingResearch";
import Research from "./Research";

export default function ResearchPage() {
  return (
    <div className="page-gradient min-h-screen">

      <div className="mt-16 px-6 py-10 max-w-5xl mx-auto">

        <section className="mb-20 anim-fade">
          <Research />
        </section>

        <section className="anim-slide-up">
          <FurtherReadingResearch />
        </section>

      </div>

    </div>
  );
}
