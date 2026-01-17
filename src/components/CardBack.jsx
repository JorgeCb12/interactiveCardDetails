import cardBackImg from '../assets/images/bg-card-back.png'

const CardBack = () => {
  return (
    <div className="absolute top-[50%] left-[50%]">
      <img src={cardBackImg} alt="Card back" className="max-w-80" />
      <p className="absolute inset-0 flex items-center justify-end pr-10 text-white text-sm">
        000
      </p>
    </div>
  )
}

export default CardBack
