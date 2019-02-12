import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';
import authRequests from '../FbRequests/auth';
import firebase from 'firebase'

export class NavMenu extends Component {
  displayName = NavMenu.name

  state =
  {
    authed: false
  }

  componentDidMount() {
    this.removeEventListener = firebase.auth().onAuthStateChanged((user ) =>
    {
      if (user)
      {
        this.setState({authed: true});
      }
      else
      {
        this.setState({authed: false});
      }
    });
  };

  render() {

    const {authed} = this.state;

    const logoutClickEvent = () => {
      authRequests.logoutUser();
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
            <LinkContainer to={'/tierList'}>
              <NavItem>
                <Glyphicon glyph='th-list' /> Tier List
              </NavItem>
            </LinkContainer>
            { authed ? (
              <LinkContainer to={'/authentication'}>
              <NavItem>
                <Glyphicon glyph='th-list' />
                <button onClick={logoutClickEvent} className="btn btn-danger">Logout</button>
              </NavItem>
            </LinkContainer>
            ) : (
              <LinkContainer to={'/authentication'}>
                <NavItem>
                  <Glyphicon glyph='th-list' /> Login
                </NavItem>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
