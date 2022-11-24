import React from "react";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import "./user.css";

const User = ({ userdata }) => {
  return (
    <>
      <div className="user">
        <div className="box_1">
          <div className="image">
            <img src={userdata.avatar_url} alt="user_avatar" />
          </div>
          <div className="userdata">
            <h3 className="github_username">{`Name : ${userdata.name}`}</h3>
            <p>{`User Name : ${userdata.login}`}</p>
            <p>{`Bio : ${userdata.bio}`}</p>
            <p>{`Repositories : ${userdata.public_repos}`} </p>
          </div>
        </div>
        <div className="box_2">
          <InsertLinkIcon className="link_icon" />
          <a href={`https://github.com/${userdata.login}`}>
            {`https://github.com/${userdata.login}`}
          </a>
        </div>
      </div>
    </>
  );
};

export default User;
