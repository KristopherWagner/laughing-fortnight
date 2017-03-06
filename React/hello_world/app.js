var Wrapper = React.createClass({
  rander: function() {
    return <div className="wrapper">
    {this.props.children}
    </div>;
  }
});

var HelloWorld = React.createClass({
  getInitialState: function() {
    return {
      greeting: ""
    };
  },

  greet: function() {
    this.setState({ greeting: "Hello, " + this.props.name + "!" });
  }, 

  render: function() {
    return <Wrapper>
      <button onClick={this.greet}>Greet</button>
      <br />
      <span>{this.state.greeting}</span>
      </Wrapper>;
  }
});

React.render(new HelloWorld({ name: "World" }), document.body);
