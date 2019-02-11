import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';
import authRequests from '../FbRequests/auth';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {

    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.props.logout();
    };

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
            if ({this.props.authed})
            {
              <LinkContainer to={'/authentication'}>
                <NavItem>
                  <Glyphicon glyph='th-list' />
                  <button
                    onClick={logoutClickEvent}
                    className="btn btn-danger">Logout</button>
                </NavItem>
              </LinkContainer>
            } else {
              <LinkContainer to={'/authentication'}>
                <NavItem>
                  <Glyphicon glyph='th-list' /> Login
                </NavItem>
              </LinkContainer>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
