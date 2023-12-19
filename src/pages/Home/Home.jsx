function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/homebg.webp')"}}
    >
<div className="w-11/12 max-w-lg md:max-w-xl lg:max-w-2xl mx-auto text-center p-5 bg-blue-500 bg-opacity-95 hover:scale-105 transition-transform duration-300 ease-in-out" style={{ borderRadius: '55px' }}>
        <p className="text-white text-lg md:text-xl lg:text-2xl">
          Welcome to SlamSearch, the ultimate destination for NBA enthusiasts!
          Our platform offers a seamless and intuitive experience for basketball
          fans to delve into the exciting world of the NBA. Just simply search
          player / team by name and explore! Plus, spice up your NBA knowledge
          contests with friends by seeing who can name more players with a
          specific name. SlamSearch is not just a search tool; it is an engagement
          platform for all basketball lovers.
        </p>
      </div>
    </div>
  );
}

export default Home;
