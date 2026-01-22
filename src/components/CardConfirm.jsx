import confirmImage from "../assets/images/icon-complete.svg";

const CardConfirm = ({
  setIsSubmitted,
  setCardHolder,
  setCardNumber,
  setCardExpDateMonth,
  setCardExpDateYear,
  setCardCvc,
}) => {
  const handleContinue = () => {
    setIsSubmitted(false);
    setCardHolder("");
    setCardNumber("");
    setCardExpDateMonth("");
    setCardExpDateYear("");
    setCardCvc("");
  };
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <img src={confirmImage} alt="confirm" className="w-16 h-16" />
      <h2 className="text-3xl font-bold text-purple-950 tracking-wider">
        THANK YOU!
      </h2>
      <p className="text-gray-600">We've added your card details</p>
      <button
        onClick={handleContinue}
        className="bg-purple-950 text-white px-6 py-2 w-full rounded-md"
      >
        Continue
      </button>
    </div>
  );
};

export default CardConfirm;
