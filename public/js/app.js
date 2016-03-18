'use strict';

import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

import Auth from './components/auth.js'
import CStory from './components/completed_story.js'
import NTemplate from './components/create_new_template.js'
import ETemplate from './components/edit_template.js'
import Form from './components/form.js'

import Login from './components/login.js'
import Logout from './components/logout.js'
import Meta from './components/meta.js'
import PTemplate from './components/picktemplate.js'
import Signup from './components/signup.js'
import TForm from './components/template_form.js'
import Welcome from './components/welcome.js'



import { Router, Route, browserHistory } from 'react-router'

let Nav = React.createClass({
  render: function () {
    return(
      <div> NAV NAV NAV!
        <div><Link to="/">Already Home</Link></div>
        <div><Link to="/form">Form</Link></div>
        <div><Link to="/complete">Completed Story</Link></div>

        <div><Link to="/new_template">New Template</Link></div>
        <div><Link to="/edit_template">Edit Template</Link></div>
        <div><Link to="/auth">Auth</Link></div>
        <div><Link to="/Meta">Meta</Link></div>
        <div><Link to="/all_templates">All Templates</Link></div>
        <div><Link to="/template_form">Template Form (fill in nouns and verbs)</Link></div>
        <div><Link to="/Welcome">Welcome!</Link></div>

        {this.props.children}

      </div>
    )
  }
})

let App = React.createClass({
  render: function() {
    return (
        <div>
          APP APP APP
        </div>
    );
  }
});



var NotFound = React.createClass({
  render : function() {
    return <h1>404: Not Found... sry</h1>
  }
})


let $container = document.getElementById('container');

render((

  <div>
    <Router history={browserHistory}>
      <Route path="/" component={Nav} >
        <Route path="/form" component={Form} />
        <Route path="/complete" component={CStory} />
        <Route path="/new_template" component={NTemplate} />
        <Route path="/edit_template" component={ETemplate} />
        <Route path="/auth" component={Auth} >
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
        </Route>
        <Route path="/meta" component={Meta} />
        <Route path="/all_templates" component={PTemplate} />
        <Route path="/template_form" component={TForm} />
        <Route path="/welcome" component={Welcome} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
    <App />
  </div>
)  , $container);
