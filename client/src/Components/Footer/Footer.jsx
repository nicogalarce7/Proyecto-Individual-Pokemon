import "./Footer.css";
import portafolio from "../../assets/web.png"
import github from "../../assets/githubb.png";
import linkedin from "../../assets/linkedin.png";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="site_footer">
        <div className="redes_sociales">
          <a
          className="a_git"
            href="https://linkedin.com/in/nicolasgalarce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
          className="git"
            href="https://github.com/nicogalarce7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" />
          </a>
          <a
            className="web_side"
            href="https://github.com/nicogalarce7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={portafolio} alt="portafolio" />
          </a>
        </div>
        <div className="copyright">
          <p>
            Page created by Galarce Nicolas
            <br />
            &copy; 2023. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}