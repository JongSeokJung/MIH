function Expertise() {
  return (
    <section id="expertise">
      <div className="container flex-row mx-auto px-10 py-20">
        <h1 className="text-center title-font text-2xl sm:text-3xl md:text-4xl mb-4 font-medium text-white">
          Our Expertise
        </h1>
        <div className="w-full flex justify-center my-12">
          <img src="./work.svg" />
        </div>

        <p className="text-lg sm:text-xl md:text-2xl">
          As a wholesale distributor, we cater to clients across the United
          States, serving diverse industries such as restaurants, retail stores,
          convenience stores, hobby shops, and more.
        </p>
      </div>
    </section>
  );
}
export default Expertise;
