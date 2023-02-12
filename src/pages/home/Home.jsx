import MainHeader from "../../components/MainHeader"
import Programs from "../../components/Programs"
import Values from "../../components/Values"
import FAQs from "../../components/FAQs"
import "./home.css"
import Testimonials from "../../components/Testimonials"
import Footer from "../../components/Footer.jsx"

const Home = () => {
  return (
    <>
    <MainHeader />
    <Programs />
    <Values />
    <FAQs/>
    <Testimonials />
    </>
  )
}

export default Home