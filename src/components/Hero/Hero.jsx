import "./hero.scss";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="imgbox">
        <img src="assets/img/sg_transparent.png" alt="SG" />
      </div>
      <div className="intro">
        <div className="title">
          <h2>
            {" "}
            &lt; <span>Hello World</span> &gt;{" "}
          </h2>
          <h1>
            I am <span className="name">Sujhan Ghimire,</span>
          </h1>
          <h4>an aspiring Frontend Web Designer and Developer.</h4>
        </div>
        <div className="desc">
          <p>
            Currently a junior at{" "}
            <span className="school">Clark University, MA</span> pursuing
            <span className="major"> Computer Science</span>,{" "}
            <br />I bring to the industry my passion and skills to create modern
            looking websites.
          </p>
        </div>
        <div className="btn">
          <a href="#contact" className="connect">
            Connect with me
          </a>
        </div>
      </div>
    </div>
  );
}
