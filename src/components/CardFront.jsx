import cardFrontImg from "../assets/images/bg-card-front.png";

const CardFront = ({ className = "" }) => {
  return (
    <div
      className={`relative z-10 -mt-18 ml-2 w-[18rem] sm:w-[20rem] sm:-mt-20 sm:ml-0 md:mt-0 md:-ml-12 md:w-70 self-start lg:self-auto lg:mt-4 lg:w-88 ${className}`}
    >
      <img src={cardFrontImg} alt="Card front" className="w-full h-auto" />
      <div className="absolute inset-0 size-8 top-1/12 left-1/12 bg-white rounded-full"></div>
      <div className="absolute inset-0 size-4 border top-1/8 border-white rounded-full ml-20"></div>
      <span className="absolute inset-0 top-[55%] left-1/12 text-lg f text-white tracking-[2px]">
        0000 0000 0000 0000
      </span>
      <p className="absolute inset-0 top-[80%] left-1/12 text-sm f text-white tracking-[2px]">
        JANE APPLESEED
      </p>
      <span className="absolute inset-0 top-[80%] left-[73%] text-sm f text-white tracking-[2px]">
        00/00
      </span>
    </div>
  );
};

export default CardFront;
