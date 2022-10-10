import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function ActivityBar() {
  const [active, setActive] = useState("");
  return (
    <>
      <div className="activity">
        <div className="activity-cont">
          <NavLink
            to="/"
            activeStyle={{
              height: "4px",
            }}
            className="all-todos cont active"
          >
            All
          </NavLink>
          <NavLink
            to="/"
            activeStyle={{
              height: "4px",
            }}
            className="active-todos cont"
          >
            Active
          </NavLink>
          <NavLink
            to="/"
            activeStyle={{
              height: "4px",
            }}
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
