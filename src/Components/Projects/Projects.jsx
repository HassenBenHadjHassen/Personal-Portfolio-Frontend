import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import {
  htmlCssJsProjects,
  reactProjects,
  backendProjects,
} from "./ProjectList.js";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "./Projects.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These are some of my projects. You can find more on my
                    Github. Feel free to contact me if you have any questions.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      className=" mb-5 justify-cnav-pillsontent-center align-items-center"
                      variant="pills"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">HTML/CSS/JS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">React.js</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Backend</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {htmlCssJsProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                link={project.link}
                                {...project}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {reactProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                link={project.link}
                                {...project}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {backendProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                link={project.link}
                                {...project}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};

export default Projects;
