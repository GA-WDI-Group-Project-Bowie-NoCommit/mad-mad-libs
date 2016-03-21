'use strict';

import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

import Auth from './components/auth.js'
import Stories from './components/stories.js'
import StoriesN from './components/stories_new.js'
import StoriesS from './components/stories_single.js'
import StoriesM from './components/stories_mine.js'
import StoriesA from './components/stories_all.js'
import Templates from './components/templates.js'
import TemplatesA from './components/templates_all.js'
import TemplatesM from './components/templates_mine.js'
import TemplatesN from './components/templates_new.js'
import TemplatesE from './components/templates_edit.js'


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

const userRef = new Firebase('https://crackling-torch-879.firebaseio.com/');

let Nav = React.createClass({
  getInitialState: function(){
    return {
      user: 'out'
    }
  },
  componentWillMount: function(){
    if(userRef.getAuth()){
      this.setState({user: 'in'})
    } else {
      this.setState({user: 'out'});
    }
  },

  // logIn: function() {
  //
  // },

  render: function () {
    // return(
    //   <div>
    //   <div className="nav">
    //   <div className="header"><Link to="/"><header>Mad Mad Libs</header> </Link>  </div>
    //   <p></p>
    //   <div> <Link to="/stories/"><div>Stories</div></Link>        </div>
    //   <div> <Link to="/templates/"><div>Templates</div></Link>  </div>
    //   <div> <Link to="/meta"><div>Meta</div></Link>             </div>
    //   <div> <AuthApp /> </div>
    //   {/*<div> <Link to="/signup"><div>Sign Up</div></Link>        </div>*/}
    //   {/*<div> <Link to="/login"><div>Login</div></Link>           </div>*/}
    //   {/*<div> <Link to="/logout"><div>Log out</div></Link>        </div>*/}
    //
    //   </div>
    //   {this.props.children}
    //   </div>
    // )
    if(this.state.user==='in'){
      return(
        <div>
        <div className="nav">
<<<<<<< HEAD
        <div className="header"><Link to="/"><header>Mad Mad Libs</header> </Link>  </div>
        <p></p>
        <div> <Link to="/stories/"><div>Stories</div></Link>        </div>
        <div> <Link to="/templates/"><div>Templates</div></Link>  </div>
        <div> <Link to="/meta"><div>Meta</div></Link>             </div>
        {/*<div> <Link to="/signup"><div>Sign Up</div></Link>        </div>*/}
        {/*<div> <Link to="/login"><div>Login</div></Link>           </div>*/}
        <div> <Link to="/logout"><div>Log out</div></Link>        </div>
=======
          <div className="header"><Link to="/"><header>Mad Mad Libs</header> </Link>  </div>
          <p></p>
          <div className="storiesnav"> <Link to="/stories/"><div>Stories</div></Link>        </div>
          <div className="templatesnav"> <Link to="/templates/"><div>Templates</div></Link>  </div>
          <div className="metanav"> <Link to="/meta"><div>Meta</div></Link>             </div>
          <div> <Link to="/signup"><div>Sign Up</div></Link>        </div>
          <div> <Link to="/login"><div>Login</div></Link>           </div>
          <div> <Link to="/logout"><div>Log out</div></Link>        </div>
>>>>>>> 339b3909bc033919d972e14a037d098cf4f6aec0

        </div>
        {this.props.children}
        </div>
      )
    } else {
      return(
        <div>
        <div className="nav">
        <div className="header"><Link to="/"><header>Mad Mad Libs</header> </Link>  </div>
        <p></p>
        <div> <Link to="/stories/"><div>Stories</div></Link>        </div>
        <div> <Link to="/templates/"><div>Templates</div></Link>  </div>
        <div> <Link to="/meta"><div>Meta</div></Link>             </div>
        <div> <Link to="/signup"><div>Sign Up</div></Link>        </div>
        <div> <Link to="/login"><div>Login</div></Link>           </div>
        {/*<div> <Link to="/logout"><div>Log out</div></Link>        </div>*/}

        </div>
        {this.props.children}
        </div>
      )

    }
  }
})

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

        <Route path="/stories" component={Stories} />
        <Route path="/stories/new/templates/:id" component={StoriesN} />
        <Route path="/stories/:id" component={StoriesS} />
        <Route path="/stories/mine" component={StoriesM} />
        <Route path="/stories/all" component={StoriesA} />
        <Route path="/templates" component={Templates} />
        <Route path="templates_mine" component={TemplatesM} />
        <Route path="/templates/new" component={TemplatesN} />
        <Route path="/templates/:id/edit" component={TemplatesE} />
        <Route path="/meta" component={Meta} />
        <Route path="/form" component={Form} /> {/*not a real Route*/}
        <Route path="/welcome" component={Welcome} />

        <Route path="*" component={NotFound} />

      </Route>
    </Router>

  </div>
)  , $container);

// const AuthApp = React.createClass({
//   getInitialState: function(){
//     return {
//       user: ''
//     }
//   },
//   componentWillMount: function(){
//     if(userRef.getAuth()){
//       this.setState({user: 'true'})
//     };
//     this.setState({user: ''});
//   },
//   render: function(){
//     if(this.state.user === 'true'){
//       return(
//         <div><Link to="/logout"><div>Log out</div></Link></div>
//       )
//     }
//     return(
//       <div>
//         <div> <Link to="/signup"><div>Sign Up</div></Link>        </div>
//         <div> <Link to="/login"><div>Login</div></Link>           </div>
//       </div>
//     )
//   }
// })
