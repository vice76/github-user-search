import React, { useState } from "react";
import axios from "axios";
import "./main.css";
import SearchIcon from "@mui/icons-material/Search";
import User from "./components/user/User";
import Repo from "./components/repo/Repo";
const Main = () => {
  const [reponame, setReponame] = useState("");
  const [repodata, setRepodata] = useState([]);
  const [userdata, setUserdata] = useState({ nodata: true });
  const repoNameChangeHandler = (e) => {
    setReponame(e.target.value);
  };
  const searchHanlder = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${reponame}`)
      .then((res) => {
        setUserdata(res.data);
      })
      .catch((err) => {
        console.log("User does not exist");
      });
    axios
      .get(`https://api.github.com/users/${reponame}/repos`)
      .then((res) => {
        setRepodata(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("User does not exist");
      });
  };
  return (
    <div className="main">
      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="Search"
          name="reponame"
          value={reponame}
          onChange={repoNameChangeHandler}
        />
        <button className="submit" type="submit" onClick={searchHanlder}>
          <SearchIcon className="search_icon" />
        </button>
      </div>
      {userdata.nodata === true ? (
        <div></div>
      ) : (
        <User userdata={userdata}></User>
      )}
      {repodata.length > 0 ? <Repo repodata={repodata}></Repo> : <div></div>}
    </div>
  );
};

export default Main;
