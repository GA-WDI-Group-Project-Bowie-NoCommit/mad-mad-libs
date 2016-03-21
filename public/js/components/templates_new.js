import React from 'react'
import { Link } from 'react-router'
import Form from './form.js'

export default React.createClass({



  render: function(){

    return(
      <div>
        <div>
        This is where a user can create a template
        <p></p>
        <div><Form /></div>
        </div>
        <div> <Link to="/my/templates/:id/edit">Link to template_edit/view my template and also option to delete</Link>  </div>
      </div>
    )
  }
})
