import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  getInitialState: function(){
    return{
      story: []
    }
  },

  // componentWillMount: function(){
  //
  //     var id = this.props.params.id
  //
  //     this.firebaseRef = new Firebase("https://amber-heat-1866.firebaseio.com/");
  //     this.firebaseRef.orderByChild("story").equalTo(id)..on("child_added", function(dataSnapshot) {
  //       this.state.story.push(dataSnapshot.val());
  //
  //     }.bind(this));
  //
  //   },

  render: function(){

    return(
      <div>
        <div>View of Story once template has been filled in</div>
        <button> do over! </button>
        <p></p>
        <button> save </button>
      </div>
    )
  }
})
