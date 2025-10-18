
const Contact = () => {
  return (
    <section id="contact" className="bg-pink-100 py-16 px-8 md:px-20 flex flex-col md:flex-row ">
      <div className="w-full md:m-20 md:w-1/2">
        <h2 className="text-2xl text-black/90 font-bold mb-6">Get in Touch</h2>
        <form className="space-y-4 flex flex-col">
          <input className="w-1/2 p-3 bg-[#ff6b50]/50 text-black/50 rounded" placeholder="Name" />
          <input className="w-1/2 p-3 bg-[#ff6b50]/50 text-black/50 rounded" placeholder="Email" />
          <textarea className="w-1/2 p-3 bg-[#ff6b50]/50  text-black/50 rounded" rows={4} placeholder="Message" />
          <button className="mt-4 md:mr-[400px] mr-[550px] bg-red-500 text-white px-5 py-2 rounded hover:bg-red-400 transition-all duration-150">Submit</button>
        </form>
      </div>
      <div className="w-full md:w-1/2  text-black/90 text-center mt-10 md:mt-0 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4 mr-20">Let's Create Together!</h1>
        <p className="mr-20">Let's connect! Whether you're curious or ready to create, drop us a message.</p>
      </div>
    </section>
  );
};

export default Contact;