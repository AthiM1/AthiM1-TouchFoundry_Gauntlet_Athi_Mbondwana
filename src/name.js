import React, { Component } from 'react'

export default class Name extends Component {
   constructor() {
       super();
       this.name = "online store";
   }

    render() {
        return (
            <div>
            <h1>Athi Mbondwana's {this.name}!</h1>
            </div>
        ); 
    }
} 