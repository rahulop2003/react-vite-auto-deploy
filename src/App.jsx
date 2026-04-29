import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>🚀 DevOps CI/CD Project</h2>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Automated React Deployment</h1>
        <p>Using GitHub, AWS CodePipeline & S3</p>
        <a href="#" target="_blank">
          <button className="btn">View Live Project</button>
        </a>
      </section>

      {/* About */}
      <section className="section">
        <h2>📌 About Project</h2>
        <p>
          This project demonstrates a complete CI/CD pipeline where code pushed
          to GitHub is automatically built and deployed to AWS S3 using
          CodePipeline and CodeBuild.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="section">
        <h2>⚙️ Technologies Used</h2>
        <div className="cards">
          <div className="card">⚛ React + Vite</div>
          <div className="card">🔧 Git & GitHub</div>
          <div className="card">☁ AWS S3</div>
          <div className="card">🔄 CodePipeline</div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section">
        <h2>🔄 CI/CD Workflow</h2>
        <p className="flow">
          Code → GitHub → CodePipeline → CodeBuild → S3 → Live Website 🚀
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 DevOps Project | Built with React</p>
      </footer>
    </div>
  );
}

export default App;
