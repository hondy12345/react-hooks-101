import React from "react";
import { timeCurrentISO8601 } from "../utils";

const OperationLog = ({ operationLog }) => {
  return (
    <tr>
      <td>{operationLog.description}</td>
      <td>{operationLog.operatedAt}</td>
    </tr>
  );
};

export default OperationLog;
