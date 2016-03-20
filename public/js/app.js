'use strict';

import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

import Auth from './components/auth.js'
import Stories from './components/stories.js'
import StoriesN from './components/stories_new.js'
import StoriesS from './components/stories_single.js'
import TemplatesN from './components/templates_new.js'
import TemplatesE from './components/templates_edit.js'
import TemplatesA from './components/templates_all.js'

import Meta from './components/meta.js'

import Login from './components/login.js'
import Logout from './components/logout.js'
import Signup from './components/signup.js'

import Welcome from './components/welcome.js'

import Form from './components/form.js'

//added error file
// import {} from 'dotenv/config'
import Error from './components/error.js'
// dotenv.config();

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

let Nav = React.createClass({
  render: function () {
    return(
      <div>
        <div className="nav">
          <div className="header"><Link to="/"><header>Mad Mad Libs</header> </Link>  </div>
          <p></p>
          <div> <Link to="/templates"><div>Play</div></Link>        </div>
          <div> <Link to="/templates/new"><div>Create</div></Link>  </div>
          <div> <Link to="/stories"><div>Read</div></Link>          </div>
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


//I'm playing around here!!!
var NotFound = React.createClass({
  render : function() {
    return (
      <Error />
    )
  }
})


let $container = document.getElementById('container');

render((

  <div>
    <Router history={browserHistory}>
      <Route path="/" component={Nav} >
        <IndexRoute component={Welcome}/>
        <Route path="/auth" component={Auth}/>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />

        <Route path="/templates" component={TemplatesA} />
        <Route path="/templates/:id/story/new" component={StoriesN} />
        {/*<Route path="/my/stories" component={} />*/}
        <Route path="/story/:id" component={StoriesS} />
        <Route path="/templates/new" component={TemplatesN} />
        {/*<Route path="/my/templates" component={} />*/}
        <Route path="/stories" component={Stories} />
        <Route path="/my/templates/:id/edit" component={TemplatesE} />
        <Route path="/meta" component={Meta} />
        <Route path="/form" component={Form} /> {/*not a real Route*/}
        <Route path="/welcome" component={Welcome} />

        <Route path="*" component={NotFound} />

      </Route>
    </Router>

  </div>
)  , $container);
