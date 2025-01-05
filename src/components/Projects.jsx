import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const ds_projects = [
    {
      title: "Mood-Based Spotify Playlist Generator",
      description: "Built a full-stack app where users can enter any prompt and the app will generate a Spotify personalized playlist.",
      imgUrl: projImg1,
    },
    {
      title: "AlzGuard",
      description: "Collaborated in a team of 3 to build an AI Alzheimer's detection tool by using a CNN to scan MRI images and determine the likelihood of Alzheimer's.",
      imgUrl: projImg2,
    },
    {
      title: "Retail Weekly Sales Prediction",
      description: "Trained an XGBoost regression model to predict weekly sales of various stores based on features like department and markdowns from Kaggle dataset.",
      imgUrl: projImg3,
    },
  ]

  const fs_projects = [
    {
      title: "Mood-Based Spotify Playlist Generator",
      description: "Built a full-stack app where users can enter any prompt and the app will generate a Spotify personalized playlist.",
      imgUrl: projImg1,
    },
    {
      title: "AlzGuard",
      description: "Collaborated in a team of 3 to build an AI Alzheimer's detection tool by using a CNN to scan MRI images and determine the likelihood of Alzheimer's.",
      imgUrl: projImg2,
    },
    {
      title: "Blog App",
      description: "Created full-stack blog application with simulated multi-user environment with blog posting and commenting features.",
      imgUrl: projImg3,
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