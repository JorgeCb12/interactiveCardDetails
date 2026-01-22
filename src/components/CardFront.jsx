import cardFrontImg from "../assets/images/bg-card-front.png";
import cardLogo from "../assets/images/card-logo.svg";

const CardFront = ({
  className = "",
  cardNumber,
  cardHolder,
  cardExpDateYear,
  cardExpDateMonth,
}) => {
  return (
    <div
      className={`relative z-10 -mt-16 ml-2 w-[18rem] sm:w-[20rem] sm:-mt-20 sm:ml-0 md:mt-0 md:-ml-12 md:w-70 self-start lg:self-auto lg:mt-4 lg:ml-0 lg:w-88 ${className}`}
    >
      <img src={cardFrontImg} alt="Card front" className="w-full h-auto" />
      <img
        src={cardLogo}
        alt="Card logo"
        className="absolute inset-0 m-4 w-14"
      />
      <span className="absolute inset-0 flex items-center justify-center mt-6 text-white text-[20px] sm:text-[24px] md:text-[20px] lg:text-[26px] tracking-wider">
        {cardNumber === ""
          ? "0000 0000 0000 0000"
          : cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ").trim()}
      </span>

      <p className="absolute text-xs lg:text-sm inset-0 text-white flex self-end justify-start px-7 py-4 tracking-[2px]">
        {cardHolder === "" ? "JANE APPLESEED" : cardHolder.toUpperCase()}
      </p>
      <span className="absolute inset-0 text-xs lg:text-sm flex self-end justify-end px-7 py-4 text-white tracking-[2px]">
        {cardExpDateMonth === "" ? "00" : cardExpDateMonth}/
        {cardExpDateYear === "" ? "00" : cardExpDateYear}
      </span>
    </div>
  );
};

export default CardFront;
