import React from "react";
import { Table } from "reactstrap";

let sortParam = "";
let sortOrder = "";

export default function DashBoardTable({ tableData, sortBy }) {
  const sortData = (param) => {
    if (param !== sortParam) {
      sortOrder = "asc";
    } else {
      sortOrder = sortOrder === "asc" ? "des" : "asc";
    }
    sortParam = param;
    sortBy(sortParam, sortOrder);
  };

  const pickColor = (status) => {
    switch (status) {
      case "received":
        return "rgb(5, 162, 72)";
      case "canceled":
        return "rgb(246, 4, 0)";
      default:
        return "rgb(247, 100, 0)";
    }
  };

  return (
    <React.Fragment>
      <Table striped>
        <thead>
          <tr>
            <th>Invoice</th>
            <th
              onClick={() => {
                sortData("first_name");
              }}
            >
              Customer
            </th>
            <th
              onClick={() => {
                sortData("purchaseOn");
              }}
            >
              Purchase On
            </th>
            <th
              onClick={() => {
                sortData("amount");
              }}
            >
              Amount
            </th>
            <th
              onClick={() => {
                sortData("status");
              }}
            >
              Status
            </th>
            <th>Tracking</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, ind) => {
            return (
              <tr key={ind}>
                <th className="invoice" scope="row">
                  {item.invoice}
                </th>
                <th className="customer">{`${item.first_name} ${item.last_name}`}</th>
                <th className="purchaseOn">{item.purchaseOn}</th>
                <th className="amount">{item.amount}</th>
                <th className="status" style={{ color: pickColor(item.status) }}>
                  {item.status}
                </th>
                <th className="tracking">{item.tracking}</th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </React.Fragment>
  );
}
