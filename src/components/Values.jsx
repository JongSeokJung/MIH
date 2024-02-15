function Values() {
  return (
    <section id="values">
      <div className="container flex-row mx-auto px-10 py-20">
        <h1 className="text-center title-font text-2xl sm:text-3xl md:text-4xl mb-4 font-medium text-white">
          Our Core Values
        </h1>
        <div className="lg:grid lg:grid-cols-2 lg:items-start gap-16 md:flex md:flex-col md:gap-24 items-center">
          <div className="my-10">
            <img
              className="object-contain h-48 w-96 object-center rounded-full mb-12"
              src="./promise.svg"
            />
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl mb-2">
              Customer Loyalty
            </h1>
            <p className="text-lg sm:text-xl">
              We are unwaveringly devoted to ensuring that every interaction
              with us is exceptional. By addressing your concerns and actively
              listening, we aim to enhance your overall experience.
            </p>
          </div>
          <div className="my-10">
            <img
              className="object-contain h-48 w-96 object-center rounded-full mb-12"
              src="./innovation.svg"
            />
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl mb-2">
              Continuous Innovation
            </h1>
            <p className="text-lg sm:text-xl">
              At MIH Merchants, we are dedicated to constant improvement. We
              focus on evolving and learning, thereby contributing to the growth
              and profitability of our clients.
            </p>
          </div>
          <div className="my-10">
            <img
              className="object-contain h-48 w-96 object-center rounded-full mb-12"
              src="./team.svg"
            />
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl mb-2">
              Excellence in Service
            </h1>
            <p className="text-lg sm:text-xl">
              Our solid team and leadership are committed to providing the best
              services in the industry. We aspire to be leaders, ensuring that
              our customers receive optimal care.
            </p>
          </div>
          <div className="my-10">
            <img
              className="object-contain h-48 w-96 object-center rounded-full mb-12"
              src="./contract.svg"
            />
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl mb-2">
              Ownership in Commerce
            </h1>
            <p className="text-lg sm:text-xl">
              We take accountability for our actions, whether they be mistakes
              or successes. Our pledge is to channel our energy into offering
              the finest services to your business and the end consumer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Values;
