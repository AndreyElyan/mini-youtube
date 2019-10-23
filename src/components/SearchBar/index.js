import React, { Component } from "react";
import { Container, Input } from "./styles";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }
  render() {
    return (
      <Container>
        <Input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          placeholder="Search"
        />
      </Container>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
