import React from "react";
import BaseTitle from "@/components/shared/BaseTitle";
import LinkWithIcon from "@/components/LinkWithIcon";
import RightArrowGray from "@/assets/Icons/RightArrowGray.svg";
import TabContent from "@/components/RecentTransaction/components/TabContent";
import TabHeader from "@/components/RecentTransaction/components/TabHeader";
import "./RecentTransaction.scss";

// TODO delete and add data from storage
const transactions = [
  {
    id: 1,
    icon: "Game",
    name: "GTR 5",
    category: "Gadget & Gear",
    amount: 160,
    date: "2023-05-17",
    revenue: true,
    expenses: false,
  },
  {
    id: 2,
    icon: "Game 2",
    name: "GTR 5",
    category: "Gadget & Gear",
    amount: 160,
    date: "2023-05-17",
    revenue: true,
    expenses: false,
  },
  {
    id: 3,
    icon: "Game 3",
    name: "GTR 5",
    category: "Gadget & Gear",
    amount: 160,
    date: "2023-05-17",
    revenue: false,
    expenses: true,
  },
  {
    id: 4,
    icon: "Game 3",
    name: "GTR 5",
    category: "Gadget & Gear",
    amount: 160,
    date: "2023-05-17",
    revenue: true,
    expenses: false,
  },
  {
    id: 5,
    icon: "Game 3",
    name: "GTR 5",
    category: "Gadget & Gear",
    amount: 160,
    date: "2023-05-17",
    revenue: false,
    expenses: true,
  },
];

const RecentTransaction = () => {
  return (
    <div className="recentTransaction">
      <div className="recentTransaction__title-wrapper">
        <BaseTitle
          text="Recent Transaction"
          fontSize="22"
        />
        <LinkWithIcon
          to="/transactions"
          text="View All"
          fontSize="12"
          icon={RightArrowGray}
        />
      </div>
      <div className="recentTransaction__tabs ">
        <TabHeader />
        <ul
          id="recentTransaction"
          className="uk-switcher "
        >
          <li className="tab-content">
            <TabContent transactions={transactions} />
          </li>
          <li className="tab-content">
            <TabContent transactions={transactions.filter(t => t.revenue)} />
          </li>
          <li className="tab-content">
            <TabContent transactions={transactions.filter(t => t.expenses)} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecentTransaction;
