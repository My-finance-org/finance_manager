import React from "react";
import { RoutesEnum } from "@/constants/emun/routes";
import BaseTitle from "@/components/shared/BaseTitle";
import LinkWithIcon from "@/components/LinkWithIcon";
import RightArrowGray from "@/assets/Icons/RightArrowGray.svg";
import TabContent from "@/components/RecentTransaction/components/TabContent";
import TabHeader from "@/components/RecentTransaction/components/TabHeader";
import { transactions } from "@/constants/transaction";
import "./RecentTransaction.scss";

const RecentTransaction = () => {
  return (
    <div className="recentTransaction">
      <div className="recentTransaction__title-wrapper">
        <BaseTitle
          text="Recent Transaction"
          fontSize="22"
        />
        <LinkWithIcon
          to={RoutesEnum.Transactions}
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
