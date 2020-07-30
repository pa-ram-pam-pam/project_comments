import React from "react";
import { connect } from "react-redux";
import BlockOfComments from "../components/BlockOfComments";
import BlockOfForm from "../components/BlockOfForm";
import { addComment, deleteComment } from "../data/Actions";

let App = (props) => {
  const { comments, addComment, deleteComment } = props;

  return (
    <div>
      <BlockOfComments comments={comments} deleteComment={deleteComment} />
      <BlockOfForm addComment={addComment} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (name, text) => dispatch(addComment(name, text)),
    deleteComment: (id) => dispatch(deleteComment(id)),
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
