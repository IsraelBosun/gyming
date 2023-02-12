import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_1.jpg"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"
import "./about.css"

const About = () => {
  return (
    <>
    <Header title = "About Us" image = {HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt, maiores libero maxime a ab possimus ullam ipsam?
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="our story" />
        </div>
        <div className = "about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid odit nobis ex aliquam nemo laudantium. Doloremque, excepturi blanditiis! Perspiciatis qui laudantium esse aperiam ex delectus enim, reprehenderit dolor, fuga, cumque nisi officia sint magnam?
          </p>
          
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At debitis provident, libero est sit eaque eius. Nostrum aliquam deleniti dolores neque assumenda excepturi quisquam accusamus!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aperiam quisquam soluta ipsa veniam rem!
          </p>
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__Vision-container">
        <div className = "about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid odit nobis ex aliquam nemo laudantium. Doloremque, excepturi blanditiis! Perspiciatis qui laudantium esse aperiam ex delectus enim, reprehenderit dolor, fuga, cumque nisi officia sint magnam?
          </p>
          
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At debitis provident, libero est sit eaque eius. Nostrum aliquam deleniti dolores neque assumenda excepturi quisquam accusamus!
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="our vision" />
        </div>
      </div>
    </section>

<section className="about__mission">
<div className="container about__mission-container">
  <div className="about__section-image">
    <img src={MissionImage} alt="our mission" />
  </div>
  <div className = "about__section-content">
    <h1>Our Mission</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid odit nobis ex aliquam nemo laudantium. Doloremque, excepturi blanditiis! Perspiciatis qui laudantium esse aperiam ex delectus enim, reprehenderit dolor, fuga, cumque nisi officia sint magnam?
    </p>
    
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. At debitis provident, libero est sit eaque eius. Nostrum aliquam deleniti dolores neque assumenda excepturi quisquam accusamus!
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aperiam quisquam soluta ipsa veniam rem!
    </p>
  </div>
</div>
</section>
    
    </>
  )
}

export default About