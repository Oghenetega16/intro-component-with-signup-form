import Home from './Home'
import Form from './Form'

export default function App() {
    return (
      <main className="min-h-screen text-white font-display bg-[url('./assets/images/bg-intro-mobile.png')] bg-no-repeat bg-cover md:bg-[url('./assets/images/bg-intro-desktop.png')] px-6 py-24 flex flex-col md:flex-row md:items-center lg:justify-center lg:gap-10">
        <Home />
        <Form />
      </main>
    )
}
