import ActionTypes from "./ActionTypes";

export const addComment = (name, text) => {
  return {
    type: ActionTypes.ADD_COMMENT,
    name,
    text,
  };
};

export const deleteComment = (id) => {
  return {
    type: ActionTypes.DELETE_COMMENT,
    id,
  };
};
