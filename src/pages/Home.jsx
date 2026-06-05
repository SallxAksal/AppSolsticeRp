import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Features from '../components/Features'
import SystemSpecs from '../components/SystemSpecs'
import Gallery from '../components/Gallery'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <div style={{textAlign: 'center', padding: '40px 0'}}>
        <img src="/img/logo.png" alt="Solstice RP Logo" style={{maxWidth: '200px', height: 'auto'}} />
      </div>
      <Features />
      <SystemSpecs />
      <Gallery />
    </main>
  )
}
