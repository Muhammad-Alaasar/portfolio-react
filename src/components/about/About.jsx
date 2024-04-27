import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h2>About me</h2>
        <img src={theme_pattern} alt="Image" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile Image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced front end developer with over a decade of
              professional expertise in the field. throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for front end development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication i
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Angular</p>
              <hr style={{ width: "calc(90% - 150px)" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "calc(85% - 150px)" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "calc(95% - 150px)" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "calc(80% - 150px)" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "calc(95% - 150px)" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h2>5+</h2>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h2>30+</h2>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h2>20+</h2>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
