import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>🚀 DevOps CI/CD</h2>
        <div>
          <a href="#about">About</a>
          <a href="#tech">Tech</a>
          <a href="#workflow">Workflow</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Automate Your Deployment ⚡
        </motion.h1>
        <p>CI/CD with GitHub, AWS CodePipeline & S3</p>

        <div className="hero-buttons">
          <a href="YOUR_S3_LINK" target="_blank">
            <button className="btn primary">Live Demo</button>
          </a>
          <button className="btn secondary">GitHub Repo</button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>📌 About Project</h2>
        <p>
          This project demonstrates a fully automated CI/CD pipeline where every
          code push triggers build and deployment using AWS services.
        </p>
      </section>

      {/* Features */}
      <section id="tech" className="section">
        <h2>⚙️ Technologies</h2>
        <div className="cards">
          <div className="card">⚛ React + Vite</div>
          <div className="card">🔧 GitHub</div>
          <div className="card">☁ AWS S3</div>
          <div className="card">🔄 CodePipeline</div>
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="section">
        <h2>🔄 Workflow</h2>
        <div className="timeline">
          <div>Code</div>
          <div>GitHub</div>
          <div>Build</div>
          <div>Deploy</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 DevOps Project | Built by You 🚀</p>
      </footer>
    </div>
  );
}

export default App;
