import React from "react";
import { NavLink } from "react-router-dom";
function ActivityBar() {
  return (
    <>
      <div className="activity">
        <div className="activity-cont">
          <NavLink
             to="/"
             activeclassname="active"
            className="all-todos cont"
          >
            All
          </NavLink>
          <NavLink
            to="/active"
            activeclassname="active"
            className="active-todos cont"
          >
            Active
          </NavLink>
          <NavLink
            to="/completed"
            activeclassname="active"
            className="completed-todos cont"
          >
            Completed
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default ActivityBar;
