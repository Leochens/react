import React, { Component } from 'react'
import '../App.css'

export default class Panel extends Component {

    onClick = () => {
        const { onClick } = this.props;
        if (onClick) {
            onClick();
        }
    }
    render() {
        const { isActive } = this.props
        if (!isActive) { return null }
        return (
            <div className="panel" >
                <button className="btn btn-close" onClick={this.onClick}>close</button>
                <div className="panel-content">
                    
                    <input className=" panel-input" placeholder="Title"></input>
                    <input className=" panel-input" placeholder="Description"></input>
                    <input type="submit" className=" panel-input" value="OK"></input>
                </div>
                
            </div>
        );
    }

}