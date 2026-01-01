import { useEffect, useState } from "react";

function Notes() {
  const user = "testuser"; // keep as-is
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  // FETCH NOTES
  useEffect(() => {
    fetch(`http://localhost:3001/api/notes/${user}`)
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch(() => alert("Error fetching notes"));
  }, []);

  // ADD TEXT NOTE
  const addNote = async () => {
    if (!title || !content) return alert("Fill all fields");

    const res = await fetch("http://localhost:3001/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, user }),
    });

    const data = await res.json();
    setNotes([data, ...notes]);
    setTitle("");
    setContent("");
  };

  // UPLOAD FILE
  const uploadFile = async () => {
    if (!file) return alert("Select a file");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("user", user);

    const res = await fetch("http://localhost:3001/api/notes/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setNotes([data, ...notes]);
    setFile(null);
    alert("File uploaded");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>My Notes</h1>
      <p>Add and manage your study notes</p>

      {/* ADD NOTE */}
      <input
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />
      <textarea
        placeholder="Write your note here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br /><br />
      <button onClick={addNote}>Add Note</button>

      <hr style={{ margin: "30px 0" }} />

      {/* UPLOAD FILE */}
      <h2>Upload Notes (PDF / TXT)</h2>
      <input
        type="file"
        accept=".pdf,.txt"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br /><br />
      <button onClick={uploadFile}>Upload File</button>

      <hr style={{ margin: "30px 0" }} />

      {/* DISPLAY NOTES */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {notes.map((note) => (
          <div
            key={note._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>{note.title}</h3>
            <p>{note.content}</p>

            {note.filePath && (
              <a
                href={`http://YOUR_BACKEND_URL/${note.filePath}`}
                target="_blank"
                rel="noreferrer"
              >
                View File
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
