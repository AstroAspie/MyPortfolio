import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Project Images 
import businessBob from "../assets/img/business_bob.png";
import unityProject from "../assets/img/unity_project.png";
// import webArcade from "../assets/img/web-arcade.png";
import cssHeartbeat from "../assets/img/css-heartbeat.png";
import treasureHunt from "../assets/img/treasure_hunter.png";
import numberGuess from "../assets/img/number_guess.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

  const featuredProjects = [
    {
      title: "Space Invaders",
      description: "Web Development",
      imgUrl: businessBob // Replace with spaceInvadersClone
    }
  ]

  const projects = [
    {
      title: "CSS Heartbeat",
      description: "Design & Development",
      imgUrl: cssHeartbeat,
    },
    {
      title: "Treasure Hunter",
      description: "Phaser.js",
      imgUrl: treasureHunt,
    },
    {
      title: "Number Guess",
      description: "Web Developer",
      imgUrl: numberGuess,
    },
    {
      title: "Winter Wonderland",
      description: "OpenGL Winter WonderLand",
      imgUrl: ""
    },
    {
      title: "AWS Automation",
      description: "AWS IAM and AppStream automation",
      imgUrl: ""
    },
    {
      title: "Netflix Clone",
      description: "Netflix Clone in django",
      imgUrl: ""
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I haven't worked on many personal projects but I aim to change that. Watch this space my friends.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Featured</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Full-Stack Dev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Cyber Security</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          featuredProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Building my own security tools is a new experience, albeit exhilarating.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
