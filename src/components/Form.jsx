import { useState } from "react";
import CardConfirm from "../components/CardConfirm";

const Form = ({
  cardNumber,
  setCardNumber,
  cardHolder,
  setCardHolder,
  cardExpDateYear,
  setCardExpDateYear,
  cardExpDateMonth,
  setCardExpDateMonth,
  cardCvc,
  setCardCvc,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [message, setMessage] = useState({
    cardHolder: "",
    cardNumber: "",
    expDate: "",
    cvc: "",
  });

  const showError = (field, text) => {
    setMessage((prev) => ({
      ...prev,
      [field]: text,
    }));

    setTimeout(() => {
      setMessage((prev) => ({
        ...prev,
        [field]: "",
      }));
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const changeCardHolder = (e) => {
    const value = e.target.value;

    if (/\d/.test(value)) {
      showError("cardHolder", "Wrong format, letters only.");
      return;
    }

    setCardHolder(value.replace(/[^a-zA-Z ]/g, ""));
  };

  const handleNumber = (e) => {
    const rawValue = e.target.value;

    if (/\D/.test(rawValue)) {
      showError("cardNumber", "Wrong format, numbers only.");
    }

    const value = rawValue.replace(/\D/g, "");
    if (value.length > 16) return;

    const formatted = value.replace(/(.{4})(?=\d)/g, "$1 ").trim();
    setCardNumber(formatted);
  };

  const changeCvc = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length > 3) return;
    setCardCvc(value);
  };

  const changeExpDateMonth = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) return;

    if (value > 12) {
      showError("expDate", "Invalid month");
      return;
    }

    setCardExpDateMonth(value);
  };

  const changeExpDateYear = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) return;
    if (value > 26) {
      showError("expDate", "Invalid year");
      return;
    }
    setCardExpDateYear(value);
  };

  return (
    <>
      {isSubmitted ? (
        <CardConfirm />
      ) : (
        <div className="flex items-center justify-center max-w-80">
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Cardholder */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Cardholder Name</label>
              <input
                type="text"
                placeholder="e.g. Jane Appleseed"
                value={cardHolder}
                onChange={changeCardHolder}
                required
                className="w-full border border-gray-400 rounded-md p-2"
              />
              {message.cardHolder && (
                <p className="text-red-500 text-sm font-medium">
                  {message.cardHolder}
                </p>
              )}
            </div>

            {/* Card Number */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={handleNumber}
                placeholder="e.g. 1234 5678 9012 3456"
                required
                className="w-full border border-gray-400 rounded-md p-2"
              />
              {message.cardNumber && (
                <p className="text-red-500 text-sm font-medium">
                  {message.cardNumber}
                </p>
              )}
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm">
                  EXP. DATE (MM/YY)
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="MM"
                    value={cardExpDateMonth}
                    onChange={changeExpDateMonth}
                    required
                    className="border border-gray-400 rounded-md p-2 w-20"
                  />
                  <input
                    type="number"
                    placeholder="YY"
                    value={cardExpDateYear}
                    onChange={changeExpDateYear}
                    required
                    className="border border-gray-400 rounded-md p-2 w-20"
                  />
                </div>
                {message.expDate && (
                  <p className="text-red-500 text-sm font-medium">
                    {message.expDate}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="font-semibold text-sm lg:text-base"
                  htmlFor=""
                >
                  CVC
                </label>
                <input
                  type="number"
                  value={cardCvc}
                  onChange={changeCvc}
                  required
                  placeholder="e.g. 123"
                  className="w-full border font-[Poppins] border-gray-400 focus:outline-none rounded-md p-2"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-purple-950 text-white rounded-lg p-2"
            >
              Confirm
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
