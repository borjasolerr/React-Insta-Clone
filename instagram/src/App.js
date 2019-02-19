import React, { Component } from "react";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: []
    };
  }

  getData() {
    this.setState({
      dummyData: dummyData
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <SearchBar />
        <div className="environment-container">
          <div className="app-container">
            {this.state.dummyData.map(post => {
              return <PostContainer post={post} key={post.timestamp} comments={post.comments} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
