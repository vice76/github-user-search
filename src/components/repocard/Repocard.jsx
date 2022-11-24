import React from "react";
import "./repocard.css";
import Chip from "@mui/material/Chip";

const Repocard = ({ repo }) => {
  return (
    <div className="repocard">
      <h3>{` ${repo.name}`}</h3>
      <p className="des">{`${
        repo.description !== null ? repo.description : "None"
      }`}</p>
      <Chip
        key={repo.id}
        className="chip"
        label={` ${repo.language !== null ? repo.language : "None"}`}
        color="primary"
      />
    </div>
  );
};

export default Repocard;
