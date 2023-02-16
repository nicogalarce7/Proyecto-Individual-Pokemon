import github from "../../assets/githubb.png";
import linkedin from "../../assets/linkedin.png";
import portafolio from "../../assets/web.png";
import email from "../../assets/mail.png";

import "./About.css";
export default function About() {
  return (
    <>
      <div className="container_about">
        <div className="about">
          <div className="aboutInfo">
            <h1>PI-Pokemons</h1>
            <p>
              This project was created as part of my fullstack developer
              education at{" "}
              <a
                href="https://www.soyhenry.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Henry bootcamp
              </a>
              . In order to map all the different breeds, this app consumes data
              from{" "}
              <a
                href="https://pokeapi.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                the pokemons API
              </a>
              . It is also possible to create a new dog breed, entering a name,
              weight, height, life span and temperaments.
            </p>
            <p>
              Any feedback you can provide will be greatly appreciated. Thank
              you, and don't forget to create your own breed!
            </p>
          </div>
          <h1 className="TechTitle">Used technologies:</h1>
          <div className="techContainer">
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt=""
              />
              <h1>Javascript</h1>
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt=""
              />
              <h1>HTML</h1>
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt=""
              />
              <h1>CSS</h1>
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt=""
              />
              <h1>React</h1>
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt=""
              />
              <h1>Redux</h1>
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt=""
              />
              <h1>Express</h1>
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt=""
              />
              <h1>PostgreSQL</h1>
            </div>
          </div>
          <h1 className="TechTitle">Contact: </h1>
          <div className="redes_sociales">
            <a
              href="https://linkedin.com/in/nicolasgalarce"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <a
              href="https://github.com/nicogalarce7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>
            <a
              href="mailto:nicolasgalarce18@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={email} alt="email" />
            </a>
            <a
              href="https://linkedin.com/in/nicolasgalarce"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={portafolio} alt="portafolio" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}