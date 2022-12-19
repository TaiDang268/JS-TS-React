import { React } from "react";
import Cell from "./Cell";
import styles from "./TicTacToe.module.scss";

const Board = (props) => {
  return (
    <div className={styles.gameBoard}>
      {props.cells.map((item, index) => {
        return (
          <Cell
            key={index}
            value={item}
            onClick={() => props.onClick(index)}
          ></Cell>
        );
      })}
    </div>
  );
};
export default Board;
