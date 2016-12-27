var GitComponent = React.createClass({
  render: function() {
    return(
      <div> 
         <h1> Git Component </h1>
         <img src="https://avatars.githubusercontent.com/u/8624234?v=3" width="80"></img>
         <hr />
          <img src="https://avatars.githubusercontent.com/u/15880971?v=3" width="80"></img>
         <hr />
      </div>
      );
  }
});

var BitComponent = React.createClass({
  getInitialState: function() {
    return { value: 1 }
  },
  render: function() {
    return (
      <div>
        <h1> Bit Component </h1>
        <h1> {this.state.value} </h1>
      </div>
      )
  }
});

var MainComponent = React.createClass({
  render: function() {
    return(
      <div>
        <GitComponent />
        <BitComponent />
      </div>
      )
  }
});

ReactDOM.render(<MainComponent />, document.getElementById("root"));