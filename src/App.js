import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Post } from "./components";
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
  handleAdd(id, url, title) {
    this.props.addFav(id, url, title);
  }
  handleDelete(id) {
    this.props.deleteFav(id);
  }

  render() {
    return (
      <div className="App">
        <div className="column">
          {this.state.data
            ? this.state.data.map((post, index) => {
                return (
                  <Container key={post.data.id} height={250} width={650}>
                    <Post
                      post={post}
                      index={index}
                      handleDelete={this.handleDelete}
                      handleAdd={this.handleAdd}
                    />
                  </Container>
                );
              })
            : <h1>Loading</h1>}
        </div>
        
        <div className="column">
          <Container width={350} height={400} position="fixed">
            <h1>My Favorites:</h1>
            <div>
              {
              this.props.favorites.map(({ id, link, title }, index) => {
                return (
                  <div key={id}>
                 <strong>{index + 1}) </strong> 
                  <a href={`https://www.reddit.com`+link} target="_blank">{title}</a>
                    <button className="btn btn-danger" onClick={() => this.handleDelete(id)}>x</button>
                  </div>
                );
              })}
            </div>
          </Container>
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
