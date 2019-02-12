import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authRequests from '../../FbRequests/auth';

export class Authentication extends Component {

  state =
  {
    user:
    {
      Email: "",
      Password: ""
    }
  };

  loginClickEvent = (e) =>
  {
    const { user } = this.state;
    e.preventDefault();
    authRequests
    .loginUser(user)
    .then((res) =>
    {
      this.props.history.push(`/`);
    })
    .catch(err =>
    {
      console.error("There was an issue with logging in.", err)
    });
  };

  emailChange = e => {
    const tempUser = { ...this.state.user };
    tempUser.Email = e.target.value;
    this.setState({ user: tempUser });
  };

  passwordChange = e => {
    const tempUser = { ...this.state.user };
    tempUser.Password = e.target.value;
    this.setState({ user: tempUser });
  };

  render () {
    const { user } = this.state;
    return (
      <div className="Login">
        <div id="login-form">
          <h1 className="text-center">Login</h1>
          <form className="form-horizontal col-sm-6 col-sm-offset-3">
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-sm-4 control-label">Email:</label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  value={user.Email}
                  onChange={this.emailChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="col-sm-4 control-label">Password:</label>
              <div className="col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  value={user.Password}
                  onChange={this.passwordChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <Link to="/registration">Need to Register?</Link>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <button
                  type="submit"
                  className="btn btn-default col-xs-12"
                  onClick={this.loginClickEvent}>
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

}