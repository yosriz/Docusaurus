/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const Container = require('./Container.js');
const SideNav = require('./nav/SideNav.js');
const readCategories = require('../server/readCategories.js');

class DocsSidebar extends React.Component {
  render() {
    let sidebar = this.props.metadata.sidebar;
    let docsCategories = readCategories(sidebar);
    const categoryName = docsCategories[this.props.metadata.language][0].name;
    if (!categoryName) {
      return null;
    }
    return (
      <Container className="docsNavContainer" id="docsNav" wrapper={false}>
        <SideNav
          language={this.props.metadata.language}
          root={this.props.root}
          title={this.props.title}
          contents={docsCategories[this.props.metadata.language]}
          current={this.props.metadata}
        />
      </Container>
    );
  }
}

module.exports = DocsSidebar;
