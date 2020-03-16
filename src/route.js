import React, { Component } from 'react';
import { Switch, Route, } from 'react-router-dom';


import Contacts from './contacts';
import Products from './body'
import Info from './profile';



class RouterNav extends Component {
  render() {
    return (
        <div>
           
              <main>
                <Switch>
                <Route exact path='/body' component={Products}/>
            
                <Route  path='/contacts' component={Contacts}/>
                <Route  path='/profile' component={Info}/>
                </Switch>
                </main>
         
    
        </div>
    );
  }
}

export default RouterNav;
