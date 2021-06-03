import React from "react";
import { Select } from "@material-ui/core";
import "./style.css";

export const TaskBody = () => {
  return (
    <form className="modal_body">
      <h2 className="input_menu">タスクを追加</h2>
      <div>
        <h4 className="input_title">ジャンル</h4>
        <div className="task_genre">
          <Select />
        </div>
        <h4 className="input_title">タイトル</h4>
        <input type="text" />
        <h4 className="input_title">説明</h4>
        <textarea />
        <h4 className="input_title">期限</h4>
        <input className="input_date" type="date" />
      </div>
    </form>
  )
}