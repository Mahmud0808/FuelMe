import Header from './components/Header'
import Hero from './components/Hero'
import Wall from './components/Wall'
import Footer from './components/Footer'
import { PAYMENT_SECTIONS } from './payments'

export default function App() {
  return (
    <div id="top" className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        {PAYMENT_SECTIONS.map((section, index) => (
          <Wall key={section.title} section={section} index={index} />
        ))}
      </main>
      <Footer />
    </div>
  )
}
