export default function HomePage() {
  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Take Home Project
                <br />
              </h1>
              <p className="mb-8 leading-relaxed">
                Fovus is a stealth-mode tech startup founded by ASU CS Prof.
                Fengbo Ren. We are developing next-generation cloud
                high-performance computing (HPC) solutions for enterprises. Our
                mission is to democratize HPC for all. We are post-revenue, and
                our solution is trusted by Fortune 500 and high-tech
                unicorns/startups.
              </p>

            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./src/assets/take-home-coding-challenge.jpg"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
