// src/js/components/Form.jsx
import React, {ChangeEvent, Component, EventHandler, FormEvent, FormEventHandler} from "react";
import { connect } from "react-redux";
import {addArticle, MisProps} from "./action";
import {GlobalState} from "./action-types";
import {Dispatch} from "redux";

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addArticle: (article: string) => dispatch(addArticle(article)),
    articles: []
  };
}
interface Cadena {
  title: string
}

class ConnectedForm extends Component<MisProps, Cadena> {
  constructor(props: MisProps) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.addArticle(this.state.title);
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
