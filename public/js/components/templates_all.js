import React from 'react'
import { Link } from 'react-router'

import Firebase from 'firebase'

import AllTemplates from './templates_all/templates_all.js'
import SingleTemplate from './templates_all/templates_single.js'

export default React.createClass({

  getInitialState: function(){
    return{
      templates: []
    }
  },

  componentWillMount: function(){

      this.firebaseRef = new Firebase("https://amber-heat-1866.firebaseio.com/");
      this.firebaseRef.on("child_added", function(dataSnapshot) {
        this.state.templates.push(dataSnapshot.val());

console.log('hello from templates_all')

        this.setState({
          items: this.state.templates
        });

      }.bind(this));

    },

    renderTemplates: function(key){
      return (
        <SingleTemplate key={key} template={this.state.templates[key]} />
      )
    },

    render: function(){
      return(
        <div>
          this is the template component
          <AllTemplates templates={Object.keys(this.state.templates).map(this.renderTemplates)} />
          {this.props.children}
        </div>
      );
    }

});
