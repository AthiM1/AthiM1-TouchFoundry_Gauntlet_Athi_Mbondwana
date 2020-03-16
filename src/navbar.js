import React, { Component } from 'react';

export default class Menu extends Component {
    render(){
        return(
            <div>
                <nav class="navbar">
                  <h4>hourspace</h4>
                  <input label="search here" icon="search"/>
                <div id="c"><h4>List Your Space</h4> </div>
                <div><h5>Sign Up</h5> </div>
                <div><h5>Log In</h5> </div>
                </nav>
            </div>
     );
  }
}
