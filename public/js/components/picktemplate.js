import React from 'react'
import { Link } from 'react-router'
import Form from './form.js'


export default React.createClass({



  render: function(){

    return(
      <div>
      <div><Link to="/">Home</Link></div>
        <div>View of all titles of templates that can be clicked on to go to a play form to fill out nouns and verbs</div>
        <div><Link to="/form">Form</Link></div>
        <Form></Form>
      <div> </div>
      
      </div>
    )
  }
})
