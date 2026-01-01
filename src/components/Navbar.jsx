import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
  };

  return (
    <div style={styles.nav}>
      <h3 style={styles.logo}>LearnMate</h3>

      <div style={styles.links}>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/notes" style={styles.link}>Notes</Link>
        <Link to="/chat" style={styles.link}>Ask</Link>
        <button onClick={logout} style={styles.btn}>Logout</button>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 28px",
    background: "#9CAB84",   // soft sage
    color: "#2F3E2E",
  },
  logo: {
    margin: 0,
    fontWeight: "600",
  },
  links: {
    display: "flex",
    gap: "18px",
    alignItems: "center",
  },
  link: {
    color: "#2F3E2E",
    textDecoration: "none",
    fontWeight: "500",
  },
  btn: {
    background: "#89986D",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Navbar;
