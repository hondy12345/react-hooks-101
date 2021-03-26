import React, { useContext } from "react";

import { ADD_OPERATION_LOG, DELETE_EVENT } from "../actions/index";
import AppContext from "../contexts/AppContext";
import { timeCurrentISO8601 } from "../utils";

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const id = event.id;
  const handleClickDeleteButton = () => {
    window.confirm(`イベント(id=${id})を本当に削除しても良いですか？`) &&
      dispatch({ type: DELETE_EVENT, id }) &&
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベント(id=${id})を削除しました`,
        operationAt: timeCurrentISO8601(),
      });
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickDeleteButton}
        >
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
