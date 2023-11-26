import React, { useEffect, useState } from "react";
import "./Details.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Details({
  contentType,
  selectedItemUrl,
  changeSelectedItemUrl,
  contentData,
}) {
  const [selectedItemData, setSelectedItemData] = useState(null);
  console.log(contentType.charAt(0).toUpperCase() + contentType.slice(1));

  const fetchSelectedData = async (url) => {
    const response = await fetch(url);
    const responseData = await response.json();
    // console.log(responseData);
    setSelectedItemData(responseData);
  };

  useEffect(() => {
    selectedItemUrl && fetchSelectedData(selectedItemUrl);
  }, [selectedItemUrl]);

  let entries = null;

  if (selectedItemData) {
    entries = Object.entries(selectedItemData);
  }

  const closeDetails = () => {
    changeSelectedItemUrl(null);
  };

  return (
    <div className={`Details ${!selectedItemUrl ? "hidden" : "notHidden"}`}>
      <div className="detailsHeading">
        {contentType.charAt(0).toUpperCase() +
          contentType.slice(1) +
          " Details"}
        <div className="detailsCrossBtn" onClick={() => closeDetails()}>
          <CloseRoundedIcon></CloseRoundedIcon>
        </div>
      </div>
      {entries &&
        entries.map(([key, value]) => {
          console.log(key + value);
          if (typeof value !== "object") {
            return (
              <React.Fragment key={key}>
                <div className="detailKey">{key}</div>
                <div className="detailValue">{value}</div>
              </React.Fragment>
            );
          }
        })}
      <div className="closeBtnContainer">
        <div className="closeBtn" onClick={() => closeDetails()}>
          Close
        </div>
      </div>
    </div>
  );
}

export default Details;
