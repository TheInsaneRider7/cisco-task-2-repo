import React, { Component } from 'react' 
import './component1.css'

class component1 extends Component{
    render() {
        return (
            <div className="component1">
                <h2 className="component1heading">{this.props.name}</h2>
                <div className="component1content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default component1;
