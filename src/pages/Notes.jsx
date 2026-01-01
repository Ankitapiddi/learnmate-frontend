import { useEffect, useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}/api/notes`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Notes from backend:", data);
        setNotes(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching notes:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ padding: "20px" }}>Loading notes...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Notes</h2>

      {notes.length === 0 ? (
        <p>No notes found</p>
      ) : (
        notes.map((note) => (
          <div
            key={note._id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "12px",
              marginBottom: "10px",
            }}
          >
            <h4>{note.title}</h4>
            <p>{note.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Notes;