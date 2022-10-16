import React from "react";
import { NavLink } from "react-router-dom";
function ActivityBar() {
  return (
    <>
      <div className="">
        <div className="activity-cont">
          <NavLink
            to="/"
            className="all-todos cont"
            end
          >
            All
          </NavLink>
          <NavLink
            to="/todos/active"
            className="active-todos cont"
          >
            Active
          </NavLink>
          <NavLink
            to="/todos/completed"
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
