import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>10th, CBSE</h4>
                <h5>Resonance International School, Lucknow</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Completed 10th grade with strong academic performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>12th, BSEB</h4>
                <h5>RLSY, Lucknow</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Completed 12th grade with a focus on science subjects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – Mechanical Engineering</h4>
                <h5>Shri Ramswaroop Memorial College of Engineering & Management</h5>
              </div>
              <h3>2022-2026</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology. Gaining technical expertise in mechanical systems while developing a strong interest in software development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Coding Excellence Award</h4>
                <h5>Full Stack Development</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Recognized for outstanding performance in full-stack application development and clean code practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Top Contributor</h4>
                <h5>Open Source Community</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Actively contributed to multiple open-source projects, improving features and resolving complex bugs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Railway Workshop Summer Internship</h4>
                <h5>Alambagh</h5>
              </div>
              <h3>Jun-Jul 2025</h3>
            </div>
            <p>
              Gained exposure to industrial systems and workflow. Developed teamwork and problem-solving skills in a professional environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
