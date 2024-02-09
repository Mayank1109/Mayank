import React from "react";
import "./dashCard.css";
import Folder from "./folder";

const DashCard = ({ item }) => {
  return (
    <div className="dash__card" key={item.id}>
      <div>
        <Folder />
        <h3 className="dash__title">{item.sub}</h3>
      </div>
      <div>
        <p>
          {item.desc}

          <span style={{ color: "var(--title-color-dark)" }}>{item.extra}</span>
        </p>
      </div>
    </div>
  );
};

export default DashCard;
