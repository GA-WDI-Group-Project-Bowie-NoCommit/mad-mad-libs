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

      this.firebaseRef = new Firebase(`https://amber-heat-1866.firebaseio.com/stories/${id}`);
      this.firebaseRef.on("child_added", function(dataSnapshot) {
        this.state.story.push(dataSnapshot.val());
        this.forceUpdate()

      }.bind(this));

    },

  render: function(){

    return(
      <div id="completedStory">
        <div>Here's your story!</div>
        <p>{this.state.story[0]}</p>
        <button> redo! </button>
        <button> save </button>
      </div>
    )
  }
})
