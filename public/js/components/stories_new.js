import React from 'react'
import { Link } from 'react-router'

import Firebase from 'firebase'

export default React.createClass({

  getInitialState: function(){
    return{
      template: [],
      nouns: [],
      verbs: []
    }
  },

  componentWillMount: function(){

    var firebaseRef = new Firebase("https://amber-heat-1866.firebaseio.com/");
    console.log(this.props.params.id)
    var thing = this.props.params.id

    firebaseRef.orderByChild("title").equalTo(thing).on("child_added", function(snapshot) {
      console.log(snapshot.key());
      console.log(snapshot.val().title);
      this.state.templates.push(dataSnapshot.val());

      this.setState({
        items: this.state.template5
      });

    }.bind(this));
  },

  handleSubmit: function(event){
    event.preventDefault()

  },

  render: function(){

    var style = {
      border: '2px solid black',
      padding: '6px'
    }

    return(
      <div>
        <div>this is where you fill out the nouns and verbs with just knowing the title of the story</div>

          <div className="form" style={style}>
            <form ref="storyForm" onSubmit={this.handleSubmit}>
              <input ref="noun1" type="text" placeholder="Noun" />
              <input ref="verb2" type="text" placeholder="Verb" />
              <textarea ref="test" rows="5"> Testing what is here can we put something in dynamically for editing later? </textarea>
              <button type="submit">Form Button</button>
            </form>
          </div>

      </div>
    )
  }
})
