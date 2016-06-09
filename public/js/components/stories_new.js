import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'

import Firebase from 'firebase'

export default React.createClass({

  getInitialState: function(){
    return{
      template: [],
      nouns: 0,
      verbs: 0
    }
  },

  contextTypes: {
    router: React.PropTypes.object
  },

  componentWillMount: function(){

    this.firebaseRef = new Firebase("https://amber-heat-1866.firebaseio.com/templates");

    var title = this.props.params.id

    this.firebaseRef.orderByChild("title").equalTo(title).on("child_added", function(dataSnapshot) {

      this.state.template.push(dataSnapshot.val());

    }.bind(this));
  },

  handleSubmit: function(event){
    event.preventDefault()

    var userRef = new Firebase('https://crackling-torch-879.firebaseio.com/');

    if(userRef.getAuth() === null){
      this.mustLogIn()
    } else {

      var storiesRef = new Firebase('https://amber-heat-1866.firebaseio.com/stories');

      var oldStoryArray = []
      var newStoryArray = []
      var oldStoryText = this.state.template[0].text;
      var newStoryText;
      var nouns = 0;
      var verbs = 0;

      var oldStoryArray = oldStoryText.split(/([\s,.]?\s)/).forEach(function(element){

        switch(element){
          case '_noun_':
            nouns++
            newStoryArray.push(this.refs[`noun${nouns}`].value)
            break;
          case '_verb_':
            verbs++
            newStoryArray.push(this.refs[`verb${verbs}`].value)
            break;
          default:
          newStoryArray.push(element)
        }

        newStoryText = newStoryArray.join(' ');

      }.bind(this))

      var newData = storiesRef.push({
        story: newStoryText,
        user: userRef.getAuth().uid
      });

      var dataID = newData.key();
      this.context.router.replace(`/stories/${dataID}`)
    }

  },

  mustLogIn: function(){
   $('#errorMessage').text('You must be logged in');
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

  var inputs = []
  var storyText = this.state.template[0].text;
  var nouns = 0;
  var verbs = 0;

  var textArray = storyText.split(/([\s,.]?\s)/).forEach(function(element, index){

    if(element === "_noun_"){
      nouns++
      inputs.push(<input key={`noun${nouns}`} ref={`noun${nouns}`} type="text" placeholder="Noun" />)
      this.state.nouns = nouns
    } else if (element === "_verb_"){
      verbs++
      inputs.push(<input key={`verb${verbs}`}ref={`verb${verbs}`} type="text" placeholder="Verb" />)
      this.state.verbs = verbs
    }

  }.bind(this))

  return(
    <div>
      {inputs}
    </div>
  )

  },

  render: function(){

    var style = {
      border: '2px solid black',
      padding: '6px'
    }

    return(
      <div className="centerContent">
        <div>Fill out the nouns and verbs with just knowing the title of the story!</div>
        <div id="story">
          <div id="errorMessage"></div>
          <div id="storyTitle">{this.renderTitle()}</div>
          <div className="form" style={style}>
            <form ref="storyForm" onSubmit={this.handleSubmit}>
              {this.renderTemplate()}
              <button type="submit">Finish</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
})
