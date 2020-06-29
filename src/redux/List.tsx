import React, {Component} from "react";
import { connect } from "react-redux";
import {GlobalState} from "./action-types";
import {addArticle, MisProps} from "./action";

const mapStateToProps = (state: GlobalState) => {
  return {
    articles: state.articles,
    addArticle: addArticle
  };
};

class ConnectedList extends Component<MisProps>{

  render() {
    return (
      <ul>
        {this.props.articles.map(el => (
          <li >{el}</li>
        ))}
      </ul>
    );
  }
}

const List = connect(mapStateToProps)(ConnectedList);

export default List;
