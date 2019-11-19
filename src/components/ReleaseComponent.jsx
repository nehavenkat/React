import React from 'react';
import { Media } from "reactstrap";

class ReleaseComponent extends React.Component {
  state = {};
  render() {
    console.log(this.props);
    return (
        <Media body>
          <Media heading>{this.props.book.title}</Media>
          {this.props.book.description}
        </Media>

    );
  }
}

export default ReleaseComponent;