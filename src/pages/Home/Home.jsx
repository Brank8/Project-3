import { Link } from "react-router-dom";
import { GiBasketballBasket } from "react-icons/gi";

function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/homebg.webp')" }}
    >
      <div className="w-10/12 max-w-lg md:max-w-xl lg:max-w-2xl mx-auto text-center p-8 md:p-12 bg-blue-500 bg-opacity-95 rounded-3xl hover:scale-105 transition-transform duration-300 ease-in-out shadow-xl">
        <div className="flex justify-center items-center flex-wrap gap-2 mb-4">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
            Welcome to SlamSearch
          </h1>
          <GiBasketballBasket className="text-white text-2xl md:text-3xl lg:text-4xl" />
        </div>
        <p className="text-white text-md md:text-lg lg:text-xl mb-6">
          The ultimate destination for NBA enthusiasts! Our platform offers a
          seamless and intuitive experience for basketball fans to delve into
          the exciting world of the NBA. Search players or teams by name and
          explore!
        </p>
        <p className="text-white text-md md:text-lg lg:text-xl">
          Spice up your NBA knowledge contests with friends by seeing who can
          name more players with a specific name. SlamSearch is not just a
          search tool; it's an engagement platform for all basketball lovers.
        </p>
        <Link
          to="/searchPlayer"
          className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 inline-block text-center no-underline"
        >
          Start Exploring
        </Link>
      </div>
    </div>
  );
}

export default Home;
