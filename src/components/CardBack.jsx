import cardBackImg from "../assets/images/bg-card-back.png";

const CardBack = ({ className = "" }) => {
  return (
    <div
      className={`relative w-[18rem] mt-22 ml-16 lg:ml-26 lg:-mt-2 sm:w-[20rem] lg:w-88 ${className}`}
    >
      <img src={cardBackImg} alt="Card back" className="w-full h-auto" />
      <p className="absolute inset-0 flex items-center justify-end pr-10 text-white text-sm">
        000
      </p>
    </div>
  );
};

export default CardBack;
