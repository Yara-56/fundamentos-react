import React from "react";
import "./Card.css";

export default (props) => {
  return (
    <div className="Card">
      <div>Conteúdo</div>
      <div>{props.titulo}</div>
    </div>
  );
};
