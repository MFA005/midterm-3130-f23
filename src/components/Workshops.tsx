
import workshops from "../data/workshops";
import WorkshopCard from "./WorkshopCard";

const Workshops = () => {
  return (
    <section id="workshops" className="bg-red-100 py-16 px-8">
      <h2 className="text-3xl font-bold text-black/80 text-center  mb-4">Our Creative Workshops</h2>
      <p className="text-center text-black/80 max-w-2xl mx-auto mb-12">
        Whether you're a beginner or an enthusiast, our workshops are designed to help you explore creativity in a
        friendly, inspiring environment.
      </p>

      <div className="space-y-10">
        {workshops.map((item, index) => (
          <WorkshopCard key={index} {...item} reverse={index % 2 !== 0}/>
        ))}
      </div>
    </section>
  );
};

export default Workshops;
