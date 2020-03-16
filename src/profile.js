import React, { Component } from 'react';


 class Info extends Component {
    state= {
        value: "Enter your details here",
        isInEditMode: false,
    } 

changeEditMode = () => {
    this.setState({
        isInEditMode: !this.state.isInEditMode
    })
}
updateComponentValue = () => {
    this.setState({
        isInEditMode: false,
        value: this.refs.theTextInput.value
    })
}
renderEditView = () => {
    return<div>
        <input
        type="text"
        defaultValue={this.state.value}
        ref="theTextInput"
        />
        <button onClick={this.changeEditMode}>Cancel</button>
        <button onClick={this.updateComponentValue}>sUbmit</button>
        </div>
}
renderDefaultView = () => {
    return <div onClick={this.changeEditMode}>
         <h3>Click on text! to Sign in</h3>
        {this.state.value}
        </div> 
}

render() {
    return this.state.isInEditMode?
    this.renderEditView() :
    this.renderDefaultView()
}
}

export default Info;