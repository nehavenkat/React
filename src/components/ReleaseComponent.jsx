import React from 'react';
import { Media } from "reactstrap";

class ReleaseComponent extends React.Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <Media>
      <Media left href="#">
        <Media className="image" object src={this.props.book.img} alt="book image" />
      </Media>
      <Media body>
      <Media heading>{this.props.book.title}</Media>
      {this.props.book.description}
      </Media>
    </Media>
    );
  }
}

export default ReleaseComponent;