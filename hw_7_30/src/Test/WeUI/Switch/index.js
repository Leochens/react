import React, { Component } from 'react';
import './style.css';
export default class Switch extends Component {

    static defaultProps = {
        checked: false,
        onChange: () => {}
    }
    constructor(props){
        super(props);
        this.state = {
            checked: this.props.checked
        }
    }
    toggleSwitch = () => {
        const { onChange } = this.props;
        this.setState({
            checked: !this.state.checked
        });
        onChange && onChange();
    }
    getSwitchClassName = () => {
        const { checked } = this.state;
        if(checked){
            return 'checked'
        }else {
            return null
        }
    }
    render() {
        return (
            <div onClick={this.toggleSwitch}  className={"switch-box " + this.getSwitchClassName()}>
                <div className="switch-ball"></div>
            </div>
        )
    }
}