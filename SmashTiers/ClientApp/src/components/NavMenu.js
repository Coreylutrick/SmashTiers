import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>SmashTiers</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/character'}>
              <NavItem>
                <Glyphicon glyph='education' /> Characters
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/stage'}>
              <NavItem>
                <Glyphicon glyph='th-list' /> Stages
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/tierList'}>
              <NavItem>
                <Glyphicon glyph='th-list' /> Tier List
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
