import React from "react";

interface WorkshopCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reverse: boolean;
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({ title, subtitle, description, image, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-10 md:gap-40 m-20 py-8`}>
      {/* Image */}
      <div className="w-full md:w-1/2 h-56 bg-gray-200 flex items-center justify-center rounded drop-shadow-lg">
        <img src={image} alt={title} className="w-full h-full object-cover rounded" />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2">
        <h3 className="text-xl font-bold text-black/80">{title}</h3>
        <h4 className="text-lg font-semibold text-black/80">{subtitle}</h4>
        <p className="text-gray-700 mt-2">{description}</p>
        <button className="mt-4 bg-red-500 text-white px-5 py-2 rounded hover:bg-red-400 transition-all duration-150">Explore</button>
      </div>
    </div>
  );
};

export default WorkshopCard;
