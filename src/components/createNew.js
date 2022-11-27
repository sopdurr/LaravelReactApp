import { useState } from "react";

function CreateNew() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, author, publisher };

    fetch("http://127.0.0.1:8000/api/crud", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setAuthor("");
      setTitle("");
      setPublisher("");
    });
  };

  return (
    <div
      className="container text center"
      style={{ width: "450px", paddingTop: "10px", color: "white" }}
    >
      <div className="create">
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label>Blog Title</label>
            <input
            required
              type="text"
              class="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label f>Blog Content</label>
            <textarea
            required
              class="form-control"
              id=""
              rows="3"
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
            ></textarea>
          </div>
          <div class="form-group">
            <label>Blog Author</label>
            <input
            required
              type="text"
              class="form-control"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div class="form-group">
            <button
              className="btn btn-success text-center"
              style={{ marginTop: "5px", width: "100%" }}
            >
              Post Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNew;
