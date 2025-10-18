import React from "react";

const Hero = () => {
  return (
    <header className="hero-bg bg-cover bg-center h-screen relative text-white">

      <nav className="flex font-roboto-light justify-end p-5 pr-10 space-x-16 ">
        <a href="#home" className="transition-all duration-150 hover:bg-white hover:text-black px-3 p-1 tracking-widest rounded-sm">Home</a>
        <a href="#workshops" className="transition-all duration-150 hover:bg-white hover:text-black px-3 p-1 tracking-widest rounded-sm">Classes</a>
        <a href="#gallery" className="transition-all duration-150 hover:bg-white hover:text-black px-3 p-1 tracking-widest rounded-sm">Gallery</a>
        <a href="#contact" className="transition-all duration-150 hover:bg-white hover:text-black px-3 p-1 tracking-widest rounded-sm">Contact</a>
      </nav>
      <div className="p-30">
        <h1 className="text-5xl font-caveat font-black mb-4 tracking-widest leading-relaxed whitespace-pre-line">{"CREATE. \nEXPRESS. \nINSPIRE."}</h1>
        <p className="mb-6 whitespace-pre-line max-w-xl">
          {"Welcome to Art Haven Studio - your space to explore creativity \nthrough immersive experiences."}
         </p>
         <a href="#contact">
        <button className="bg-red-500 px-6 py-3 rounded text-white hover:bg-red-400 transition-all duration-150">Get Started</button>
        </a>
      </div>
    </header>
  );
};

export default Hero;
