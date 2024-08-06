import { Footer } from "../components/sections/Footer"
import { Header } from "../components/sections/Header"
import { Videos } from "../components/sections/Videos"
import { Works } from "../components/sections/Works"

export const Home = () => {
  return (
    <div>
      <Header />
      <Videos />
      <Works />
      <Footer />
    </div>
  )
}
