import { useState } from 'react'

const Form = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolder, setCardHolder] = useState('')
  const [cardExpDateYear, setCardExpDateYear] = useState('')
  const [cardExpDateMonth, setCardExpDateMonth] = useState('')
  const [cardCvc, setCardCvc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(
      cardNumber,
      cardHolder,
      cardExpDateYear,
      cardExpDateMonth,
      cardCvc,
    )
  }

  return (
    <div className="flex items-center justify-center max-w-80">
      <form
        action=""
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="">
            Cardholder Name
          </label>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            className="w-full border border-gray-400 font-semibold focus:outline-none rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="">
            Cardholder Number
          </label>
          <input
            type="number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="e.g. 1234 5678 9012 3456"
            className="w-full border border-gray-400 font-semibold focus:outline-none rounded-md p-2"
          />
        </div>
        <div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="">
                EXP. DATE (MM/YY)
              </label>
              <div className="flex flex-row gap-2">
                <input
                  type="number"
                  placeholder="MM"
                  value={cardExpDateMonth}
                  onChange={(e) => setCardExpDateMonth(e.target.value)}
                  className="w-full border font-semibold border-gray-400 focus:outline-none rounded-md p-2 max-w-30"
                />
                <input
                  type="number"
                  placeholder="YY"
                  value={cardExpDateYear}
                  onChange={(e) => setCardExpDateYear(e.target.value)}
                  className="w-full border font-semibold border-gray-400 focus:outline-none rounded-md p-2 max-w-30"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="">
                CVC
              </label>
              <input
                type="number"
                value={cardCvc}
                onChange={(e) => setCardCvc(e.target.value)}
                placeholder="e.g. 123"
                className="w-full border font-semibold border-gray-400 focus:outline-none rounded-md p-2"
              />
            </div>
          </div>
        </div>
        <div className="flex bg-purple-950 rounded-lg ">
          <button className="w-full text-white p-2" type="submit">
            Confirm
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
