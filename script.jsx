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
         <h1> Git Component </h1>
         <img src={this.state.avatar_url} width="80"></img>
         <h3> {this.props.login} </h3>
         <hr />
      </div>
      );
  }
});


var MainComponent = React.createClass({
  render: function() {
    return(
      <div>
        <GitComponent login="avinashrahul"/>
        <GitComponent login="guru"/>
      </div>
      )
  }
});

ReactDOM.render(<MainComponent />, document.getElementById("root"));