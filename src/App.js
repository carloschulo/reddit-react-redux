import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "./components";
import axios from "axios";
import "./App.css";

import { addFav, deleteFav } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      data: null
    };
  }
  componentDidMount() {
    axios.get("https://www.reddit.com/r/popular.json").then(({ data }) => {
      this.setState({
        data: data.data.children
      });
      console.log(data.data.children);
    });
  }
  handleAdd(id, url) {
    this.props.addFav(id, url);
  }
  handleDelete(id) {
    this.props.deleteFav(id);
  }

  render() {
    return (
      <div className="App">
        <div className="">
          {this.state.data
            ? this.state.data.map((post, index) => {
                // console.log(post.data);
                return (
                  <Container key={post.data.id}>
                    <div className="row">
                      <strong>
                        {index + 1}.{" "}
                      </strong>
                      <span>
                        <strong>
                          {" "}{post.data.title}
                        </strong>
                      </span>
                    </div>
                    <div className="row">
                      {post.data.ups} Upvotes
                    </div>
                    <button
                      onClick={() =>
                        this.handleAdd(post.data.id, post.data.permalink)}
                    >
                      Add to Favorites
                    </button>
                    <button onClick={() => this.handleDelete(post.data.id)}>
                      Delete From Favorites
                    </button>
                  </Container>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    // console.log(state);
    return {
      favorites: state.favorites
    };
  },
  { addFav, deleteFav }
)(App);
