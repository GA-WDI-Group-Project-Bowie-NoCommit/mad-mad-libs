import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  getInitialState: function(){
    return{
      stories: []
    }
  },

  componentWillMount: function(){

    this.firebaseRef = new Firebase("https://amber-heat-1866.firebaseio.com/");

    var title = this.props.params.id

    this.firebaseRef.orderByChild("title").equalTo(title).on("child_added", function(dataSnapshot) {

      this.state.template.push(dataSnapshot.val());

      this.forceUpdate()

    }.bind(this));
  },

  render: function(){

    return(
      <div>
        <div>A list of completed stories for people to view</div>
        <div> <Link to="/story/:id">Links to view one story</Link>  </div>
      </div>
    )
  }
})
