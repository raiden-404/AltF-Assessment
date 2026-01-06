import BuildSection from './components/BuildSection'
import CategoriesSection from './components/CategoriesSection'
import FeaturedSection from './components/FeaturedSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { theme } = useTheme();
  return (
    <div className={theme === "dark" ? "bg-black" : "bg-white"}>
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <BuildSection />
      <CategoriesSection />
      <Footer />
    </div>
  )
}

export default App
