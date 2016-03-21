import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  getInitialState: function(){
    return{
      story: []
    }
  },

  componentWillMount: function(){

      var id = this.props.params.id

      this.firebaseRef = new Firebase(`https://amber-heat-1866.firebaseio.com/${id}`);
      this.firebaseRef.on("child_added", function(dataSnapshot) {
        console.log(dataSnapshot.val())
        this.state.story.push(dataSnapshot.val());
        // this.forceUpdate()

      }.bind(this));

    },

  render: function(){

    return(
      <div>
        <div>View of Story once template has been filled in</div>
        <button> do over! </button>
        <p>{this.state.story[0]}</p>
        <button> save </button>
      </div>
    )
  }
})
