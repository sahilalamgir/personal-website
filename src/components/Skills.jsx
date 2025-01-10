import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mlicon from "../assets/img/mlicon.png";
import dsicon from "../assets/img/dsicon.png";
import feicon from "../assets/img/feicon.png";
import beicon from "../assets/img/beicon.png";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>Skills</h2>
                <p>Below are some of my skills. These are subjects which I am passionate about!<br />I am always learning new things to develop my skillset.</p>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                  <div className="item">
                    <img src={dsicon} alt="rando" />
                    <h5>Data Science</h5>
                  </div>
                  <div className="item">
                    <img src={feicon} alt="rando" />
                    <h5>Front-End Development</h5>
                  </div>
                  <div className="item">
                    <img src={mlicon} alt="rando" />
                    <h5>Machine Learning</h5>
                  </div>
                  <div className="item">
                    <img src={beicon} alt="rando" />
                    <h5>Back-End Development</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} />
      </section>
    )
}