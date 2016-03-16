const React = require('react');
const $ = require('jquery');

const Crud = React.createClass({

  onClick: function(){
    //change a state here?
  },

  deleteOnClick: function(){
    var crudID = {
      id: this.refs.id.value
    }

    this.props.deleteCrud(crudID)

  },

  handleSubmit: function(event){
    event.preventDefault()

    var crud = {
      id: this.refs.id.value,
      name: this.refs.name.value,
      description: this.refs.description.value
    }

    this.props.putCrud(crud)

    this.refs.taskForm.reset()

  },

  render: function(){

    let style = {
      fontSize: 'large',
      margin: '10px 0px',
      padding: '6px',
      border: '2px solid black',
      display: this.props.crud.name ? 'block' : 'none' //not sure if I like this solution because it's very surface-ey
    };

    return (
      <div style={style}>
        <div onClick={this.onClick}>
          Name: {this.props.crud.name}
        </div>
        <div>
          Description: {this.props.crud.description}
        </div>
        <button onClick={this.deleteOnClick} ref="id" value={this.props.crud.id}>Delete</button>

        <form ref="taskForm" onSubmit={this.handleSubmit}>
          <input ref="id" type="hidden" value={this.props.crud.id} />
          <input ref="name" type="text" placeholder={this.props.crud.name} />
          <input ref="description" type="text" placeholder={this.props.crud.description} />
          <button type="submit">Form Button</button>
        </form>

      </div>
    )
  }

})

module.exports = Crud;
