import { CardStackComponent } from "./HeroCard";

const Hero = () => {
  return (
    <section>
      <div className="bg-black min-h-svh flex justify-center md:min-h-[calc(100dvh-64px)] mx-auto text-white md:py-20">
        <div className="container overflow-hidden mx-auto flex flex-col md:flex-row max-w-screen-xl items-center">
          <div className="flex flex-col md:w-1/2 justify-center items-start p-8">
            <h1 className="text-3xl animate__animated animate__slideInUp animate__faster md:text-5xl font-semibold text-yellow-300 tracking-loose">
              Raven Scope Investigators
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              Uncover the Truth, Facts can't be Hidden!
            </h2>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Our expert detectives are here to unravel your most complex cases.
              Confidentiality, precision, and results—guaranteed.
            </p>
            <a
              href="#"
              className="bg-transparent transition-colors duration-300 hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Investigate Now
            </a>
          </div>
          <div className="flex md:w-1/2 h-full items-center justify-center">
            {/* <img
              className=""
              src="https://t3.ftcdn.net/jpg/01/02/91/72/360_F_102917275_EwxqjeGA7qgl5Tmp9sI92iwhFZ623fM8.jpg"
              alt="Detective Icon 1"
            /> */}
            <CardStackComponent/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
