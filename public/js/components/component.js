const React   = require('react');
const $       = require('jquery');

const Display = require('./display.js');
const Form    = require('./form.js');
const Crud    = require('./crud.js');

const TheComponent = React.createClass({
  getInitialState: function(){
    return {
      cruds: {}
    };
  },

  componentDidMount: function(){
    $.get('/cruds').done((data)=>{

      data.forEach((el) => {
        this.state.cruds[el.id] = el;
      });

      this.setState({cruds: this.state.cruds})
    })
  },

  postCrud: function(crud){

    var updateCrud = (data)=>{
      var newID = data.id;
      this.state.cruds[newID] = crud;
      this.setState({cruds: this.state.cruds});
    }

    $.post('/cruds', crud).done(updateCrud)
  },

  putCrud: function(crud){

    var updateCrud = (data)=>{
      var newID = data.id;
      this.state.cruds[newID] = crud;
      this.setState({cruds: this.state.cruds});
    }

    $.ajax({
      url: "/cruds/:id",
      method: "PUT",
      data: crud
    }).done(updateCrud)
  },

  deleteCrud: function(crud){

    var destroyCrud = (data)=>{
      var newID = data.id;
      this.state.cruds[newID] = crud;
      this.setState({cruds: this.state.cruds});
    }

    $.ajax({
      url: "/cruds/:id",
      method: "DELETE",
      data: crud
    }).done(destroyCrud)

  },

  renderCruds: function(key){
    return (
      <Crud key={key} crud={this.state.cruds[key]} putCrud={this.putCrud} deleteCrud={this.deleteCrud} />
    )
  },

  render: function() {

    var style = {
      border: '2px solid black',
      padding: '6px'
    }

    return(
        <div style={style}>
          <p>{this.props.name}</p>
          <Form postCrud={this.postCrud} />
          <Display cruds={Object.keys(this.state.cruds).map(this.renderCruds)} />
        </div>
    );
  }
});

module.exports = TheComponent;
