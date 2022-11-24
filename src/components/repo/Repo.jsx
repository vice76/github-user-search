import React, { useState, useEffect } from "react";
import "./repo.css";
import Pagination from "@mui/material/Pagination";
import Repocard from "../repocard/Repocard";
const Repo = ({ repodata }) => {
  const [page, setPage] = useState(1);
  const [dt, setDt] = useState([]);

  useEffect(() => {
    var d = [];
    for (var i = (page - 1) * 6; i < Math.min(page * 6, repodata.length); i++) {
      d.push(<Repocard repo={repodata[i]} key={repodata[i].name}></Repocard>);
    }
    setDt(d);
  }, [page, dt]);

  return (
    <>
      <div className="data"> {dt}</div>
      <Pagination
        count={Math.ceil(repodata.length / 6)}
        onChange={(pn) => {
          setPage(pn.target.textContent);
        }}
        // hidePrevButton
        // hideNextButton
        style={{ display: "Flex", justifyContent: "center" }}
        variant="outlined"
        shape="rounded"
      />
    </>
  );
};

export default Repo;
