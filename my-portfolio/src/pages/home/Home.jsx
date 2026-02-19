import { createElement } from "react";
import {
  FaBehance,
  FaCloud,
  FaCode,
  FaGithub,
  FaLinkedinIn,
  FaReact,
  FaXTwitter,
} from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import logoE from "../../assets/logo-e.png";

const socialItems = [
  { name: "LinkedIn", Icon: FaLinkedinIn },
  { name: "X", Icon: FaXTwitter },
  { name: "Behance", Icon: FaBehance },
  { name: "GitHub", Icon: FaGithub },
];

const Home = () => {
  const scrollToContact = () => {
    const target = document.getElementById("contact");
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="home-section retro-surface">
      <div className="home-sticker home-sticker-ts" aria-hidden="true">
        <SiTypescript />
      </div>
      <div className="home-sticker home-sticker-react" aria-hidden="true">
        <FaReact />
      </div>
      <div className="home-sticker home-sticker-cloud" aria-hidden="true">
        <FaCloud />
      </div>
      <div className="home-sticker home-sticker-code" aria-hidden="true">
        <FaCode />
      </div>

      <div className="home-center">
        <div className="home-avatar-wrap panel">
          <div className="home-avatar-ring">
            <div className="home-avatar">
              <img src={logoE} alt="Ekta Poonia logo" className="home-avatar-image" />
            </div>
          </div>
        </div>

        <h1 className="home-name">EKTA POONIA</h1>
        <p className="home-role">Full-Stack Web Developer</p>
        <div className="home-pill">B.A. Student | Open to Internship Roles</div>

        <div className="home-socials">
          {socialItems.map(({ name, Icon }) => (
            <button key={name} type="button" className="home-social-btn panel" aria-label={name}>
              {createElement(Icon)}
            </button>
          ))}
        </div>

        <button type="button" className="home-cta panel" onClick={scrollToContact}>
          LET&apos;S TALK
        </button>
      </div>
    </section>
  );
};

export default Home;
