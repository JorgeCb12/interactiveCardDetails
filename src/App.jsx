import bgMainDesktop from './assets/images/bg-main-desktop.png'
import CardBack from './components/CardBack'
import CardFront from './components/CardFront'
import Form from './components/Form'

function App() {
  return (
    <main className="grid grid-cols-[30%_70%] h-screen font-[Space_Grotesk]">
      <div className="relative min-h-screen">
        <img src={bgMainDesktop} className="w-full h-full object-cover" />

        <CardFront />
        <CardBack />
      </div>
      <div className="flex items-center justify-center bg-white">
        <Form />
      </div>
    </main>
  )
}

export default App
