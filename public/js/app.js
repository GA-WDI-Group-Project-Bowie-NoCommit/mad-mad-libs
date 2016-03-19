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



import { Router, Route, browserHistory, IndexRoute } from 'react-router'

let Nav = React.createClass({
  render: function () {
    return(
      <div>
        <div className="nav">
          <div className="header"><Link to="/"><header>Mad Mad Libs</header> </Link>  </div>
          <p></p>
          <div> <Link to="/templates"><div>Play</div></Link>        </div>
          <div> <Link to="/template_new"><div>Create</div></Link>   </div>
          <div> <Link to="/template_edit"><div>Read</div></Link>    </div>
          <div> <Link to="/Meta"><div>Meta</div></Link>             </div>
          <div> <Link to="/signup"><div>Sign Up</div></Link>        </div>
          <div> <Link to="/login"><div>Login</div></Link>           </div>
          <div> <Link to="/logout"><div>Log out</div></Link>        </div>

        </div>
        <App />
          {this.props.children}
      </div>
    )
  }
})

let App = React.createClass({
  render: function() {
    return (
        <div>



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
        <IndexRoute component={Welcome}/>
        <Route path="/form" component={Form} />
        <Route path="/auth" component={Auth}/>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/complete" component={CStory} />
        <Route path="/template_new" component={NTemplate} >
          <Route path="form" component={Form}/>
        </Route>
        <Route path="/template_edit" component={ETemplate} />
        <Route path="/meta" component={Meta} />
        <Route path="/templates" component={PTemplate} />
        <Route path="/template_form" component={TForm} />
        <Route path="/welcome" component={Welcome} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>

  </div>
)  , $container);
