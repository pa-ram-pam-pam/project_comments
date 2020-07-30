import ActionTypes from "./ActionTypes";
import recordToLocalStorage from "./RecordToLocalStorage";


const comments = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      const time = new Date().toLocaleString();
      const id = time + action.name + action.text;
      const unatedArr = state.concat([
        {
          id,
          name: action.name,
          text: action.text,
          time,
        },
      ]);
      recordToLocalStorage(unatedArr);
      return unatedArr;

    case ActionTypes.DELETE_COMMENT:
      const commentsArrayAfterDelete = state.filter(
        (item) => item.id !== action.id
      );
      recordToLocalStorage(commentsArrayAfterDelete);
      return commentsArrayAfterDelete;

    default:
      return state;
  }
};

export default comments;
