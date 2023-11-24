import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
} from "react-router-dom";
import { useState } from "react";
import Content from "./components/Content";

function App() {
  const [contentData, setContentData] = useState(null);

  return (
    <Router>
      <div className="App">
        <Sidebar
          contentData={contentData}
          setContentData={setContentData}
        ></Sidebar>
        {/* main */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/films"
            element={
              <Content
                contentType={"Films"}
                contentData={contentData}
                setContentData={setContentData}
              />
            }
          />
          <Route
            path="/people"
            element={
              <Content
                contentType={"People"}
                contentData={contentData}
                setContentData={setContentData}
              />
            }
          />
          <Route
            path="/planets"
            element={
              <Content
                contentType={"Planets"}
                contentData={contentData}
                setContentData={setContentData}
              />
            }
          />
          <Route
            path="/species"
            element={
              <Content
                contentType={"Species"}
                contentData={contentData}
                setContentData={setContentData}
              />
            }
          />
          <Route
            path="/starships"
            element={
              <Content
                contentType={"Starships"}
                contentData={contentData}
                setContentData={setContentData}
              />
            }
          />
          <Route
            path="/vehicles"
            element={
              <Content
                contentType={"Vehicles"}
                contentData={contentData}
                setContentData={setContentData}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
