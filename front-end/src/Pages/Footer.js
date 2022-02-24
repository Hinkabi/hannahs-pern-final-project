import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/Hinkabi">
        <img src={Github} alt="github" />
      </a>

      <a href="https://www.linkedin.com/in/hannah-inkabi/">
        <img src={LinkedIn} alt="linkedin" />
      </a>
    </div>
  );
}

export default Footer;
