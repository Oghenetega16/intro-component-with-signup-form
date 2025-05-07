import Home from './Home'
import Form from './Form'

export default function App() {
    return (
      <main className="px-6 py-24 flex flex-col md:flex-row md:items-center lg:justify-center lg:gap-10">
        <Home />
        <Form />
      </main>
    )
}
