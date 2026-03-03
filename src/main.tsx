import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header'
import Body from './Body'
import Sponsors from './Sponsors'
import Footer from './components/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="bg-white font-sans">
      <Header />
      <main className="pt-20">
        <Body />
        <Sponsors />
        <Footer />
      </main>
    </div>
  </StrictMode>
)
