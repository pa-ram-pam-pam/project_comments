import React from "react";

class BlockOfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newAuthorOfComment: "", newTextOfComment: "" };
    this.addComment = this.props.addComment;
  }

  onInputChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  onFormSubmit = (ev) => {
    ev.preventDefault();
    const { newAuthorOfComment, newTextOfComment } = this.state;
    this.addComment(newAuthorOfComment, newTextOfComment);
    this.setState({ newAuthorOfComment: "", newTextOfComment: "" });
  };

  render() {
    const { newAuthorOfComment, newTextOfComment } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        <br />
        <input
          type="text"
          name="newAuthorOfComment"
          placeholder="Имя"
          value={newAuthorOfComment}
          required
          onChange={this.onInputChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Комментарий"
          name="newTextOfComment"
          required
          value={newTextOfComment}
          onChange={this.onInputChange}
        />
        <br />
        <br />
        <input type="submit" value="Добавить" />
      </form>
    );
  }
}

export default BlockOfForm;
