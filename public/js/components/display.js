const React = require('react');

const Display = React.createClass({

  render: function() {

    var style = {
      fontSize: 'large',
      margin: '10px 0px',
      border: '2px solid black',
      padding: '6px'
      // color: this.props.crud > 5 ? 'red' : 'green'
    };

    return (
        <div style={style}>
          {this.props.cruds}
        </div>
    );
  }
});

module.exports = Display;
