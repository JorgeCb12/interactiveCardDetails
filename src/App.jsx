import bgMainDesktop from "./assets/images/bg-main-desktop.png";
import bgMainMobile from "./assets/images/bg-main-mobile.png";
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import Form from "./components/Form";

function App() {
  return (
    <main className="min-h-screen font-[Space_Grotesk] grid grid-rows-[18rem_1fr] lg:grid-rows-1 lg:grid-cols-[28rem_1fr]">
      <section className="relative z-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={bgMainMobile}
            className="w-full h-full object-cover md:hidden"
          />
          <img
            src={bgMainDesktop}
            className="w-full h-full object-cover hidden md:block"
          />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center gap-6 px-6 py-8 lg:items-start lg:px-12 lg:translate-x-16">
          <CardBack className="order-1 lg:order-2" />
          <CardFront className="order-2 lg:order-1" />
        </div>
      </section>

      <section className="flex items-center justify-center px-6 py-10">
        <Form />
      </section>
    </main>
  );
}

export default App;
