import { useState } from "react";

function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [source, setSource] = useState("");

  const user = "testuser"; // keep existing setup

  const askQuestion = async () => {
    if (!question) return;

    const res = await fetch("http://localhost:3001/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, user }),
    });

    const data = await res.json();
    setAnswer(data.answer);
    setSource(data.source);
  };

  return (
    <div style={styles.container}>
      <h2>Ask From My Notes</h2>
      <p style={styles.subtitle}>
        Answers are generated only from your saved notes
      </p>

      <textarea
        style={styles.textarea}
        placeholder="Ask your question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button style={styles.button} onClick={askQuestion}>
        Ask
      </button>

      {answer && (
        <div style={styles.answerBox}>
          <p>{answer}</p>
          <small>Source: {source}</small>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    background: "#F6F0D7",
    minHeight: "100vh",
    color: "#2F3E2E",
  },
  subtitle: {
    marginBottom: "20px",
  },
  textarea: {
    width: "100%",
    maxWidth: "500px",
    height: "80px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #C5D89D",
    marginBottom: "10px",
  },
  button: {
    background: "#89986D",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  answerBox: {
    background: "#FFFFFF",
    border: "1px solid #C5D89D",
    borderRadius: "10px",
    padding: "15px",
    maxWidth: "500px",
  },
};

export default Chat;
