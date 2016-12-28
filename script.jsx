var GitComponent = React.createClass({
  getInitialState: function() {
    return {};
  },
  
  componentDidMount: function() {
    var component = this;
    $.get("https://api.github.com/users/" + this.props.login, function(data) {
      component.setState(data);
    });  
  },
  
  render: function() {
    return(
      <div> 
         <img src={this.state.avatar_url} width="80"></img>
         <h3> Hi {this.props.login} </h3>
         <hr />
      </div>
      );
  }
});


var MainComponent = React.createClass({
  getInitialState: function() {
    return {logins: ["avinashrahul", "akannur", "ManojKumar99", "abhihn"]}
  },
  render: function() {
    var cards = this.state.logins.map(function(login){
      return(<GitComponent login={login} />);
    });
      return(
        <div>
          {cards}
        </div>
      );
  }
});

ReactDOM.render(<MainComponent />, document.getElementById("root"));