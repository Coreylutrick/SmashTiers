import React, { Component } from 'react';
import authRequests from '../../FbRequests/auth';
import { Link } from 'react-router-dom';

export class Registration extends Component {

  state =
  {
    user:
    {
      FirstName: 'Corey',
      LastName: 'Lutrick',
      Email: 'coreylutrick@gmail.com',
      Password: '123456'
    }
  }

  registerClickEvent = (e) =>
  {
    const { user } = this.state;
    e.preventDefault();
    authRequests
    .registerUser(user)
    .then((fbUser) =>
    {
      this.props.history.push(`/`);
      const userToPost =
      {
        FirstName: user.FirstName,
        LastName: user.LastName,
        IsActive: 1,
        FirebaseId: fbUser.user.uid
      }
      authRequests.addUser(userToPost)
    })
    .catch(err =>
    {
      console.error("There was an issue with the registration process.", err)
    });
  };

  firstNameChange = (e) =>
  {
    const tempUser = {...this.state.user};
    tempUser.FirstName = e.target.value;
    this.setState({ user: tempUser})
  };

  lastNameChange = (e) =>
  {
    const tempUser = {...this.state.user};
    tempUser.LastName = e.target.value;
    this.setState({ user: tempUser})
  };

  emailChange = (e) =>
  {
    const tempUser = {...this.state.user};
    tempUser.Email = e.target.value;
    this.setState({ user: tempUser})
  };

  passwordChange = (e) =>
  {
    const tempUser = {...this.state.user};
    tempUser.Password = e.target.value;
    this.setState({ user: tempUser})
  };

  render () {
    const { user } = this.state;
    return (
      <div className="Register">
        <div id="login-form">
          <h1>Register</h1>
          <form className="form-horizontal col-sm-6 col-sm-offset-3">
            <div className="form-group">
              <label htmlFor="inputFirstName" className="col-sm-4 control-label"> First Name:</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="inputFirstName"
                  placeholde="First Name"
                  value = {user.FirstName}
                  onChange={this.firstNameChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputLastName" className="col-sm-4 control-label">Last Name:</label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Last Name"
                  value={user.LasName}
                  onChange={this.lastNameChange}
                />
              </div>
            </div>
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
                <Link to="/authentication">Need to Login?</Link>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <button
                  type="submit"
                  className="btn btn-default col-xs-12"
                  onClick={this.registerClickEvent}>
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }

}