import React from "react";

const BlockOfComments = (props) => {
  return (
    <div>
      <h2>Комментарии</h2>
      {props.comments.map((comment) => {
        const { id, name, text, time } = comment;
        return (
          <p key={id}>
            Автор: <b>{name + " "}</b>
            прокомментировал: <b>{text + " "}</b>
            время:
            <b>{" " + time + " "}</b>
            <button
              onClick={(ev) => {
                props.deleteComment(id);
              }}
            >
              Удалить
            </button>
          </p>
        );
      })}
    </div>
  );
};

export default BlockOfComments;
