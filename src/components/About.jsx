function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 sm:py-20 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font md:text-3xl mb-4 font-medium text-white">
            Make-it-happen Merchants
          </h1>
          <p className="mb-4 leading-relaxed sm:text-xl text-lg ">
            Elevating Customer Experiences with Excellence
          </p>
          <p className="mb-8 leading-relaxed sm:text-xl text-lg ">
            Welcome to MIH Merchants, where we are dedicated to delivering a
            seamless and unparalleled customer experience. Our commitment
            extends beyond providing the best prices; we strive to create
            lasting impressions through our services.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Us
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See Our Values
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="./logo.png"
          />
        </div>
      </div>
    </section>
  );
}
export default About;
