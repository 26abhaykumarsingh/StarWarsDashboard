import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Details from "./components/Details";
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
  const [contentType, setContentType] = useState("");

  const [contentData, setContentData] = useState(null);

  const [selectedItemUrl, setSelectedItemUrl] = useState(null); //will have url of the item

  const changeSelectedItemUrl = (url) => {
    setSelectedItemUrl(url);
  };

  return (
    <Router>
      <div className="App">
        <Sidebar
          contentType={contentType}
          setContentType={setContentType}
          contentData={contentData}
          setContentData={setContentData}
        ></Sidebar>
        {/* {contentType === "Films" && (
          <>
            <Details
              contentType={contentType}
              selectedItem={selectedItem}
              changeSelectedItem={changeSelectedItem}
              contentData={contentData}
            ></Details>
          </>
        )} */}
        <Details
          contentType={contentType}
          selectedItemUrl={selectedItemUrl}
          changeSelectedItemUrl={changeSelectedItemUrl}
          contentData={contentData}
        ></Details>
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
                changeSelectedItemUrl={changeSelectedItemUrl}
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
                changeSelectedItemUrl={changeSelectedItemUrl}
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
                changeSelectedItemUrl={changeSelectedItemUrl}
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
                changeSelectedItemUrl={changeSelectedItemUrl}
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
                changeSelectedItemUrl={changeSelectedItemUrl}
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
                changeSelectedItemUrl={changeSelectedItemUrl}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
