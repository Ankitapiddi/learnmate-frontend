import { useEffect, useState } from "react";

function Dashboard() {
  const user = "testuser"; // same as notes
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3001/api/notes/${user}`)
      .then((res) => res.json())
      .then((notes) => {
        // assume 10 notes = 100% completion
        const percent = Math.min((notes.length / 10) * 100, 100);
        setProgress(Math.round(percent));
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1>Dashboard</h1>
      <p>Welcome to LearnMate</p>

      <div style={styles.card}>
        <h3>📊 Learning Progress</h3>
        <p>{progress}% completed</p>

        <div style={styles.bar}>
          <div style={{ ...styles.fill, width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    background: "#F6F0D7",
    minHeight: "100vh",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    maxWidth: "400px",
    border: "1px solid #C5D89D",
  },
  bar: {
    height: "12px",
    background: "#eee",
    borderRadius: "6px",
    overflow: "hidden",
    marginTop: "10px",
  },
  fill: {
    height: "100%",
    background: "#9CAB84",
  },
};

export default Dashboard;
