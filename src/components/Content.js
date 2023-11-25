import { useEffect, useState } from "react";
import React from "react";
import "./Content.css";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReorderRoundedIcon from "@mui/icons-material/ReorderRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

function Content({ contentType, contentData, setContentData }) {
  const [view, setView] = useState("grid");
  const [selectedItem, setSelectedItem] = useState("");
  const changeSelectedItem = (identifier) => {};
  const changeView = (newView) => setView(newView);
  useEffect(() => {
    console.log(view);
  }, [view]);
  return (
    <div className="Content">
      <div className="contentHeader"></div>
      <div className="contentMain">
        <div className="contentMainTop">
          <div className="contentMainTitle">{contentType}</div>
          <div className="viewSelector">
            <div
              className={`gridButton ${view === "grid" ? "selected" : ""}`}
              onClick={() => {
                changeView("grid");
              }}
            >
              <GridViewRoundedIcon /> Grid
            </div>
            <div
              className={`gridButton ${view === "list" ? "selected" : ""}`}
              onClick={() => {
                changeView("list");
              }}
            >
              <ReorderRoundedIcon /> List
            </div>
          </div>
        </div>
        <div
          className="contentMainCards"
          view={view === "grid" ? "grid" : "list"}
        >
          {view === "grid" ? (
            <div className="contentMainCards--grid">
              {contentData &&
                contentData.results.map((item) => {
                  if (contentType === "Films") {
                    return (
                      <div className="card" key={item.title}>
                        <div className="cardImg"></div>
                        <div className="cardBottom">
                          <div className="cardIcon  filmsIcon"></div>
                          <div className="cardTitle">{item.title}</div>
                          <div className="cardHamIcon">
                            <MoreVertRoundedIcon></MoreVertRoundedIcon>
                          </div>
                        </div>
                      </div>
                    );
                  } else if (contentType === "People") {
                    return (
                      <div className="card" key={item.name}>
                        <div className="cardImg"></div>
                        <div className="cardBottom">
                          <div className="cardIcon  peopleIcon"></div>
                          <div className="cardTitle">{item.name}</div>
                          <div className="cardHamIcon">
                            <MoreVertRoundedIcon></MoreVertRoundedIcon>
                          </div>
                        </div>
                      </div>
                    );
                  } else if (contentType === "Planets") {
                    return (
                      <div className="card" key={item.name}>
                        <div className="cardImg"></div>
                        <div className="cardBottom">
                          <div className="cardIcon planetsIcon"></div>
                          <div className="cardTitle">{item.name}</div>
                          <div className="cardHamIcon">
                            <MoreVertRoundedIcon></MoreVertRoundedIcon>
                          </div>
                        </div>
                      </div>
                    );
                  } else if (contentType === "Species") {
                    return (
                      <div className="card" key={item.name}>
                        <div className="cardImg"></div>
                        <div className="cardBottom">
                          <div className="cardIcon speciesIcon"></div>
                          <div className="cardTitle">{item.name}</div>
                          <div className="cardHamIcon">
                            <MoreVertRoundedIcon></MoreVertRoundedIcon>
                          </div>
                        </div>
                      </div>
                    );
                  } else if (contentType === "Starships") {
                    return (
                      <div className="card" key={item.name}>
                        <div className="cardImg"></div>
                        <div className="cardBottom">
                          <div className="cardIcon starshipsIcon"></div>
                          <div className="cardTitle">{item.name}</div>
                          <div className="cardHamIcon">
                            <MoreVertRoundedIcon></MoreVertRoundedIcon>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className="card" key={item.name}>
                        <div className="cardImg"></div>
                        <div className="cardBottom">
                          <div className="cardIcon vehiclesIcon"></div>
                          <div className="cardTitle">{item.name}</div>
                          <div className="cardHamIcon">
                            <MoreVertRoundedIcon></MoreVertRoundedIcon>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          ) : (
            <div className="contentMainCards--list">
              {contentType === "Films" && (
                <>
                  <div className="listHeaderHeading listHeaderHeading1">
                    Name
                  </div>
                  <div className="listHeaderHeading listHeaderHeading2">
                    Director
                  </div>
                  <div className="listHeaderHeading listHeaderHeading3">
                    Release Date
                  </div>
                  <div className="listHeaderHeading listHeaderHeading4"></div>
                  {contentData &&
                    contentData.results.map((item) => {
                      return (
                        <>
                          <div className="listItemData listItemData1">
                            <div className="filmsIcon listItemIcon"></div>
                            {item.title}
                          </div>
                          <div className="listItemData listItemData2">
                            {item.director}
                          </div>
                          <div className="listItemData listItemData3">
                            {item.created.slice(0, 4)}
                          </div>
                          <div className="listItemData listItemData4">
                            <div className="cardHamIcon listCardHamIcon">
                              <MoreVertRoundedIcon></MoreVertRoundedIcon>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </>
              )}
              {contentType === "People" && (
                <>
                  <div className="listHeaderHeading listHeaderHeading1">
                    Name
                  </div>
                  <div className="listHeaderHeading listHeaderHeading2">
                    Gender
                  </div>
                  <div className="listHeaderHeading listHeaderHeading3">
                    Species
                  </div>
                  <div className="listHeaderHeading listHeaderHeading4"></div>
                  {contentData &&
                    contentData.results.map((item) => {
                      return (
                        <>
                          <div className="listItemData listItemData1">
                            <div className="peopleIcon listItemIcon"></div>
                            {item.name}
                          </div>
                          <div className="listItemData listItemData2">
                            {item.gender}
                          </div>
                          <div className="listItemData listItemData3">
                            {item.skin_color}
                          </div>
                          <div className="listItemData listItemData4">
                            <div className="cardHamIcon listCardHamIcon">
                              <MoreVertRoundedIcon></MoreVertRoundedIcon>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </>
              )}
              {contentType === "Planets" && (
                <>
                  <div className="listHeaderHeading listHeaderHeading1">
                    Name
                  </div>
                  <div className="listHeaderHeading listHeaderHeading2">
                    Diameter
                  </div>
                  <div className="listHeaderHeading listHeaderHeading3">
                    Population
                  </div>
                  <div className="listHeaderHeading listHeaderHeading4"></div>
                  {contentData &&
                    contentData.results.map((item) => {
                      return (
                        <>
                          <div className="listItemData listItemData1">
                            <div className="peopleIcon listItemIcon"></div>
                            {item.name}
                          </div>
                          <div className="listItemData listItemData2">
                            {item.diameter}
                          </div>
                          <div className="listItemData listItemData3">
                            {item.population}
                          </div>
                          <div className="listItemData listItemData4">
                            <div className="cardHamIcon listCardHamIcon">
                              <MoreVertRoundedIcon></MoreVertRoundedIcon>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </>
              )}
              {contentType === "Species" && (
                <>
                  <div className="listHeaderHeading listHeaderHeading1">
                    Name
                  </div>
                  <div className="listHeaderHeading listHeaderHeading2">
                    Classification
                  </div>
                  <div className="listHeaderHeading listHeaderHeading3">
                    Language
                  </div>
                  <div className="listHeaderHeading listHeaderHeading4"></div>
                  {contentData &&
                    contentData.results.map((item) => {
                      return (
                        <>
                          <div className="listItemData listItemData1">
                            <div className="peopleIcon listItemIcon"></div>
                            {item.name}
                          </div>
                          <div className="listItemData listItemData2">
                            {item.classification}
                          </div>
                          <div className="listItemData listItemData3">
                            {item.language}
                          </div>
                          <div className="listItemData listItemData4">
                            <div className="cardHamIcon listCardHamIcon">
                              <MoreVertRoundedIcon></MoreVertRoundedIcon>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </>
              )}
              {contentType === "Starships" && (
                <>
                  <div className="listHeaderHeading listHeaderHeading1">
                    Name
                  </div>
                  <div className="listHeaderHeading listHeaderHeading2">
                    Cost in Credits
                  </div>
                  <div className="listHeaderHeading listHeaderHeading3">
                    Model
                  </div>
                  <div className="listHeaderHeading listHeaderHeading4"></div>
                  {contentData &&
                    contentData.results.map((item) => {
                      return (
                        <>
                          <div className="listItemData listItemData1">
                            <div className="peopleIcon listItemIcon"></div>
                            {item.name}
                          </div>
                          <div className="listItemData listItemData2">
                            {item.cost_in_credits}
                          </div>
                          <div className="listItemData listItemData3">
                            {item.model}
                          </div>
                          <div className="listItemData listItemData4">
                            <div className="cardHamIcon listCardHamIcon">
                              <MoreVertRoundedIcon></MoreVertRoundedIcon>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </>
              )}
              {contentType === "Vehicles" && (
                <>
                  <div className="listHeaderHeading listHeaderHeading1">
                    Name
                  </div>
                  <div className="listHeaderHeading listHeaderHeading2">
                    Cost in Credits
                  </div>
                  <div className="listHeaderHeading listHeaderHeading3">
                    Model
                  </div>
                  <div className="listHeaderHeading listHeaderHeading4"></div>
                  {contentData &&
                    contentData.results.map((item) => {
                      return (
                        <>
                          <div className="listItemData listItemData1">
                            <div className="peopleIcon listItemIcon"></div>
                            {item.name}
                          </div>
                          <div className="listItemData listItemData2">
                            {item.cost_in_credits}
                          </div>
                          <div className="listItemData listItemData3">
                            {item.model}
                          </div>
                          <div className="listItemData listItemData4">
                            <div className="cardHamIcon listCardHamIcon">
                              <MoreVertRoundedIcon></MoreVertRoundedIcon>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Content;
