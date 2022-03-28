import React, {useState, useEffect, useMemo} from "react";
import Board from "./Board";
import './styles/Square.css';



function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square;