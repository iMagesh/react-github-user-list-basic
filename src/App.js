import React from 'react';
import './App.css';

var App = React.createClass({
  render: function(){
    return (
      <div className="app">
        <h1>Active Users</h1>
        <p>{this.props.users.length} active users</p>
        <UserList users={this.props.users} />
      </div>
    )
  }
})
export default App;

var UserList = React.createClass({
  renderUser: function(user){
    return <Profile user={user} />
  },

  render: function(){
    return(
      <ul>
        {this.props.users.map(this.renderUser)}
      </ul>
    )
  }
})

var Profile = React.createClass({
  githubUrl: function(){
    return "https://github.com/" + this.props.user.github;
  },

  render: function(){
    return(
      <li className="user">
        <a href={this.githubUrl()}>
          {this.props.user.name} on github
        </a>
      </li>
    )
  }
});
