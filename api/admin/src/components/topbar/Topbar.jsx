import React from "react";
import "./topbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from '../../redux/apiCalls';
import { NotificationsNone, Language } from "@material-ui/icons";

export default function Topbar() {

  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    logoutUser(dispatch);
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Panel</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="menuItem">{user && user.username}</div>
          <img src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif" alt="" className="topAvatar" />
          <div onClick={handleClick} className="menuItem">{user && "LOGOUT"}</div>
        </div>
      </div>
    </div>
  );
}
