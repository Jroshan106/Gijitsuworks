export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Decorative SVG Top */}
      <div className="absolute top-0 w-full rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="0.1" d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-xl md:text-2xl text-blue-100 font-medium mb-2">Building Digital Excellence</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Gijitsu is <br className="hidden md:block"/>
            <span className="text-blue-200">Modern & Creative</span>
          </h1>
          <p className="text-blue-50 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Professional web development and design services tailored to elevate your business online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#about" className="btn-outline">Our Story</a>
            <a href="#contact" className="btn-primary bg-white text-primary hover:bg-gray-100 hover:text-primary">Start a Project</a>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center hidden md:flex">
          {/* We can place an illustration or keep it clean as per original */}
          <div className="relative w-72 h-72 rounded-full border-4 border-blue-300 border-opacity-30 flex items-center justify-center bg-blue-500 bg-opacity-20 backdrop-blur-sm">
             <img src="/images/logo.png" alt="Hero Logo" className="w-32 h-32 object-contain opacity-90" />
          </div>
        </div>
      </div>

      {/* Decorative SVG Bottom */}
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
