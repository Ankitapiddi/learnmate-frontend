import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.title}>LearnMate</h1>
        <p style={styles.subtitle}>
          A course-aligned learning assistant that helps you study smarter,
          using your own notes.
        </p>

        <button style={styles.cta} onClick={() => navigate("/login")}>
          Get Started
        </button>
      </div>

      {/* FEATURES */}
      <div style={styles.features}>
        <h2>Why LearnMate?</h2>

        <div style={styles.featureGrid}>
          <div style={styles.card}>
            <h4>📘 Smart Notes</h4>
            <p>Store and manage your subject notes in one place.</p>
          </div>

          <div style={styles.card}>
            <h4>💬 Ask From Notes</h4>
            <p>
              Get answers strictly from your own notes — not from the internet.
            </p>
          </div>

          <div style={styles.card}>
            <h4>🎯 Course-Aligned</h4>
            <p>Focused on syllabus-based learning, not generic AI chat.</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        <p>© 2025 LearnMate • Minor Project</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "#F6F0D7",
    minHeight: "100vh",
    color: "#2F3E2E",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  hero: {
    padding: "80px 30px",
    textAlign: "center",
  },
  title: {
    fontSize: "48px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    maxWidth: "600px",
    margin: "0 auto 30px",
  },
  cta: {
    background: "#89986D",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
  features: {
    padding: "40px 30px",
    textAlign: "center",
  },
  featureGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
    flexWrap: "wrap",
  },
  card: {
    background: "#FFFFFF",
    border: "1px solid #C5D89D",
    borderRadius: "12px",
    padding: "20px",
    width: "260px",
  },
  footer: {
    padding: "15px",
    textAlign: "center",
    fontSize: "14px",
    opacity: 0.8,
  },
};

export default Landing;
