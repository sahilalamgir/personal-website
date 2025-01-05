import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import alzguardimg from "../assets/img/alzguardimg.webp";
import spotifyimg from "../assets/img/spotifyimg.png";
import blogimg from "../assets/img/blogimg.png";
import retailimg from "../assets/img/retailimg.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const ds_projects = [
    {
      title: "Mood-Based Spotify Playlist Generator",
      description: "Built a full-stack app where users can enter any prompt and the app will generate a Spotify personalized playlist.",
      imgUrl: spotifyimg,
    },
    {
      title: "AlzGuard",
      description: "Collaborated in a team of 3 to build an AI Alzheimer's detection tool by using a CNN to scan MRI images and determine the likelihood of Alzheimer's.",
      imgUrl: alzguardimg,
    },
    {
      title: "Retail Weekly Sales Prediction",
      description: "Trained an XGBoost regression model to predict weekly sales of various stores based on features like department and markdowns from Kaggle dataset.",
      imgUrl: retailimg,
    },
  ]

  const fs_projects = [
    {
      title: "Mood-Based Spotify Playlist Generator",
      description: "Built a full-stack app where users can enter any prompt and the app will generate a Spotify personalized playlist.",
      imgUrl: spotifyimg,
    },
    {
      title: "AlzGuard",
      description: "Collaborated in a team of 3 to build an AI Alzheimer's detection tool by using a CNN to scan MRI images and determine the likelihood of Alzheimer's.",
      imgUrl: alzguardimg,
    },
    {
      title: "Blog App",
      description: "Created full-stack blog application with simulated multi-user environment with blog posting and commenting features.",
      imgUrl: blogimg,
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__lightSpeedInRight" : ""}>
                  <h2>Projects</h2>
                  <p>I love working on projects, whether it's exploring and analyzing data, building a machine learning model, or developing a full-stack app!</p>
                  </div>
              }
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Data Science</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">AI/ML</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Full-Stack</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {ds_projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}/>
                      )
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {ds_projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}/>
                      )
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {fs_projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}/>
                      )
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  )
}