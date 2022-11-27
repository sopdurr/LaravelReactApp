import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BookList from "./components/list.component";
import CreateNew from "./components/createNew";
import HomeScreen from "./components/HomeScreen";

function App() {
  return (
    <div>
    <Router>
      <div>
        <div className="header">
          <h3>Fantastik4 BlogPage</h3>
        </div>
        <div className="navbar d-flex justify-content-center">
          <div className="router">
            <nav class="navbar navbar-expand-lg">
              <div id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link">
                      <Link className="theLink" to="/">
                        Home
                      </Link>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">
                      <Link className="theLink" to="/booklist">
                        Blog List
                      </Link>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">
                      <Link className="theLink" to="/create">
                        Create Blog
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="background-image">
          <Routes>
          <Route path="/" element={<HomeScreen />} />
            <Route path="/booklist" element={<BookList />} />
            <Route path="/create" element={<CreateNew />} />
          </Routes>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
