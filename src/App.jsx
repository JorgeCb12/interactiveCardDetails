import { useState } from "react";
import bgMainDesktop from "./assets/images/bg-main-desktop.png";
import bgMainMobile from "./assets/images/bg-main-mobile.png";
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import Form from "./components/Form";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardExpDateYear, setCardExpDateYear] = useState("");
  const [cardExpDateMonth, setCardExpDateMonth] = useState("");
  const [cardCvc, setCardCvc] = useState("");

  return (
    <main className="min-h-screen font-[Space_Grotesk] grid grid-rows-[18rem_1fr] md:grid-rows-1 md:grid-cols-[20rem_1fr] lg:grid-cols-[28rem_1fr]">
      <section className="relative z-20 sm:px-20 md:p-0  lg:p-0">
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

        <div className="relative w-full max-w-[340px] mx-auto h-full flex flex-col items-center justify-center md:items-start md:px-12 md:translate-x-16">
          <CardBack cardCvc={cardCvc} className="order-1 md:order-2" />
          <CardFront
            cardNumber={cardNumber}
            cardHolder={cardHolder}
            cardExpDateYear={cardExpDateYear}
            cardExpDateMonth={cardExpDateMonth}
            className="order-2 md:order-1"
          />
        </div>
      </section>

      <section className="flex items-center justify-center px-6 py-10">
        <Form
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          cardHolder={cardHolder}
          setCardHolder={setCardHolder}
          cardExpDateYear={cardExpDateYear}
          setCardExpDateYear={setCardExpDateYear}
          cardExpDateMonth={cardExpDateMonth}
          setCardExpDateMonth={setCardExpDateMonth}
          cardCvc={cardCvc}
          setCardCvc={setCardCvc}
        />
      </section>
    </main>
  );
}

export default App;
