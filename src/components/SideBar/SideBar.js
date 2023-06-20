import * as React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div style={{ width: "280px" }}>
      <div>
        <Link to="/">Text</Link>
      </div>
    </div>
  );
}
