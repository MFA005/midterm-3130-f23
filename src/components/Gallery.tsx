import {useState} from "react";
import { galleryImages } from "../data/gallery";

const Gallery = () => {

const [isOpen, setIsOpen] = useState(false); 
const [activeImg, setActiveImg] = useState<string | undefined>(undefined);

const handleGifClick = (img: string) => {
    setActiveImg(img);
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

const handleCloseFullscreen = () => {
    setActiveImg(undefined);
    setIsOpen(false);
    document.body.style.overflow = 'auto'; 
  };  

  return (
    <section id="gallery" className="bg-[#ff6b50] py-16 px-8">
      <h2 className="text-3xl font-bold text-center text-white mb-4">Our Art Community</h2>
      <p className="text-center text-white mb-10">
        A showcase of moments, masterpieces, and memories made at Art Haven Studio.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 p-20">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="w-full h-full bg-gray-200 flex items-center justify-center rounded shadow overflow-hidden hover:scale-[110%] transition-all duration-250" onClick={() => handleGifClick(img)}
          >
            <img src={img} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="bg-white text-[#EA6047] px-6 py-2 font-roboto rounded hover:bg-[#EA6047] transition-all duration-150 hover:text-white hover:border-2 border-white">View All</button>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 z-50 cursor-pointer"
        onClick={handleCloseFullscreen} // Close when clicked on the GIF
        >
          <div
            className="relative"   
          >
            <img src={activeImg} alt={"A fullscreen picture from the gallery"} className="w-[90vw] h-[90vh] object-contain rounded-lg" />
            
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
