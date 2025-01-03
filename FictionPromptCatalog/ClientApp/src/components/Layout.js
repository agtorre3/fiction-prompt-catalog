import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div class="bg-indigo-950">
        <NavMenu />
          <div class="container mx-12 mt-12 mb-12 max-w-fit">
            {this.props.children}
          </div>
      </div>
    );
  }
}
