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

    this.firebaseRef = new Firebase("https://amber-heat-1866.firebaseio.com/");

    var title = this.props.params.id

    this.firebaseRef.orderByChild("title").equalTo(title).on("child_added", function(dataSnapshot) {

      this.state.template.push(dataSnapshot.val());

      this.setState({
        items: this.state.template
      });

    }.bind(this));
  },

  handleSubmit: function(event){
    event.preventDefault()

  },

  renderTitle: function(){

  var template = this.state.template[0].title;

    return(
      <div>
        {template}
      </div>
    )
  },

  renderTemplate: function(){

  var thing = []
  var storyText = this.state.template[0].text;
  var nouns = 0;
  var verbs = 0;

  var textArray = storyText.split(' ').forEach(function(element, index){

    if(element === "_noun_"){
      nouns++
      thing.push(<input ref={`noun${nouns}`} type="text" placeholder="Noun" />)
    } else if (element === "_verb_"){
      verbs++
      thing.push(<input ref={`verb${verbs}`} type="text" placeholder="Verb" />)
    }

  })

  return(
    <div>
      {thing}
    </div>
  )

  },

  render: function(){

    var style = {
      border: '2px solid black',
      padding: '6px'
    }

    return(
      <div>
        <div>this is where you fill out the nouns and verbs with just knowing the title of the story</div>

        {this.renderTitle()}
          <div className="form" style={style}>
            <form ref="storyForm" onSubmit={this.handleSubmit}>
              {this.renderTemplate()}
              <button type="submit">Form Button</button>
            </form>
          </div>

      </div>
    )
  }
})
