import React from "react";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import AccountForm from "@/components/Forms/AccountForm";
import SecurityForm from "@/components/Forms/SecurityForm";
import "./Settings.scss";

export const Settings = () => {
  return (
    <MainLayout>
      <div className="settings">
        <div className="container">
          <ul
            className="uk-tab"
            data-uk-tab="{connect:'#settings'}"
          >
            <li>
              <a>Account</a>
            </li>
            <li>
              <a>Security</a>
            </li>
          </ul>
          <ul className="uk-switcher">
            <li>
              <AccountForm />
            </li>
            <li>
              <SecurityForm />
            </li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};
