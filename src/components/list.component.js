import { useState, useEffect } from "react";

function BookList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [render, rerender] = useState(false);
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

  const handleClickRemove = (id) => {
    fetch(`http://127.0.0.1:8000/api/crud/${id}`, {
      method: "DELETE",
    }).then((result) => {
      console.log(result);
      rerender(!render);
    });
    rerender(!render);
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cruds")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [render]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div
        className="container"
        style={{ width: "500px", backgroundColor: "transparent" }}
      >
        {items.map((item) => (
          <div className="row">
            <div
              class="card d-flex justify-content-center text-center"
              style={{ backgroundColor: "transparent", color: "whitesmoke" }}
            >
              <div key={item.id} class="card-body">
                <h5 class="card-title">{item.title}</h5>

                <p class="card-text">{item.author}</p>
                <p>Blogger: {item.publisher}</p>
                <button
                  style={{ color: "red" }}
                  className="btn"
                  onClick={() => handleClickRemove(item.id)}
                >
                  Delete Blog
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default BookList;
