import React, { Component } from 'react';
import Route from "./route";
import Footer from './footer';
import Menu from './navbar';
import Products from './body';

class App extends Component {
  render() {
    return (
   
        <div>
          <header>
            <Menu />
            <Route/>
            </header>
            <Products />
            <footer>
              <Footer />

            </footer>
           
        
       </div>
    );
  }
}

export default App;
