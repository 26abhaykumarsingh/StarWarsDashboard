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
import { useEffect, useState } from "react";
import Content from "./components/Content";

function App() {
  const [contentType, setContentType] = useState("");

  const [contentData, setContentData] = useState(null);

  const [selectedItemUrl, setSelectedItemUrl] = useState(null); //will have url of the item

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const fetchData = async (contentType) => {
    setContentType(contentType);
    const response = await fetch("https://swapi.dev/api/" + contentType);
    const responseData = await response.json();
    setContentData(responseData);
  };

  const changeSelectedItemUrl = (url) => {
    setSelectedItemUrl(url);
  };

  return (
    <Router>
      <div className="App">
        <Sidebar
          setIsMobileMenuOpen={setIsMobileMenuOpen}
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
          <Route
            path="/"
            element={
              <Home
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                fetchData={fetchData}
              />
            }
          />
          <Route
            path="/films"
            element={
              <Content
                contentType={"Films"}
                setContentType={setContentType}
                contentData={contentData}
                setContentData={setContentData}
                changeSelectedItemUrl={changeSelectedItemUrl}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            }
          />
          <Route
            path="/people"
            element={
              <Content
                contentType={"People"}
                setContentType={setContentType}
                contentData={contentData}
                setContentData={setContentData}
                changeSelectedItemUrl={changeSelectedItemUrl}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            }
          />
          <Route
            path="/planets"
            element={
              <Content
                contentType={"Planets"}
                setContentType={setContentType}
                contentData={contentData}
                setContentData={setContentData}
                changeSelectedItemUrl={changeSelectedItemUrl}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            }
          />
          <Route
            path="/species"
            element={
              <Content
                contentType={"Species"}
                setContentType={setContentType}
                contentData={contentData}
                setContentData={setContentData}
                changeSelectedItemUrl={changeSelectedItemUrl}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            }
          />
          <Route
            path="/starships"
            element={
              <Content
                contentType={"Starships"}
                setContentType={setContentType}
                contentData={contentData}
                setContentData={setContentData}
                changeSelectedItemUrl={changeSelectedItemUrl}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            }
          />
          <Route
            path="/vehicles"
            element={
              <Content
                contentType={"Vehicles"}
                setContentType={setContentType}
                contentData={contentData}
                setContentData={setContentData}
                changeSelectedItemUrl={changeSelectedItemUrl}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
