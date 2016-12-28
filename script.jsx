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

var FormComponent = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var inputElement = this.refs.login;
    this.props.addcard(inputElement.value);
    inputElement.value = '';
  },
  render: function() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Github login" ref="login"/>
        <button> Add </button>
      </form>
      );
  }
});

var MainComponent = React.createClass({
  getInitialState: function() {
    return {logins: []}
  },
  
  addCard: function(card) {
    this.setState({logins: this.state.logins.concat(card)});
  },
  
  render: function() {
    var cards = this.state.logins.map(function(login){
      return(<GitComponent login={login} />);
    });
      return(
        <div>
          <FormComponent addcard={this.addCard}/>
          {cards}
        </div>
      );
  }
});

ReactDOM.render(<MainComponent />, document.getElementById("root"));