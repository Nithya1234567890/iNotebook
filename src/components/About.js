import React from "react";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className="container text-center">
        <h1 style={{ margin: "3rem" }}>iNotebook</h1>
        <h3 style={{ margin: "4rem" }}>
          Welcome to iNotebook, your ultimate digital notebook companion
          designed to revolutionize the way you capture, organize, and manage
          your notes.
        </h3>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/9dcb5f13833115.56035845a3c87.PNG"
          alt=""
        />
        <div className="mission box" style={{ margin: "4.5rem" }}>
          <h2 style={{ marginBottom: "20px" }}>Our Mission</h2>
          <p>
            At iNotebook, we're committed to enhancing productivity and
            creativity by providing a seamless digital note-taking experience.
            We believe in empowering individuals to unleash their potential
            through efficient organization and intuitive technology.
          </p>
        </div>
        <div className="features box" style={{ margin: "4.5rem" }}>
          <h2 style={{ marginBottom: "-20px" }}>Features</h2>
          <p style={{ textAlign: "left", margin: "2.5rem" }}>
            <b>Effortless Note-Taking</b>: With iNotebook, jotting down ideas,
            sketches, or important information is as simple as picking up a pen.
            Our intuitive interface ensures that capturing thoughts is quick and
            convenient, whether you're in a meeting, lecture, or brainstorming
            session.,
            <br />
            <b>Organize with Ease</b>: Say goodbye to scattered notes and messy
            notebooks. iNotebook offers powerful organization tools, allowing
            you to categorize your notes into customizable notebooks and tags.
            With a simple search function, finding specific notes is a breeze.
            <br />
            <b>Sync Across Devices</b>: Your notes are always at your
            fingertips, no matter where you are. iNotebook seamlessly syncs your
            data across all your devices, ensuring that you can access and edit
            your notes on your smartphone, tablet, or computer.
            <br />
            <b>Secure and Private</b>: We understand the importance of privacy
            and security when it comes to your personal and professional notes.
            iNotebook employs robust encryption and authentication measures to
            safeguard your data, giving you peace of mind.
          </p>
        </div>
        <div className="started box" style={{margin:"3rem"}}>
          <h2 style={{ marginBottom: "15px" }}>Get Started</h2>
          <p>
            Ready to experience the power of digital note-taking? Download
            iNotebook today and take the first step toward a more organized and
            productive life. <br />
          </p>
        </div>
        <div
          className="join row align-items-center"
          style={{
            margin: "3rem",
            backgroundColor: "beige",
            borderRadius: "30px",
            padding: "3rem",
          }}
        >
          <div className="input-section col-md-7">
            <h3>
              Join the iNotebook community and discover a world of endless
              possibilities for capturing, organizing, and sharing your ideas.
              Welcome to the future of note-taking.
            </h3>
          </div>
          <div className="col-md-5">
            <div className="input">
              <input type="text" placeholder="Your Email" style={{padding:"7px",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px",border:"none",outline:"none",paddingLeft:"15px"}}/>
              <button style={{borderRadius:"none",padding:"6px",marginBottom:"5px",borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}} className="btn btn-primary">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
