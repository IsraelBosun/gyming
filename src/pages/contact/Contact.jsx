import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_2.jpg"
import {MdEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <Header title="Get in touch" image= {HeaderImage} >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus animi excepturi quae asperiores libero vero quaerat, eaque ea.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:israelbosun1@gmail.com" target="_blank" rel = "noreferrer noopener"><MdEmail /></a>
            <a href="https://facebook.com" target="_blank" rel = "noreferrer noopener"><BsMessenger /></a>
            <a href="https://wa.me/+2348150425188" target="_blank" rel = "noreferrer noopener"><IoLogoWhatsapp /></a>
          </div>
        </div>
    </section>
    </>
    
  )
}

export default Contact