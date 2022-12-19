import React from "react";
import styles from "./TicTacToe.module.scss";

const Cell = ({ value, onClick }) => {
  return (
    <div className={styles.gameCell} onClick={onClick}>
      {value}
    </div>
  );
};
export default Cell;
