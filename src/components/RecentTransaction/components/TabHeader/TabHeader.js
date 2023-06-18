import React from "react";

const TabHeader = () => {
  return (
    <ul
      className="uk-tab"
      data-uk-tab="{connect:'#recentTransaction'}"
    >
      <li className="tabTitle">
        <a href="">All</a>
      </li>
      <li className="tabTitle">
        <a href="">Revenue</a>
      </li>
      <li className="tabTitle">
        <a href="">Expenses</a>
      </li>
    </ul>
  );
};

export default TabHeader;
