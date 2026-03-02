
import {
  Navbar,
  HeroOverlay,
  AboutSection,
  FeaturedWork,
  AwardsSection,
  Footer
} from './components/UI'
import { SmoothScroll } from './components/Layout'

function App() {
  return (
    <SmoothScroll>
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Main Content */}
      <div className="main-content">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <HeroOverlay />

        {/* About Section */}
        <AboutSection />

        {/* Featured Work */}
        <FeaturedWork />

        {/* Awards & Recognition */}
        <AwardsSection />

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
