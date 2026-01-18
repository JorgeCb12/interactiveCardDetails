import cardBackImg from "../assets/images/bg-card-back.png";

const CardBack = ({ className = "", cardCvc }) => {
  return (
    <div
      className={`relative mt-20 ml-8 w-72 sm:w-80 sm:mt-30 md:mt-2 md:m-4 md:w-70 self-center lg:self-auto lg:ml- lg:mt-5 lg:w-88 ${className}`}
    >
      <img src={cardBackImg} alt="Card back" className="w-full h-auto" />
      <p className="absolute inset-0 flex text-lg items-center justify-end pr-10 text-white">
        {cardCvc === "" ? "000" : cardCvc}
      </p>
    </div>
  );
};

export default CardBack;
