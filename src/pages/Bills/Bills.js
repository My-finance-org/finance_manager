import React, { useState } from "react";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import BaseTitle from "@/components/shared/BaseTitle";
import { Table, TableBody, TableHeader, Td, Th, Tr } from "@/components/Table";
import BillModal from "@/components/Modals/BillModal";
import dateFormater from "@/helpers/dateFormater";
import { bill } from "@/constants/bill";
import styles from "./Bills.module.scss";

export const Bills = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const textHeadTable = [
    "Due Date",
    "Logo",
    "Item Description",
    "Last Charge",
    "Amount",
  ];

  return (
    <MainLayout>
      <div className={styles.bills}>
        <div className="flex uk-flex-between">
          <BaseTitle
            text="Upcoming Bills"
            fontSize={"22"}
            classes={"transactions-title"}
          />
          <button
            type="button"
            className={styles["modal-open"]}
            onClick={() => setIsOpenModal(true)}
          >
            Create Bill
          </button>
        </div>
        <div className={styles.tableWrapper}>
          <Table>
            <TableHeader>
              <Tr>
                {textHeadTable.map((t, index) => (
                  <Th
                    key={index}
                    className={
                      index === textHeadTable.length - 1
                        ? styles.rightAlign
                        : null
                    }
                  >
                    {t}
                  </Th>
                ))}
              </Tr>
            </TableHeader>
            <TableBody>
              {bill.map(b => (
                <Tr
                  className={styles.tableRow}
                  key={b.id}
                >
                  <Td>
                    <div className={styles.dateBlock}>
                      <div className={styles.textMonth}>
                        {dateFormater(b.date, "MMM")}
                      </div>
                      <div className={styles.textDay}>
                        {dateFormater(b.date, "DD")}
                      </div>
                    </div>
                  </Td>
                  <Td>
                    <img
                      className={styles.image}
                      src={b.logo}
                      alt={b.name}
                    />
                  </Td>
                  <Td>
                    <div className={styles.descriptionBlock}>
                      <div className={styles.descriptionTitle}> {b.name}</div>
                      <div className={styles.description}>{b.description}</div>
                    </div>
                  </Td>
                  <Td>
                    <div className={styles.lastChange}>
                      {dateFormater(b.updateDate, "DD MMM, YYYY")}
                    </div>
                  </Td>
                  <Td>
                    <div className={styles.amountBox}>
                      <div className={styles.amount}>{b.amount}</div>
                    </div>
                  </Td>
                </Tr>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <BillModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </MainLayout>
  );
};
